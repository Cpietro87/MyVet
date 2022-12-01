import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClient1624747881677 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "clients",
                columns: [
                    {
                        name: "idClient",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "clientname",
                        type: "varchar"
                    },
                    {
                        name: "dni",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "Phone",
                        type: "varchar"
                    },
                    {
                        name: "City",
                        type: "varchar"
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
        await queryRunner.dropTable("clients");
    }

}
