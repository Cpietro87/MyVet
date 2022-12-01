import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("turno")
class Turno {

  @PrimaryColumn()
  id: string;

  @Column()
  numero: string;

  @Column()
  paciente: string;

  @Column()
  propietario: string;

  @Column()
  fechaturno: string;

 

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

}

export { Turno };