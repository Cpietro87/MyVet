import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTurno1624747881677 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "turno",
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
                        name: "paciente",
                        type: "varchar"
                    },
                    {
                        name: "propietario",
                        type: "varchar"
                    },
                    {
                        name: "fechaturno",
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
        await queryRunner.dropTable("turno");
    }

}
