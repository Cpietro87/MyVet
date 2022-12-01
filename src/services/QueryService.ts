import { getCustomRepository } from "typeorm";
import { QuerysRepository } from "../repositories/QueryRepository";
import { Query } from "../entities/Query";

interface IQuery {
    idQuery?: string;
    numero:string;
    fecha: string;
    dueno: string;
    doctor: string;
    queryname: string;
    patientId: string;
    reason: string;
    diagnosis: string;
  }
class QueryService {
      async create({ numero,fecha,dueno,doctor,queryname, patientId, reason, diagnosis }: IQuery) {
        if (!numero || !fecha || !dueno||!doctor||!queryname || !patientId || !reason || !diagnosis) {
          throw new Error("Por favor rellenar todos los campos");
        }
    
        const queryRepository = getCustomRepository(QuerysRepository);
    
        const usernameAlreadyExists = await queryRepository.findOne({ queryname });
    
        if (usernameAlreadyExists) {
          throw new Error("El nombre de consulta ya esta registrado");
        }
    

    
        const query = queryRepository.create({ numero,fecha,dueno,doctor,queryname,patientId, reason, diagnosis});
    
        await queryRepository.save (query);
    
        return query;
      }
      async delete(idQuery: string) {
        const queryRepository = getCustomRepository(QuerysRepository);
    
        const query = await queryRepository
          .createQueryBuilder()
          .delete()
          .from(Query)
          .where("idQuery = :idQuery", { idQuery })
          .execute();
    
        return query;
      }
      async getData(idQuery: string) {
        const queryRepository = getCustomRepository(QuerysRepository);
    
        const query = await queryRepository.findOne(idQuery);
    
        return query;
      }
      async list() {
        const queryRepository = getCustomRepository(QuerysRepository);
    
        const query = await queryRepository.find();
    
        return query;
      }
      async search(search: string) {
        if (!search) {
          throw new Error("Por favor complete el campo de búsquedad");
        }
    
        const queryRepository = getCustomRepository(QuerysRepository);
    
        const query = await queryRepository
          .createQueryBuilder()
          .where("queryname like :search", { search: `%${search}%` })
          .orWhere("patientId like :search", { search: `%${search}%` })
          .orWhere("reason like :search", { search: `%${search}%` })
          .orWhere("diagnosis like :search", { search: `%${search}%` })
          .getMany();
    
        return query;
    
      }
      async update({ idQuery,numero,fecha,dueno,doctor, queryname, patientId, reason, diagnosis }: IQuery) {
        const queryRepository = getCustomRepository(QuerysRepository);
    
        const query = await queryRepository
          .createQueryBuilder()
          .update(Query)
          .set({ queryname,patientId,numero,fecha,dueno,doctor, reason, diagnosis })
          .where("idQuery = :idQuery", { idQuery })
          .execute();
    
        return query;
    
      }

}

export {QueryService};