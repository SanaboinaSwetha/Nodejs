var nodemailer=require('nodemailer')
var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'sanaboinaswetha14@gmail.com',
        pass:'imgehppauspgubod'
    }
});
var mailOptions={
    from:'sanaboinaswetha14mail@gmail.com',
    to:'pravin.consensus@gmail.com',
    subject:'sending mail from Node.js',
    text:'Hi'
};
transporter.sendMail(mailOptions, function(error,info){
    if(err) {
        console.log('Error');
    }
    else{
        console.log('Email sent:'+info.response);
    }
})