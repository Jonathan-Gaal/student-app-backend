//APP.JS
//Define route handlers

const express = require("express");
const studentData = require("./studentData.json");

//create an instance of an express application

const app = express();

//define our routes

//healthcheck route
// each route gets a path and a handler -- req and res are the args for the handler in this case
app.get("/", (req, res) => {
  //handler goes here
  //return a 200 status and send back json and send it back as an object (the key should be data or error)
  res.status(200).json({ data: "Server is running!" });
});

//get all students
app.get("/students", (req, res) => {
  try {
    const { students } = studentData;
    console.log("STUDENTS", students);
    res.status(200).json({ json: students });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

//get students by id

app.get("/students/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { students } = studentData;
    const student = students.find((student) => student.id === id);
    if (student) {
      res.status(200).json({ data: student });
    } else {
      res.status(404).json({ error: `No student with id of ${id}` });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = app;
