const express = require("express");
const cors = require("cors");
const {
  addUser,
  getAllUsers,
  getUser,
  updateUser,
} = require("../controllers/userController");
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

routers.use(cors());

//routers.post("/user/new", addUser);

routers.get("/user/list", (protect,getAllUsers));

// routers.get("/user/:id", getUser);

// routers.put("/user/update/:id", updateUser);



module.exports = routers;
