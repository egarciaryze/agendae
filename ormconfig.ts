import { ConnectionOptions } from 'typeorm';

// Check typeORM documentation for more information.
const config: ConnectionOptions = {
    type: 'postgres',
    host: process.env.TYPEORM_HOST, // localhost
    port: 5432,
    username: process.env.TYPEORM_USERNAME, // databse login role username
    password: process.env.TYPEORM_PASSWORD, // database login role password
    database: process.env.TYPEORM_DATABASE, // db name

    // entities name should be **.entity.ts
    entities: [__dirname + '/dist/**/*.entity.js'],

    // We are using migrations, synchronize should be set to false.
    // synchronize: process.env.TYPEORM_SYNCHRONIZE
    //  ? process.env.TYPEORM_SYNCHRONIZE.toLowerCase() === 'true'
    //  : false,
    synchronize: false,

    // Run migrations automatically,
    // you can disable this if you prefer running migration manually.
    migrationsRun: false,

    logging: false,
    // logger: 'advanced-console',

    // Allow both start:prod and start:dev to use migrations
    // __dirname is either dist or src folder, meaning either
    // the compiled js in prod or the ts in dev.
    migrations: [__dirname + '/dist/migrations/**/*.{ts,js}'],
    cli: {
        // Location of migration should be inside src folder
        // to be compiled into dist/ folder.
        migrationsDir: 'dist/migrations'
    }
};

export = config;