import express from "express"
import config from "./config.js"
import "./database/connection.js"
import memb_infoRouter from "./routes/acccountcharacter.routes.js"
import rankingRouter from "./routes/ranking.routes.js"


const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('port', config.port || 3000)
app.use('/api/ranking', rankingRouter)
app.use('/api/accounts', memb_infoRouter)

export default app