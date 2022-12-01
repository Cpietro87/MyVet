import { Repository, EntityRepository } from "typeorm";
import { Turno } from "../entities/Turno";

@EntityRepository(Turno)
class TurnoRepository extends Repository<Turno>{ }

export { TurnoRepository };