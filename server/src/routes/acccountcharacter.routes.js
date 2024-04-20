import { Router } from "express";
import { getAccounts, postAccount, changePasswordAccountById,getCharactersById,getCharacters } from "../controllers/accountcharacter.controller.js";

const router = Router()

router.get("/", getAccounts)
router.post("/", postAccount)
router.put("/:acc_id", changePasswordAccountById)
router.get("/characters",getCharacters)
router.get("/characters/:acc_id", getCharactersById)

export default router