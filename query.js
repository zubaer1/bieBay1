
var login = require('./loginBieBay');
var inquirer = require('inquirer');
var mysql = require('mysql');
//var main = require('./bieBayMain');



var connection = mysql.createConnection({
        host: "localhost", 
        port: 3306,
        user: 'root',
        password: 'dhaka3049',
        database: 'bieBay'
  });

  connection.connect(function(err){
        if(err){
          throw err;
        }
       // myQuantity();
  });


//=============================================
  function myList(){

var start = [
	{    
    type: 'list',
    name: 'size',
    message: '\tWhat you like to buy?',
    choices: ['Laptop', 'Desktop', 'Processor', 'Motherboard', 'RAM',
          'PowerSupply', 'Sound card', 'Hard drive', 'Video card', 'Flash drive'
              ],
   	filter: function (val) {
      return val.toLowerCase();
    }
    },
	{
    type: 'input',
    name: 'howMany',
    message: '\tHow many pieces you like to buy?' 
  	}
  	];

inquirer.prompt(start).then(function(response){
//  console.log(JSON.stringify(response, null, '  '));
  var a = response.size;
  var b = response.howMany;

  //more code for insert update
  // funcInsert(a, b);
   funcSelect(a, b);
  // var one = new login(); 
 });
};

//===========Not Using Now=================================

function funcInsert(a, b){
  this.a = a;
  this.b = b;
  console.log('\tyou select: '+ a);
  console.log('\tamount is: '+ b);

  connection.query("SELECT * FROM custOrder ",
                  function(err, res){
                    if(err){
                      throw err;
                   }
                   console.log('\namount is: '+ b);
                    console.log('\ndata 1 '+ res[0].productName);
                    
                  });
  //console.log('\ndata 1 '+ res[0].productName);
};

//========================================================
  function funcSelect(a, b){ 
      this.a = a;
      this.b = b;
  connection.query("SELECT stockQuantity FROM custOrder WHERE productName LIKE ? ",
                 [a], function(err, data){
                    if(err){
                      throw err;
                    }
                  console.log('\n your amount is: '+ b);
                  
                   var c= data[0].stockQuantity;
                   console.log('\tour stock is: '+c);
                   var d = c-b;
                   
                   if (d<0){
                    console.log('\tInsufficient quantity!, please try again.');
                    console.log('\tour stock is: '+d);
                    myList();
                   }
                   else{ 
                   console.log('\tyour order is placed. You ordered: '+b+' pieces '+ a );
                   console.log('\tnow our stock is: '+d);  
                   funcUpdate(a, d)
                   }
                  });
};

//===========================================

  function funcUpdate(a, b){ 
      this.a = a;
      this.b = b;

  connection.query("UPDATE custOrder SET stockQuantity= ? WHERE  productName= ? ",
                  [b, a] , function(err, data){
                    if(err){
                      throw err;
                    }
                  console.log('\tDatabase updated.');
                  console.log('\n\tDo you like to make another order or quit? \n\tPlease click enter')
                 // if(yes)
                 // myList();
                 var two = new login();
                  });
};

//=============================================
module.exports = myList;