import { getCustomRepository } from "typeorm";
import { TurnoRepository } from "../repositories/TurnoRepository";
import { Turno } from "../entities/Turno";

interface ITurno {
    id?: string;
    numero: string;
    paciente: string;
    propietario: string;
    fechaturno: string;
   
  }
class TurnoService {
      async create({ numero, paciente, propietario, fechaturno,   }: ITurno) {
        if (!numero || !paciente || !propietario || !fechaturno ) {
          throw new Error("Por favor rellenar todos los campos");
        }
    
        const turnoRepository = getCustomRepository(TurnoRepository);
    
        const turnoAlreadyExists = await turnoRepository.findOne({ numero });
    
        if (turnoAlreadyExists) {
          throw new Error("El numero del turno ya existe");
        }
    
       
    
        const turno = turnoRepository.create({numero, paciente, propietario, fechaturno,  });
    
        await turnoRepository.save (turno);
    
        return turno;
      }
      async delete(id: string) {
        const turnoRepository = getCustomRepository(TurnoRepository);
    
        const turno = await turnoRepository
          .createQueryBuilder()
          .delete()
          .from(Turno)
          .where("id= :id", { id })
          .execute();
    
        return turno;
      }
      async getData(id: string) {
        const turnoRepository = getCustomRepository(TurnoRepository);
    
        const turno = await turnoRepository.findOne(id);
    
        return turno;
      }
      async list() {
        const turnoRepository = getCustomRepository(TurnoRepository);
    
        const turno = await turnoRepository.find();
    
        return turno;
      }
      async search(search: string) {
        if (!search) {
          throw new Error("Por favor complete el campo de búsquedad");
        }
    
        const clientsRepository = getCustomRepository(TurnoRepository);
    
        const client = await clientsRepository
          .createQueryBuilder()
          .where("clientname like :search", { search: `%${search}%` })
          .orWhere("dni like :search", { search: `%${search}%` })
          .orWhere("email like :search", { search: `%${search}%` })
          .orWhere("phone like :search", { search: `%${search}%` })
          .orWhere("city like :search", { search: `%${search}%` })
          .getMany();
    
        return client;
    
      }
      async update({ id, numero, paciente, propietario, fechaturno, }: ITurno) {
        const clientsRepository = getCustomRepository(TurnoRepository);
    
        const client = await clientsRepository
          .createQueryBuilder()
          .update(Turno)
          .set({ id,numero, paciente, propietario, fechaturno,})
          .where("id = :id", { id })
          .execute();
    
        return client;
    
      }

}

export {TurnoService};