const{createConnection}=require('mysql');
var mysql=require('mysql');
var con=mysql.createConnection({
    host:localhost,
    user:root,
password:"",
database:db4
});
con.connect(function(err){

    var insertdata="INSERT INTO student(id,name,department,salary) VALUES(1,abcd,cse,10000),(2,nhmj,mech,20000),(3,ghjk,ece,12000),(4,gdhd,civil,23000)";
    if(err) throw err;
        console.log("values are inserted");

})
