"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const express_ejs_layouts_1 = __importDefault(require("express-ejs-layouts"));
const app = (0, express_1.default)();
const port = 3000;
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, "..", 'views'));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Set up express-ejs-layouts middleware
app.use(express_ejs_layouts_1.default);
// Define the layout file
app.set('layout', 'layout');
// Home route
app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
});
// About route
app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page' });
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
