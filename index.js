const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express(),
    port = 3000;
var     user = require('./user'),
    main_ctrl = require('./controllers/main_ctrl.js'),
    skills = require('./skills')


app.use(bodyParser.json());
app.use(cors());

app.get('/api/name',main_ctrl.name)
app.get('/api/location',main_ctrl.location)
app.get('/api/occupations',main_ctrl.occupations)
app.get('/api/occupations/latest',main_ctrl.latest)
app.get('/api/hobbies',main_ctrl.hobbies)
app.get('/api/hobbies/:type',main_ctrl.hobbyType)
app.get('/api/family',main_ctrl.family)
app.get('/api/family/:gender',main_ctrl.famGender)
app.get('/api/restaurants',main_ctrl.restaurants)
app.get('/api/restaurants/:name',main_ctrl.resName)
app.put('/api/name',main_ctrl.changeName)
app.put('/api/location',main_ctrl.changeLoc)
app.post('/api/hobbies',main_ctrl.addHobbies)
app.post('/api/occupations',main_ctrl.addOcc)
app.post('/api/family',main_ctrl.addFam)
app.post('/api/restaurants',main_ctrl.addRest)
app.get('/api/skills',main_ctrl.skills)
app.post('/api/skills',main_ctrl.addSkill)

app.listen(port,console.log(`listening on port ${3000}`))