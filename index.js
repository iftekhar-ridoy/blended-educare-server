const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Blended Edu-Care API Running');
});


app.get('/courses-categories', (req, res) => {
    res.send(categories)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const course_category = courses.filter(n => n.category_id === id);
    res.send(course_category);
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(n => n.category_id === id);
    res.send(selectedCourse);
})

app.listen(port, () => {
    console.log('Blended Edu-Care Server is Running on Port ', port);
})