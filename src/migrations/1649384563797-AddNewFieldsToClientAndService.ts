import {MigrationInterface, QueryRunner} from "typeorm";

export class AddNewFieldsToClientAndService1649384563797 implements MigrationInterface {
    name = 'AddNewFieldsToClientAndService1649384563797'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "phone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "address" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "userId" character varying`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "UQ_59c1e5e51addd6ebebf76230b37" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "service_providers" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "service_providers" ADD "phone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "service_providers" ADD "address" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "service_providers" ADD "userId" character varying`);
        await queryRunner.query(`ALTER TABLE "service_providers" ADD CONSTRAINT "UQ_1198a9c099e292b51ae75dcb11f" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "FK_59c1e5e51addd6ebebf76230b37" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "service_providers" ADD CONSTRAINT "FK_1198a9c099e292b51ae75dcb11f" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "service_providers" DROP CONSTRAINT "FK_1198a9c099e292b51ae75dcb11f"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "FK_59c1e5e51addd6ebebf76230b37"`);
        await queryRunner.query(`ALTER TABLE "service_providers" DROP CONSTRAINT "UQ_1198a9c099e292b51ae75dcb11f"`);
        await queryRunner.query(`ALTER TABLE "service_providers" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "service_providers" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "service_providers" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "service_providers" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "UQ_59c1e5e51addd6ebebf76230b37"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "email"`);
    }

}
