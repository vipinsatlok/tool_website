import express from 'express';
import path from 'path';
import expressLayouts from 'express-ejs-layouts';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "..", 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Set up express-ejs-layouts middleware
app.use(expressLayouts);

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

