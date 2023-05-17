const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (!user) {
      return res.status(401).json({ message: "Utilisateur non trouvé !" });
    }
    bcrypt
      .compare(req.body.password, user.password)
      .then((valid) => {
        if (!valid) {
          return res.status(401).json({ message: "Mot de passe incorrect !" });
        }
        res.status(200).json({
          userId: user._id,
          token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
            expiresIn: "24h",
          }),
        });
      })
      .catch((error) => res.status(500).json({ error }));
  });
};
exports.getAllUser = (req, res, next) => {
  User.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
exports.getAllUser = (req, res, next) => {
  User.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
exports.getOneThing = (req, res, next) => {
  User.findOne({
    _id: req.params.id,
  })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};
//update
exports.updatePassword = async (req, res, next) => {
  // const user = new User({
  //   _id: req.params.id,
  //   password:req.body.password,
  //   userId: req.body.userId
  // });
  // Thing.updateOne({_id: req.params.id}, thing).then(
  //   () => {
  //     res.status(201).json({
  //       message: 'Thing updated successfully!'
  //     });
  //   }
  // ).catch(
  //   (error) => {
  //     res.status(400).json({
  //       error: error
  //     });
  //   }
  // );
  try {
    let { ancienpassword, newpassword } = req.body.password;
    //console.log(req.body);
    const id = req.params.id;
    const updatedData = req.body.password;
   const options = { new: true };
    let user = await User.findById({ _id: req.params.id });
  
    const comp = await bcrypt.compare(ancienpassword, user.password);
    if (!user) {
      res
        .status(400)
        .json({ message: "veuillez saisir votre actuel mot de passe!" });
      return;
    }
   // console.log(user);
    if (updatedData.ancienpassword) {
     

      if (comp) {
        const hash = await bcrypt.hash(newpassword, 10);
        updatedData.password = hash;
        const result = await User.findByIdAndUpdate(
          id,
          updatedData,
          options
        );
        return res.send(result);
      }

      return res.send("no corres");
    } else {
      const result = await User.findByIdAndUpdate(
        id,
        updatedData,
        options
      );
      return res.send(result);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


//deconnect
exports.logout = (req, res, next) => {
  const uid = req.params.id
  console.log(uid)
 
};