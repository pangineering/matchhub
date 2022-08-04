// {
//     getAuth,
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//    }


const firebase = require("firebase/app");
const { getAuth } = require("firebase-admin/auth");
//const firebaseAdmin = require("firebase-admin");

const firebase_auth = require("firebase/auth");
const firebaseAdmin = require("firebase-admin/app");


const getMe = async (req, res, next,id) => {
  try {
    //const id = req.params.id;
    const myuser = await db.collection("Users").doc(id);
    const data = await myuser.get();
    if (!data.exists) {
      res.status(404).send("User with the given ID not found");
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};


const signUp = async (req, res, next) => {
  try {
    const auth = firebase_auth.getAuth();
    const data = req.body;
    const email = data.email;
    const password = data.password;
    //const auth = getAuth();
    firebase_auth.createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...

      getAuth().createUser({
          uid: user.uid,
          email: email,

          password: password,
         

        })
        .then((userRecord) => {
          // See the UserRecord reference doc for the contents of userRecord.
          console.log('Successfully created new user:', userRecord.uid);
        })
        .catch((error) => {
          console.log('Error creating new user:', error);
        });




      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const signIn = async (req, res, next) => {
  try {
    const auth = firebase_auth.getAuth();
    const data = req.body;
    const email = data.email;
    const password = data.password;
    firebase_auth
      .signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        //res.send("Sign In Successfully");
        // ...
        getAuth()
        .getUser(user.uid)
        .then((userRecord) => {
          // See the UserRecord reference doc for the contents of userRecord.
          console.log(userRecord.toJSON());
          res.send(userRecord.toJSON());
        })
        .catch((error) => {
          console.log('Error fetching user data:', error);
        });

        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        res.send(errorMessage);
      });
  } catch (error) {
    res.status(400).send(error.message);
  }
};




module.exports = {
  signUp,
  signIn
  
};
