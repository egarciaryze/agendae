import {MigrationInterface, QueryRunner} from "typeorm";

export class AddSchedulleTable1649367190051 implements MigrationInterface {
    name = 'AddSchedulleTable1649367190051'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "schedulles" ("id" character varying NOT NULL, "clientId" character varying NOT NULL, "serviceProviderId" character varying NOT NULL, CONSTRAINT "PK_f2b3056c1a5a29b12619d1c4428" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "schedulles"`);
    }

}
