const{createConnection}=require('mysql');
var mysql=require('mysql');
var con=mysql.createConnection({
    host:localhost,
    user:root,
password:"",
database:db4
});
con.connect(function(err){
    
    var sql="Create table student(id VARCHAR(10),name VARCHAR(255),department VARCHAR(100),salary number)";
    con.query(sql,function(err){
   if(err) throw err;
   console.log("table created");
    })
    
   
})
