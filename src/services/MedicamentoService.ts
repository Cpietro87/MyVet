import { getCustomRepository } from "typeorm";
import { MedicamentoRepository } from "../repositories/MedicamentoRepository";
import { Medicamento } from "../entities/Medicamento";

interface IMedicamento {
    id?: string;
    mediname: string;
    tipo: string;
    dosis: string;
    precio: string;
    vencimiento: string;
  }
class MedicamentoService {
      async create({ mediname, tipo, dosis, precio, vencimiento }: IMedicamento) {
        if (!mediname || !tipo || !dosis || !precio || !vencimiento) {
          throw new Error("Por favor rellenar todos los campos");
        }
    
        const medicamentoRepository = getCustomRepository(MedicamentoRepository);
    
   
    
        const medicamento = medicamentoRepository.create({ mediname, tipo, dosis, precio, vencimiento });
    
        await medicamentoRepository.save(medicamento);
    
        return medicamento;
      }
      async delete(id: string) {
        const medicamentoRepository = getCustomRepository(MedicamentoRepository);
    
        const medicamento = await medicamentoRepository
          .createQueryBuilder()
          .delete()
          .from(Medicamento)
          .where("id = :id", { id })
          .execute();
    
        return medicamento;
      }
      async getData(id: string) {
        const medicamentoRepository = getCustomRepository(MedicamentoRepository);
    
        const medicamento = await medicamentoRepository.findOne(id);
    
        return medicamento;
      }
      async list() {
        const medicamentoRepository = getCustomRepository(MedicamentoRepository);
    
        const medicamento = await medicamentoRepository.find();
    
        return medicamento;
      }
      async search(search: string) {
        if (!search) {
          throw new Error("Por favor complete el campo de búsquedad");
        }
    
        const medicamentoRepository = getCustomRepository(MedicamentoRepository);
    
        const medicamento = await medicamentoRepository
          .createQueryBuilder()
          .where("medicaname like :search", { search: `%${search}%` })
          .orWhere("tipo like :search", { search: `%${search}%` })
          .orWhere("dosis like :search", { search: `%${search}%` })
          .orWhere("precio like :search", { search: `%${search}%` })
          .orWhere("vencimiento like :search", { search: `%${search}%` })
          .getMany();
    
        return medicamento;
    
      }
      async update({ id, mediname, tipo, dosis, precio, vencimiento }: IMedicamento) {
        const medicamentoRepository = getCustomRepository(MedicamentoRepository);
    
        const medicamento = await medicamentoRepository
          .createQueryBuilder()
          .update(Medicamento)
          .set({ mediname, tipo, dosis,precio, vencimiento })
          .where("id = :id", { id })
          .execute();
    
        return medicamento;
    
      }

}

export {MedicamentoService};