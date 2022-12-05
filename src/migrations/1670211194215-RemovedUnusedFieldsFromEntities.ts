import {MigrationInterface, QueryRunner} from "typeorm";

export class RemovedUnusedFieldsFromEntities1670211194215 implements MigrationInterface {
    name = 'RemovedUnusedFieldsFromEntities1670211194215'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "service_providers" DROP COLUMN "companyName"`);
        await queryRunner.query(`ALTER TABLE "service_providers" DROP COLUMN "taxId"`);
        await queryRunner.query(`ALTER TABLE "service_providers" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "service_providers" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "taxId"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "service_providers" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedulles" ADD "hour" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedulles" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "service_providers" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "address" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "phone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "taxId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "service_providers" ADD "address" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "service_providers" ADD "phone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "service_providers" ADD "taxId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "service_providers" ADD "companyName" character varying NOT NULL`);
    }

}
