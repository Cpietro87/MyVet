import { getCustomRepository } from "typeorm";
import { ServicioRepository } from "../repositories/ServicioRepository";
import { Servicio } from "../entities/Servicio";

interface IServicio {
    id?: string;
    codigo: string;
    tipo: string;
    precio: string;
    
  }
class ServicioService {
      async create({ codigo,tipo,precio  }: IServicio) {
        if (!codigo || !tipo || !precio) {
          throw new Error("Por favor rellenar todos los campos");
        }
    
        const servicioRepository = getCustomRepository(ServicioRepository);
    
        
    
        const servicio = servicioRepository.create({ codigo,tipo,precio });
    
        await servicioRepository.save (servicio);
    
        return servicio;
      }
      async delete(id: string) {
        const servicioRepository = getCustomRepository(ServicioRepository);
    
        const servicio = await servicioRepository
          .createQueryBuilder()
          .delete()
          .from(Servicio)
          .where("id = :id", { id })
          .execute();
    
        return servicio;
      }
      async getData(id: string) {
        const servicioRepository = getCustomRepository(ServicioRepository);
    
        const servicio = await servicioRepository.findOne(id);
    
        return servicio;
      }
      async list() {
        const servicioRepository = getCustomRepository(ServicioRepository);
    
        const servicio = await servicioRepository.find();
    
        return servicio;
      }
      async search(search: string) {
        if (!search) {
          throw new Error("Por favor complete el campo de búsquedad");
        }
    
        const servicioRepository = getCustomRepository(ServicioRepository);
    
        const servicio = await servicioRepository
          .createQueryBuilder()
          .where("clientname like :search", { search: `%${search}%` })
          .orWhere("dni like :search", { search: `%${search}%` })
          .orWhere("email like :search", { search: `%${search}%` })
          .orWhere("phone like :search", { search: `%${search}%` })
          .orWhere("city like :search", { search: `%${search}%` })
          .getMany();
    
        return servicio;
    
      }
      async update({ id, codigo,tipo,precio }: IServicio) {
        const servicioRepository = getCustomRepository(ServicioRepository);
    
        const servicio = await servicioRepository
          .createQueryBuilder()
          .update(Servicio)
          .set({ id, codigo,tipo,precio })
          .execute();
    
        return servicio;
    
      }

}

export {ServicioService};