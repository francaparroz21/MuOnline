import { getConnection } from "../database/connection.js"

export const getRanking = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query("select * from character")
        res.json(result.recordset)
    }
    catch (error) {
        console.log(error)
    }
}