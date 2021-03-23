// ================
//     PORT
// ================

process.env.PORT = process.env.PORT || 53317;



// ================
//     ENV
// ================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'



// ================
//     LIFE TOKEN
// ================
process.env.LIFE_TOKEN = '24h';


// ================
//     SEED JWT
// ================
process.env.SEED = process.env.SEED || 'secret';


// ================
//     CONECT DB
// ================
process.env.DB_USERNAME = process.env.DB_USERNAME || 'ramon';
process.env.DB_PASSWORD = process.env.DB_PASSWORD || '123';
process.env.DB_DATABASE = process.env.DB_DATABASE || 'pruebaSps';
process.env.DB_HOST = process.env.DB_HOST || 'localhost';
process.env.DB_PORT = process.env.DB_PORT || '5432';
process.env.DB_DIALECT = process.env.DB_DIALECT || 'postgres';