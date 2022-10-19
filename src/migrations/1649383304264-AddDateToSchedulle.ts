import {MigrationInterface, QueryRunner} from "typeorm";

export class AddDateToSchedulle1649383304264 implements MigrationInterface {
    name = 'AddDateToSchedulle1649383304264'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedulles" ADD "date" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedulles" DROP COLUMN "date"`);
    }

}
