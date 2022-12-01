import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateVenta1624747881677 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "venta",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "numero",
                        type: "varchar"
                    },
                    {
                        name: "tipo",
                        type: "varchar",
                        length: "1"
                    },
                    {
                        name: "sucursal",
                        type: "varchar"
                    },
                    
                    {
                        name: "cuit",
                        type: "varchar",
                        
                    },
                    {
                        name: "cuil",
                        type: "varchar"
                    },
                    {
                        name: "consulta",
                        type: "varchar"
                    },
                    {
                        name: "precio",
                        type: "varchar"
                    },
                    {
                        name: "codigoproducto",
                        type: "varchar"
                    },
                    {
                        name: "cantidad",
                        type: "varchar"
                    },
                    {
                        name: "formapago",
                        type: "varchar"
                    },

                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("venta");
    }

}
