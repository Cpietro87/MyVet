import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("venta")
class Venta {

  @PrimaryColumn()
  id: string;

  @Column()
  numero: string;

  @Column()
  tipo: string;

  @Column()
  sucursal: string;

  @Column()
  cuit: string;

  @Column()
  cuil: string;

  @Column()
  consulta: string;

  @Column()
  precio: string;

  @Column()
  codigoproducto: string;

  @Column()
  cantidad: string;

  @Column()
  formapago: string;

  @CreateDateColumn()
  created_at: Date;



  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

}

export { Venta };