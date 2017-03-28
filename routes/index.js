var express = require('express');
var router = express.Router();


var path = require('path'),
    fs = require('fs'),
    project_path = path.dirname(__dirname),
    file_path = path.resolve(project_path, "db/projects.json"),
    projects_db = fs.readFileSync(file_path);

var projects = JSON.parse(projects_db).data;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Paul Kuttiya', projects: projects });
});

router.get('/projects/:id', function(req, res, next) {
  var project_1 = JSON.parse(projects_db).data[0];
  res.json(project_1);
});

module.exports = router;
