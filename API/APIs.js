const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

//Create connection
var mysql = require('mysql');
var db = mysql.createConnection({
    host : 'localhost',
    database : 'cookbookbd',
    password: null,
    user: 'root',
});

//Connect
db.connect(function(err) {
    if(err){
        console.log(err);
    }else{
        console.log("Conexion establecida con exito.")
    }
});

// Show all recipes
app.get("/", function (req, res){
    let data = "SELECT * FROM recipe"
    db.query(data, (err, result) => {
        if (err) throw err;
        res.send(result)
    })

})

//Show ingredients
app.get("/ingredients", function (req, res) {
    let data = `SELECT * FROM ingredients`
    db.query(data, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

// Recipes Search and create

//Show recipes 
app.get("/recipes/search?", function (req, res){
    let subquery =""; 
    let array = []
   
    console.log(subquery)
    if (req.query.interrogacion == 5) {
        array = [req.query.ingredient1, req.query.ingredient2, req.query.ingredient3, req.query.ingredient4, req.query.ingredient5, req.query.type]
        subquery = "?, ?, ?, ?, ? "
    }

    if (req.query.interrogacion == 4) {
        array = [req.query.ingredient1, req.query.ingredient2, req.query.ingredient3, req.query.ingredient4, req.query.type]
        subquery = "?, ?, ?, ? "
    }

    if (req.query.interrogacion == 3) {
        array = [req.query.ingredient1, req.query.ingredient2, req.query.ingredient3, req.query.type]
        subquery = "?, ?, ? "
    }

    if (req.query.interrogacion == 2) {
        array = [req.query.ingredient1, req.query.ingredient2, req.query.type]
        subquery = "?, ?"
    }

    if (req.query.interrogacion == 1) {
        array = [req.query.ingredient1,  req.query.type]
        subquery = "?"
    }

    let data = `SELECT COUNT(*) AS n_ingredients, recipe.recipe_id, recipe.title, recipe.description, recipe.duration, recipe.dificulty, recipe.picture, recipe.type FROM recipe JOIN recipe_ingredients ON recipe.recipe_id = recipe_ingredients.recipe_id JOIN ingredients ON recipe_ingredients.ingredient_id = ingredients.ingredient_id WHERE ingredients.name IN (${subquery}) AND recipe.type = ? GROUP BY recipe.recipe_id HAVING n_ingredients=` + req.query.interrogacion;
   
    db.query(data, array, (err, result) => {
        if (err) throw err;
        res.send(result)
    })

});

//Create recipe
app.post("/recipes", function (req,res) {

    let data = `INSERT INTO recipe (title, duration, dificulty, type, description, picture, user_id) VALUES ("${req.body.title}", "${req.body.duration}", "${req.body.dificulty}", "${req.body.type}", "${req.body.description}", "${req.body.picture}", ${req.body.user_id})`;
   
    db.query(data, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
   
    /* db.query(data, (err, result) => {

        for (let i=0; req.body.ingredients.length; i++) {
            let ingredients = `SELECT ingredient_id FROM ingredients WHERE ingredients.name = "${req.body.ingredients[i]}"`
            let recipe_id = result.insertId
           
             db.query(ingredients, (err, result) => {
   
                if (ingredients != null) {
                    let data = `INSERT INTO ingredients (ingredient_id, name) VALUES ("${req.body.ingredients[i]}"`;
                    
                } else {
                    let results = `INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES (${recipe_id}, ${result[0].ingredient_id})`
              

                }
               
               db.query(results, (err, result) => {
   
                   res.send(results)
               })
          }) 

        }
    }) */
    
})

//Update recipe
app.put("/recipes/update", function (req,res) {

    let data = `UPDATE recipe SET title = "${req.body.title}", ingredients = "${req.body.ingredients}", duration = "${req.body.duration}", dificulty = "${req.body.dificulty}", type = "${req.body.type}", description = "${req.body.description}", picture = "${req.body.picture}"`;
    
    db.query(data, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

//Delete recipe
app.delete("/recipes/:id", function (req, res){
    let id = req.params
    let data = `DELETE FROM recipe WHERE recipe.id = "${id.id}"` 
    db.query(data, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

// Classes
app.get("/lesson",function(req,res){
    connection.query("SELECT * FROM `lesson`",function(err,result){
        if(!err){
           res.send(result);
        }else{
            console.log(err);
        }
    });
});


app.get('/lesson/:user_id', (req, res) => {
  const { id_user } = req.params; 
  conection.query('SELECT * FROM `lesson` WHERE user_id = ?', [user_id], (error, result) => {
    if (error){
      console.log(error)
    }else{
      res.send(result)
    }
  });
});
app.get('/lesson/:lesson_id', (req, res) => {
    const { lesson_id } = req.params; 
    connection.query('SELECT * FROM `lesson`  WHERE lesson_id = ?',  [lesson_id] , (error, result) => {
      if (error){
        console.log(error)
      }else{
        res.send(result)
      }
    });
  });
app.post("/lesson",function(req,res){
    var insert = "INSERT INTO `lesson`(`title`, `date`, `timetable`, `dificulty`, `price`, `ingredients`, `description`, `image`, `user_id`) VALUES (?,?,?,?,?,?,?,?,?)";
    var array = [req.body.title ,req.body.date, req.body.timetable, req.body.dificulty ,req.body.price, req.body.ingredients,req.body.description, req.body.image, req.body.user_id ];
    connection.query(insert,array,function(err,result){
        if(!err){
            res.send(result);
            console.log(result);
         }else{
            res.send(err);
         }
    })
});
app.put("/lesson",function(req,res){
    var insert = "UPDATE `lesson` SET `title`=?,`date`=?,`timetable`=?, `dificulty`=?, `price`=?, `ingredients`=?, `description`=?, `image`=?, `user_id`=? WHERE lesson_id = ?";
    var array = [req.body.title ,req.body.date, req.body.timetable, req.body.dificulty ,req.body.price, req.body.ingredients,req.body.description, req.body.image, req.body.user_id, req.body.lesson_id];
    connection.query(insert,array,function(err,result){
        if(!err){
            res.send(result);
            console.log(result);
         }else{
            res.send(err);
         }
    })
});
app.delete("/lesson",function(req,res){
    var insert = "DELETE FROM `lesson` WHERE lesson_id = "+ req.body.lesson_id +"";
    connection.query(insert,function(err,result){
        if(!err){
            res.send(result);
            console.log(result);
         }else{
            res.send(err);
         }
    })
});


// User login register

app.get("/user",function(req,res){
    connection.query("SELECT * FROM user",(err,result,)=>{
        if(!err){
           res.send(result);
        }else{
            console.log(err);
         }
    }
)});
/*
app.get('/users/:user_id', (req, res) => {
    const  user_id  = req.params.user_id;
    console.log(user_id);
    connection.query('SELECT * FROM user WHERE user_id = ?', [user_id], (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
});
*/
//Select user Id
app.get('/user', (req, res) => {
    const  id  = req.query.id;
    console.log(id);
    connection.query('SELECT * FROM `user` WHERE user_id = ?', [id], (error, result) => {
      if (error){
        console.log(error)
      }else{
        res.send(result)
      }
    });
  });
//USER LOGIN
app.post("/user/login",function(req,res){
    var select = "SELECT * FROM user WHERE user_name = ? AND password = ?";
    var array = [req.body.user_name,req.body.password];
    connection.query(select,array,function(err,result){
        if(!err){
            res.send(result);
         }else{
            res.send(err);
         }
    })
});
//USER REGISTER
app.post("/user/register",function(req,res){
    var insert = "INSERT INTO user (email,user_name,password) VALUES (?,?,?)";
    var array = [req.body.email,req.body.user_name,req.body.password];
    connection.query(insert,array,function(err,result){
        if(!err){
            res.send(result);
         }else{
            res.send(err);
         }
    })
});
//USER UPDATE AND UPLOAD PIC
app.put("/user/edit_profile",function(req,res){
    var insert = "UPDATE user SET user_name = ?, email=?, password=?, picture=? WHERE user_id = ?";
    var array = [req.body.user_name,req.body.email,req.body.password,req.body.picture,req.body.user_id];
    connection.query(insert,array,function(err,result){
        if(!err){
            res.send(result);
         }else{
            res.send(err);
            console.log(err);
         }
    })
});
//Delete user
app.delete("/user",function(req,res){
    var insert = "DELETE FROM user WHERE user_id ="+req.body.user_id+"";
    connection.query(insert,function(err,result){
        if(!err){
            res.send(result);
         }else{
            res.send(err);
         }
    })
});

app.listen(3000)
