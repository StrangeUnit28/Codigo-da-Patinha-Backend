import express from "express";
import {
  getAllUsuarios,
  getUsuarioById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/adotantesController.js";

const router = express.Router();

router.get("/", getAllUsuarios);
router.get("/:id", getUsuarioById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;