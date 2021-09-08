const validatePassword = require('./passwordvalidation'); //import the function

// Your code goes here!
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
function checkpassword(){

   var password;

  readline.question('Enter a password to validate (or :q to quit)', password => {
      if(password=="q"){
        readline.close();
        return 0;
      }
      if(validatePassword(password)==true){
        console.log(`The password is valid: ${password}!`)
        checkpassword();
      }
      if(validatePassword(password)==false){
        console.log(`The password is invalid: ${password}!`)
        checkpassword();
      }
      
    
    
  })
  
  }
  checkpassword();
 
  

  