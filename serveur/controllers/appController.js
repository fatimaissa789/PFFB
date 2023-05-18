import UserModel from "../model/User.model.js";
import bcrypt from "bcrypt"

import jwt from "jsonwebtoken";
import ENV from '../config.js'



// middleware verifier utilisateur
export async function verifyUser(req,res,next){
    try{
        const {email} = req.method == "GET" ? req.query : req.body;
        //user existe
        let exist = await UserModel.findOne({email});
        if(!exist) return res.status(404).send({error : "Impossible de trouver l'utilisateur't find user"});
        next()
    }
    catch (error){
        return res.status(404).send({error: "Authentication error"})   }
}

// POST:http://localhost:8000/api/register
// @param:{
//     "username":"amy",
//     "password":"admin123",
//     "email":"amy@gmail.com",
//     "firstname":"mia",
//     "lastname":"samb",
//     "mobile":"782596632",
//     "address":"rufisque",
//     "profile":"",
// }



export async function register(req,res){

    try {
        const { username, password, profile, email } = req.body;        

        // check the existing user
        const existUsername = new Promise((resolve, reject) => {
            UserModel.findOne({ username }, function(err, user){
                if(err) reject(new Error(err))
                if(user) reject({ error : "Please use unique username"});

                resolve();
            })
        });

        // check for existing email
        const existEmail = new Promise((resolve, reject) => {
            UserModel.findOne({ email }, function(err, email){
                if(err) reject(new Error(err))
                if(email) reject({ error : "Please use unique Email"});

                resolve();
            })
        });


        Promise.all([existUsername, existEmail])
            .then(() => {
                if(password){
                    bcrypt.hash(password, 10)
                        .then( hashedPassword => {
                            
                            const user = new UserModel({
                                username,
                                password: hashedPassword,
                                profile: profile || '',
                                email
                            });

                            // return save result as a response
                            user.save()
                                .then(result => res.status(201).send({ msg: "User Register Successfully"}))
                                .catch(error => res.status(500).send({error}))

                        }).catch(error => {
                            return res.status(500).send({
                                error : "Enable to hashed password"
                            })
                        })
                }
            }).catch(error => {
                return res.status(500).send({ error })
            })


    } catch (error) {
        return res.status(500).send(error);
    }

}



/** POST: http://localhost:8080/api/login 
 * @param: {
  "email" : "amy@gmail.com",
  "password" : "admin123"
}
*/

export async function login(req, res){
    const  {email, password} = req.body
    try{
        UserModel.findOne({email})
        .then(user => {
            bcrypt.compare(password, user.password)
            .then(passwordCheck => {
                if (!passwordCheck) return res.status(400).send({error:"don't have password"})
                // create jwt token
             const token =   jwt.sign({
                    userId : user._id,
                    email: user.email
                },ENV.JWT_SECRET,{expiresIn:"24h"});
                return res.status (200).send({
                    msg:"login success",
                    email: user.email,
                    token
                })
            })
            .catch(error => {
                return res.status(400).send({error: "Password not matche"})
            })
        })
        .catch(error => {
            return res.status(404).send({error: "Email not found"})
        })
    }catch(error){
        return res.status(500).send({error})
    }
}
/** GET: http://localhost:8080/api/user/omar */

export async function getUser(req, res){
    const {username} = req.params;

    try {
        if(!username) return res.status(501).send({error:"Invalid username"});
        UserModel.findOne({username}, function (err, user){
            if(err) return res.status(500).send({err});
            if(!user) return res.status(501).send({error: "utilisateur introuvable"}) 
              /** remove password from user */
            // mongoose return unnecessary data with object so convert it into json
            const { password, ...rest } = Object.assign({}, user.toJSON());   
        return res.status(201).send(user);
      })
    }
    catch{
        return res.status(404).send({error: "impossible de trouver les données utilisateur"})
    }

}
/** PUT: http://localhost:8080/api/updateuser 
 * @param: {
  "header" : "<token>"
}
body: {
    firstName: '',
    address : '',
    profile : ''
}
*/
export async function updateUser(req,res){
    try {
        
        // const id = req.query.id;
        const { userId } = req.user;

        if(userId){
            const body = req.body;

            // update the data
            UserModel.updateOne({ _id : userId }, body, function(err, data){
                if(err) throw err;

                return res.status(201).send({ msg : "Record Updated...!"});
            })

        }else{
            return res.status(401).send({ error : "User Not Found...!"});
        }

    } catch (error) {
        return res.status(401).send({ error });
    }
}

/** GET: http://localhost:8080/api/generateOTP */
export async function generateOTP(req, res){
    res.json('generateOTP route')
}
/** GET: http://localhost:8080/api/verifyOTP */
export async function verifyOTP(req, res){
    res.json('verifyOTP route')
}

// successfully redirect user when OTP is valid
/** GET: http://localhost:8080/api/createResetSession */
export async function createResetSession(req, res){
    res.json('createResetSession route')
}
// update the password when we have valid session
/** PUT: http://localhost:8080/api/resetPassword */
export async function resetPassword(req, res){
    res.json('resetPassword route')
}
