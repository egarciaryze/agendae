module.exports = {
	"name": "default",
	"type": "postgres",
	"host": "awseb-e-g33i4wpfsj-stack-awsebrdsdatabase-qmtmfifm98mh.cl2cd490echn.us-east-1.rds.amazonaws.com",
	"username": "postgres",
	"password": "eAYP5enJgz#7$G6c",
	"database": "agendae",
	"synchronize": true,
	"entities": [
		"dist/**/*.entity.{ts,js}"
	],
	"migrations": [
		"dist/migrations/**/*.{ts,js}"
	],
	"cli": {
		"migrationsDir": "src/migrations"
	}
}