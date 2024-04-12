import { getConnection, sql } from "../database/connection.js"
import { querys } from "../database/querys.js"

export const getAccounts = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query("select * from memb_info")
        res.json(result.recordset)
    }
    catch (error) {
        console.log(error)
    }
}

export const postAccount = async (req, res) => {
    try {
        req.body.bloc_code = "0"
        const { username, password, name, code, bloc_code } = req.body

        if (username == null || password == null || name == null || code == null) {
            return res.status(400).json({
                error: "bad request, try again filling all the fields"
            })
        }

        const pool = await getConnection()

        await pool.request()
            .input('username', sql.VarChar, username)
            .input('password', sql.VarChar, password)
            .input('name', sql.VarChar, name)
            .input('code', sql.Char, code)
            .input('bloc_code', sql.Char, bloc_code)
            .query(querys.postAccount)

        res.json({ status: 'Ok' })

    }
    catch (error) {
        res.status(500)
        res.send(error.message)
        console.log(error)
    }
}

export const changePasswordAccountById = async (req, res) => {
    try {
        const { password, newPassword } = req.body

        const pool = await getConnection()

        const findAccount = await pool.request()
            .input('id', sql.Int, req.params.acc_id)
            .query(querys.findAccountById)
        
        const account = findAccount.recordset.find((element)=> element.memb__pwd == password)
        
        if (!account){
            res.send({
                error: "wrong password"
            })
        }

        const changePassword = await pool.request()
        .input('id', sql.Int, req.params.acc_id)
        .input('password', sql.VarChar, newPassword)
        .query(querys.changePasswordAccount)


        res.json({ status: "ok" })

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}