// *** we will use express here bcz it will just make setting up our server much easier than if we use the default nod HTTP module.

// axios -- It is a package that allows us to call the APIs that we need, it works very similar to fetch.

// we also need "dotenv" dependency to load our APIs keys

// first thing we want to load all our environment variables,so we're goint to check our environment to make sure we are not in production and for this we will put the below "if" condition
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config() // it's going to load everything we put inside our ".env" file and this will populate all the env variable when we call the variable with the help of "process.env.variable_name"
}

// now we have access of weather API key inside our server by just calling the following way
const OPEN_WHETHER_API_KEY = process.env.OPEN_WHETHER_API_KEY

const express = require('express');
const app = express();

app.use(express.json()); // we are using json bcz we are going to be sending JSON to our server
app.use(express.static('public')) // this way we are setting up our static folder and this static folder is going to be inside public folder, this is just standard practice to use public folder here


// our API is going to have a single endpoint and that is "/weather" endpoing
app.post('/weather',(req,res)=>{
    console.log(req.body);
})


app.listen(3000,()=>{
    console.log("Server is working/started")
    // BY USING 'npm run devStart' commond(that we have created in our package.json) we can start our server
})