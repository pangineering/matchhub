"use strict";

const { firestore } = require("firebase-admin");
const {app,db} = require('../db');
//const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');


const Projects = require("../models/projects");


const addProject = async (req, res, next) => {
  try {
    const data = req.body;
    await db.collection("products").doc().set(data);
    res.send("Record saved successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllProject = async (req, res, next) => {
  try {
    const projects = await db.collection("Projects");
    const data = await projects.get();
    const projectsArray = [];
    if (data.empty) {
      res.status(404).send("No user record found");
    } else {
      data.forEach((doc) => {
        const project = new Projects(
          doc.id,
          doc.data().projectId,
          doc.data().projectName,
          doc.data().projectDes,
          doc.data().projectReq,
          doc.data().ownerName,
          doc.data().ownerId,
          doc.data().person,
          doc.data().personId,
          doc.data().budget,
          doc.data().status
        );
        projectsArray.push(project);
      });
      res.send(projectsArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getProject = async (req, res, next) => {
  try {
    const id = req.params.id;
    const project = await db.collection("Projects").doc(id);
    const data = await project.get();
    if (!data.exists) {
      res.status(404).send("Project with the given ID not found");
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateProject = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const product = await db.collection("products").doc(id);
    await product.update(data);
    res.send("Product record updated successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteProject = async (req, res, next) => {
  try {
    const id = req.params.id;
    await db.collection("products").doc(id).delete();
    res.send("Record deleted successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  //addProject,
  getAllProject,
  getProject,
  //updateProject,
  //deleteProject
};


