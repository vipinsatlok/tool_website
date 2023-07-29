import { Router } from "express";
import {
  aboutPage,
  homePage,
  contactPage,
  toolsPage,
  toolPage,
} from "./controllers";

const router = Router();

router.get("/", homePage);
router.get("/about", aboutPage);
router.get("/contact", contactPage);
router.get("/tools", toolsPage);
router.get("/tools/:id", toolPage);

export default router;
