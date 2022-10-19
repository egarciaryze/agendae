import {MigrationInterface, QueryRunner} from "typeorm";

export class test1666170010246 implements MigrationInterface {
    name = 'test1666170010246'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedulles" ALTER COLUMN "clientId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedulles" ADD CONSTRAINT "UQ_e6ac369580e9c8a6e03617596a3" UNIQUE ("clientId")`);
        await queryRunner.query(`ALTER TABLE "schedulles" ALTER COLUMN "serviceProviderId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedulles" ADD CONSTRAINT "UQ_fa4226c750dc25e486d043211af" UNIQUE ("serviceProviderId")`);
        await queryRunner.query(`ALTER TABLE "schedulles" ADD CONSTRAINT "FK_e6ac369580e9c8a6e03617596a3" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedulles" ADD CONSTRAINT "FK_fa4226c750dc25e486d043211af" FOREIGN KEY ("serviceProviderId") REFERENCES "service_providers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedulles" DROP CONSTRAINT "FK_fa4226c750dc25e486d043211af"`);
        await queryRunner.query(`ALTER TABLE "schedulles" DROP CONSTRAINT "FK_e6ac369580e9c8a6e03617596a3"`);
        await queryRunner.query(`ALTER TABLE "schedulles" DROP CONSTRAINT "UQ_fa4226c750dc25e486d043211af"`);
        await queryRunner.query(`ALTER TABLE "schedulles" ALTER COLUMN "serviceProviderId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedulles" DROP CONSTRAINT "UQ_e6ac369580e9c8a6e03617596a3"`);
        await queryRunner.query(`ALTER TABLE "schedulles" ALTER COLUMN "clientId" SET NOT NULL`);
    }

}
