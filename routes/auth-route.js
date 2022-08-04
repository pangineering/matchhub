const express = require('express');
const cors = require('cors')
const router = express.Router();

const { 
    signUp,
    signIn,

   } = require('../controllers/authController');


   const { protect } = require('../middleware/authMiddleware')
   const whitelist = ["http://localhost:3000"]
   const corsOptions = {
     origin: function (origin, callback) {
       if (!origin || whitelist.indexOf(origin) !== -1) {
         callback(null, true)
       } else {
         callback(new Error("Not allowed by CORS"))
       }
     },
     credentials: true,
   }
   //router.use(cors(corsOptions))
   router.use(cors());
   router.post('/', signUp)
   router.post('/logIn', signIn)
   //router.get('/me', protect, getMe)
   module.exports = router