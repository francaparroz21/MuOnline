import { Router } from "express";
import { getAccounts, postAccount, changePasswordAccountById,getCharactersById } from "../controllers/accountcharacter.controller.js";

const router = Router()

router.get("/", getAccounts)
router.post("/", postAccount)
router.put("/:acc_id", changePasswordAccountById)
router.get("/characters/:acc_id", getCharactersById)

export default router