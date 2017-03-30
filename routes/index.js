var express = require('express');
var router = express.Router();


var path = require('path'),
    fs = require('fs'),
    db_path = path.dirname(__dirname),
    project_json = path.resolve(db_path, "db/projects.json"),
    profile_json = path.resolve(db_path, "db/profile.json"),
    projects_db = fs.readFileSync(project_json),
    profile_db = fs.readFileSync(profile_json);

var projects = JSON.parse(projects_db).data,
    profile = JSON.parse(profile_db);

var getIcon = function(icon) {
    var icon = icon.toString().toLowerCase(),
        img;

    img = "<img src='/images/icons/" + 
    icon + ".svg'" + " alt=" + "'" + icon + "'" 
    + " title=" + "'" + icon + "'" +  "/>";
  
  return img;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  //helpers for handlebars helper
  res.render('index', {
    title: 'Paul Kuttiya',
    projects: projects, 
    profile: profile,
    helpers: {
      tag: getIcon
    },
  });
});

router.get('/projects/:id', function(req, res, next) {
  var project_1 = JSON.parse(projects_db).data[0];
  res.json(project_1);
});

module.exports = router;
