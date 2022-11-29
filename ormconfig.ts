import { ConnectionOptions } from 'typeorm';

export default {
  type: 'postgres',
  host: "awseb-e-g33i4wpfsj-stack-awsebrdsdatabase-qmtmfifm98mh.cl2cd490echn.us-east-1.rds.amazonaws.com",
  port: 5432,
  username: "postgres",
  password: "eAYP5enJgz#7$G6c",
  database: "agendae",
  synchronize: false,
  logging: true,
  logger: 'file',
  entities: [
    "dist/**/*.entity.{ts,js}"
  ],
  migrations: [
    "dist/src/migrations/**/*.{ts,js}"
  ],
  cli: {
	  migrationsDir: "src/migrations"
  },
} as ConnectionOptions;