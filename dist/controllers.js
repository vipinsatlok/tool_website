"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toolPage = exports.toolsPage = exports.contactPage = exports.aboutPage = exports.homePage = void 0;
const toolData_1 = require("./data/toolData");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const homePage = (req, res) => {
    console.log("sat saheb");
    res.render("pages/index", { layout: "layout", title: "Home Page" });
};
exports.homePage = homePage;
const aboutPage = (req, res) => {
    res.render("about", { title: "About Page" });
};
exports.aboutPage = aboutPage;
const contactPage = (req, res) => {
    res.render("contact", { title: "Contact Page" });
};
exports.contactPage = contactPage;
const privacyPolicyPage = (req, res) => {
    res.render("privacy-policy", { title: "Privacy Policy" });
};
const toolsPage = (req, res) => {
    res.render("tools", { title: "Tools Page" });
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
    res.status(200).render(`pages/tools/${tool.slug}`, { title: tool.title });
};
exports.toolPage = toolPage;
