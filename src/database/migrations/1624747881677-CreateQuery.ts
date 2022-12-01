import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateQuery1624747881677 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "querys",
                columns: [
                    {
                        name: "idQuery",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "numero",
                        type: "varchar"
                    },
                    {
                        name: "fecha",
                        type: "varchar"
                    },
                    {
                        name: "dueno",
                        type: "varchar"
                    },
                    {
                        name: "doctor",
                        type: "varchar"
                    },
                    {
                        name: "queryname",
                        type: "varchar"
                    },
                    {
                        name: "patientId",
                        type: "varchar"
                    },
                    {
                        name: "reason",
                        type: "varchar"
                    },
                    {
                        name: "diagnosis",
                        type: "varchar",
                      
                    },
                    

                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("querys");
    }

}