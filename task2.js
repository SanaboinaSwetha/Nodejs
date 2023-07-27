const{createConnection}=require('mysql');
var mysql=require('mysql');
var con=mysql.createConnection({
host:localhost,
user:root,
password:"",

});
con.connect(function(err){
    if(err) throw err;
    console.log("Connected");
    //create database mydb;
    con.query("CREATE DATABASE db4",function(err,res){
        if(err) throw err;
        console.log("Database created");
    });
    
})
