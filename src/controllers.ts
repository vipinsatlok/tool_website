import { Request, Response } from "express";
import { toolData } from "./data/toolData";
import { titleToSlug } from "./utils/string";
import express from "express";
import expressLayouts from "express-ejs-layouts";

const app = express();

const homePage = (req: Request, res: Response) => {
  console.log("sat saheb");
  res.render("pages/index", { layout : "layout", title: "Home Page" });
};

const aboutPage = (req: Request, res: Response) => {
  res.render("about", { title: "About Page" });
};

const contactPage = (req: Request, res: Response) => {
  res.render("contact", { title: "Contact Page" });
};

const privacyPolicyPage = (req: Request, res: Response) => {
  res.render("privacy-policy", { title: "Privacy Policy" });
};

const toolsPage = (req: Request, res: Response) => {
  res.render("tools", { title: "Tools Page" });
};

const toolPage = (req: Request, res: Response) => {
  const toolId = req.params.id;

  const tool = toolData.find((tool) => tool.slug === toolId);

  if (!tool) {
    return res.status(404).render("pages/404", {
      layout: "custom-layout",
      title: "Page Not Found",
    });
  }

  res.status(200).render(`pages/tools/${tool.slug}`, { title: tool.title });
};

export { homePage, aboutPage, contactPage, toolsPage, toolPage };
