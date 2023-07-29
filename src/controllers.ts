import { Request, Response } from "express";
import { toolData } from "./data/toolData";
import express from "express";
import { siteName } from "./data/siteData";

const app = express();

const homePage = (req: Request, res: Response) => {
  console.log("sat saheb");
  res.render("pages/index", {
    layout: "layout",
    title: `${siteName}`,
    toolData,
  });
};

const aboutPage = (req: Request, res: Response) => {
  res.render("pages/about", {
    layout: "layout",
    title: `About Page - ${siteName}`,
  });
};

const contactPage = (req: Request, res: Response) => {
  res.render("pages/contact", {
    layout: "layout",
    title: `$Contact Page - {siteName}`,
  });
};

const privacyPolicyPage = (req: Request, res: Response) => {
  res.render("pages/privacy-policy", {
    layout: "layout",
    title: `$Privacy Policy - {siteName}`,
  });
};

const toolsPage = (req: Request, res: Response) => {
  res.render("pages/tools", { layout: "layout", title: `Tools - ${siteName}` });
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

  res.status(200).render(`tools/${tool.slug}`, {
    layout: "custom-layout",
    tool,
    title: `${tool.title} - ${siteName}`,
  });
};

export { homePage, aboutPage, contactPage, toolsPage, toolPage };
