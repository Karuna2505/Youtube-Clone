import express from 'express';
import bodyParser from 'body-parser';
import pg from "pg";
import bcrypt from "bcrypt";

const PORT=process.env.PORT || 3000;
const saltRounds=10;
const app = express();
app.use(express.static("build"));
app.use(bodyParser.urlencoded({ extended: true }));

const db=new pg.Client({
   user:'postgres',
   host:'localhost',
   database:'userdata',
   password:'Karuna14@',
   port:5432,
});
db.connect()
   .then(() => {
      console.log('Connected to the database');
   })
   .catch((err) => {
      console.error('Error connecting to the database', err);
   });

app.post('/register',async (req,res)=>{
   const email=req.body.email;
   const password=req.body.password;

   const checkresult=await db.query("SELECT * FROM users WHERE email= $1",
   [email,])
   if(checkresult.rows.length>0){
     res.send("Email already exists,Try logging in");
   }else{
    bcrypt.hash(password,saltRounds,async (err,hash)=>{
      if(err){
        console.log(err);
      }else{
        const result=await db.query(
          "INSERT INTO users (email, password) VALUES ($1, $2)",
          [email,hash]
         );
         res.redirect('/');
      }
    })
   }
})

app.post('/login',async (req,res)=>{
  const email=req.body.email;
  const password=req.body.password;
  try {
    const result=await db.query("SELECT * FROM users WHERE email=$1",[email,])
    if(result.rows.length >0){
       const user=result.rows[0];
       const storedPassword=user.password;
       bcrypt.compare(password,storedPassword,(err,result)=>{
        if(err){
          console.log(error);
        }else{
          if(result){
            res.redirect('/');
          }else{
            res.send("Incorrect Password");
          }
        }
       })
     
    }else{
      res.send("User not found!");
    }
  } catch (error) {
    console.log(error);
  }
})
app.listen(PORT, function() {
  console.log('Server started on port 3000');
});
