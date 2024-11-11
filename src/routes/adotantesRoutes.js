import express from "express";
import {
  getAllAdoptions,
  getAdoptionById,
  createAdoption,
  updateAdoption,
  deleteAdoption,
} from "../controllers/adocaoController.js";

const router = express.Router();

router.get("/", getAllAdoptions);
router.get("/:id", getAdoptionById);
router.post("/", createAdoption);
router.put("/:id", updateAdoption);
router.delete("/:id", deleteAdoption);

export default router;
