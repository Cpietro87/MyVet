import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateServicio1624747881677 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "servicio",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "codigo",
                        type: "varchar"
                    },
                    {
                        name: "tipo",
                        type: "varchar"
                    },
                    {
                        name: "precio",
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
        await queryRunner.dropTable("users");
    }

}
