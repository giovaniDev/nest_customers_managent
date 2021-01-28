import { table } from "console";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class UserTable1611829274029 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'int4',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'social',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'cnpj',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'adress',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'number',
                        type: 'string',
                        isNullable: false,
                    },
                    {
                        name: 'district',
                        type: 'varchar',
                        isNullable: false,
                    },                    {
                        name: 'city',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'state',
                        type: 'varchar',
                        isNullable: false,
                    }
                ]
            }),
            false
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query('DROP TABLE users')
    }

}
