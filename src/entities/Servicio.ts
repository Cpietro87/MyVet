import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("servicio")
class Servicio {

  @PrimaryColumn()
  id: string;

  @Column()
  codigo: string;

  @Column()
  tipo: string;

  @Column()
  precio: string;

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

export { Servicio };