const express = require("express");

var app = express();

app.set("view engine","ejs");


app.use(express.static("public"));// tells Express that our static files are in the pubic folder




app.get('/', (req, res) => { // home route
  res.render("index");
});


app.get("/about", (req,res) =>{ // about route
  res.render("about");
})

app.get("/resume", (req,res) =>{ // resume route
  res.render("resume");
})

app.get("/portfolio", (req,res) =>{ // portfolio route
  res.render("portfolio");
})
app.get("/contact", (req,res) =>{ // contact route
  res.render("contact");
})

// app.get("/hello", (req,res)=>{
//   res.write("Hello World");
//   res.write("I am Emmanuel");
//   res.send();
// });


app.listen(process.env.PORT || 3000, () =>{
  console.log("My server is working !!!");
});
