import { Router } from "express";
import { getAccounts, postAccount, changePasswordAccountById } from "../controllers/accountcharacter.controller.js";

const router = Router()

router.get("/", getAccounts)
router.post("/", postAccount)
router.put("/:acc_id", changePasswordAccountById)

export default router