import { config } from "dotenv"
config()



export default {
    port: process.env.PORT || 3030,

    dbSettings: {
        user: process.env.USERDB,
        password: process.env.PASSDB,
        server: process.env.SERVERIP,
        database: process.env.DBNAME,
        options: {
            encrypt: false,
            trustServerCertificate: true,
        }
    }
}