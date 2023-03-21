import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();
let db;

//process.env.DB_USER

try{
    db = mysql.createConnection({
        user : process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB
    })
} catch(err) {
    console.error(err);
}

export default db;