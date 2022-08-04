const express = require("express");
const cors = require('cors')

const {
  getAllProject,
} = require('../controllers/projectController');

const { protect } = require("../middleware/authMiddleware");

const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
const routers = express.Router();

routers.use(cors())

routers.get("/project/list", (protect,getAllProject));

//routers.get("/project/:id", getProject);

module.exports = routers;
