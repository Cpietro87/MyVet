import { Repository, EntityRepository } from "typeorm";
import { Medicamento } from "../entities/Medicamento";

@EntityRepository(Medicamento)
class MedicamentoRepository extends Repository<Medicamento>{ }

export { MedicamentoRepository };