import { Repository, EntityRepository } from "typeorm";
import { Venta } from "../entities/Venta";

@EntityRepository(Venta)
class VentaRepository extends Repository<Venta>{ }

export { VentaRepository };