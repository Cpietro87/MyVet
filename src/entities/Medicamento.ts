import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("medicamento")
class Medicamento {

  @PrimaryColumn()
  id: string;

  @Column()
  mediname: string;

  @Column()
  tipo: string;

  @Column()
  dosis: string;

  @Column()
  precio: string;

  @Column()
  vencimiento: string;

  
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

}

export { Medicamento };