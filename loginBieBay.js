
var inquirer = require('inquirer');
//var quantity = require('./query');

var loginBie = function(){

inquirer.prompt([
 
    {
    type: 'input',
    name: 'id',
    message: '\tPlease print your ID number (default is 01)',
    default: '01'
  }
  ]).then(function(response){

	console.log('\tyou typed id '+response.id);

  	if(response.id==01){
  		//console.log('\tyou are loged in.');
      console.log('\tyour order are placed.');
     // console.log('\tyou can place order again or can logout');
  		
  		//var one = new quantity();
  	
  	}
  	else{
  		console.log('\tplease print default id which is 01');
  		loginBie();
  	};
 });

};
module.exports = loginBie;