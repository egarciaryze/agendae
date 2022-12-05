import {MigrationInterface, QueryRunner} from "typeorm";

export class AddedAutoGeneratePrimaryColumn1670213170429 implements MigrationInterface {
    name = 'AddedAutoGeneratePrimaryColumn1670213170429'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedulles" DROP CONSTRAINT "PK_f2b3056c1a5a29b12619d1c4428"`);
        await queryRunner.query(`ALTER TABLE "schedulles" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "schedulles" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedulles" ADD CONSTRAINT "PK_f2b3056c1a5a29b12619d1c4428" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedulles" DROP CONSTRAINT "PK_f2b3056c1a5a29b12619d1c4428"`);
        await queryRunner.query(`ALTER TABLE "schedulles" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "schedulles" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedulles" ADD CONSTRAINT "PK_f2b3056c1a5a29b12619d1c4428" PRIMARY KEY ("id")`);
    }

}
