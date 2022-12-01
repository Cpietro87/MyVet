import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMedicamento1624747881677 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "medicamento",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "mediname",
                        type: "varchar"
                    },
                    {
                        name: "tipo",
                        type: "varchar"
                    },
                    {
                        name: "dosis",
                        type: "varchar"
                    },
                    {
                        name: "precio",
                        type: "varchar"
                    },
                    {
                        name: "vencimiento",
                        type: "Date",
                        
                    },
                    

                   
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("medicamento");
    }

}
