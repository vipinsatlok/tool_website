"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toolPage = exports.toolsPage = exports.contactPage = exports.aboutPage = exports.homePage = void 0;
const toolData_1 = require("./data/toolData");
const express_1 = __importDefault(require("express"));
const siteData_1 = require("./data/siteData");
const app = (0, express_1.default)();
const homePage = (req, res) => {
    console.log("sat saheb");
    res.render("pages/index", {
        layout: "layout",
        title: `${siteData_1.siteName}`,
        toolData: toolData_1.toolData,
    });
};
exports.homePage = homePage;
const aboutPage = (req, res) => {
    res.render("pages/about", {
        layout: "layout",
        title: `About Page - ${siteData_1.siteName}`,
    });
};
exports.aboutPage = aboutPage;
const contactPage = (req, res) => {
    res.render("pages/contact", {
        layout: "layout",
        title: `$Contact Page - {siteName}`,
    });
};
exports.contactPage = contactPage;
const privacyPolicyPage = (req, res) => {
    res.render("pages/privacy-policy", {
        layout: "layout",
        title: `$Privacy Policy - {siteName}`,
    });
};
const toolsPage = (req, res) => {
    res.render("pages/tools", { layout: "layout", title: `Tools - ${siteData_1.siteName}` });
};
exports.toolsPage = toolsPage;
const toolPage = (req, res) => {
    const toolId = req.params.id;
    const tool = toolData_1.toolData.find((tool) => tool.slug === toolId);
    if (!tool) {
        return res.status(404).render("pages/404", {
            layout: "custom-layout",
            title: "Page Not Found",
        });
    }
    res.status(200).render(`tools/${tool.slug}`, {
        layout: "custom-layout",
        tool,
        title: `${tool.title} - ${siteData_1.siteName}`,
    });
};
exports.toolPage = toolPage;
