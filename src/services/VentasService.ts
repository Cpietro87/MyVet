import { getCustomRepository } from "typeorm";
import { VentaRepository } from "../repositories/VentaRepository";
import { Venta } from "../entities/Venta";

interface IVenta {
    id?: string;
    numero: string;
    tipo: string;
    sucursal: string;
    cuit: string;
    cuil: string;
    consulta: string;
    precio: string;
    codigoproducto: string;
    cantidad: string;
    formapago: string;

  }
class VentaService {
      async create({ numero, tipo, sucursal,cuit, cuil,consulta,precio,codigoproducto,cantidad,formapago }: IVenta) {
        if (!numero || !tipo || !sucursal || !cuit || !cuil || !consulta || !precio || !codigoproducto || !cantidad ||  !formapago) {
          throw new Error("Por favor rellenar todos los campos");
        }
    
        const ventaRepository = getCustomRepository(VentaRepository);
    
       
        const venta = ventaRepository.create({ numero, tipo, sucursal,cuit, cuil,consulta,precio,codigoproducto,cantidad,formapago });
    
        await ventaRepository.save (venta);
    
        return venta;
      }
      async delete(id: string) {
        const ventaRepository = getCustomRepository(VentaRepository);
    
        const venta = await ventaRepository
          .createQueryBuilder()
          .delete()
          .from(Venta)
          .where("id = :id", { id })
          .execute();
    
        return venta;
      }
      async getData(id: string) {
        const ventaRepository = getCustomRepository(VentaRepository);
    
        const venta = await ventaRepository.findOne(id);
    
        return venta;
      }
      async list() {
        const ventaRepository = getCustomRepository(VentaRepository);
    
        const venta = await ventaRepository.find();
    
        return venta;
      }
      async search(search: string) {
        if (!search) {
          throw new Error("Por favor complete el campo de búsquedad");
        }
    
        const ventaRepository = getCustomRepository(VentaRepository);
    
        const venta = await ventaRepository
          .createQueryBuilder()
          .where("clientname like :search", { search: `%${search}%` })
          .orWhere("dni like :search", { search: `%${search}%` })
          .orWhere("email like :search", { search: `%${search}%` })
          .orWhere("phone like :search", { search: `%${search}%` })
          .orWhere("city like :search", { search: `%${search}%` })
          .getMany();
    
        return venta;
    
      }
      async update({  id,numero, tipo, sucursal,cuit, cuil,consulta,precio,codigoproducto,cantidad,formapago}: IVenta) {
        const ventaRepository = getCustomRepository(VentaRepository);
    
        const venta = await ventaRepository
          .createQueryBuilder()
          .update(Venta)
          .set({  id, numero, tipo, sucursal,cuit, cuil,consulta,precio,codigoproducto,cantidad,formapago})
          .where("id = :id", { id })
          .execute();
    
        return venta;
    
      }

}

export {VentaService};