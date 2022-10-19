import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1649303407773 implements MigrationInterface {
    name = 'Initial1649303407773'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "service_providers" ("id" character varying NOT NULL, "companyName" character varying NOT NULL, "taxId" character varying NOT NULL, CONSTRAINT "PK_73c86f1298c5285d76e66da2da9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clients" ("id" character varying NOT NULL, "name" character varying NOT NULL, "taxId" character varying NOT NULL, CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "clients"`);
        await queryRunner.query(`DROP TABLE "service_providers"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
