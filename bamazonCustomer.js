var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("cTable");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazonDB"
  });



  connection.connect(function (error) {
    if (error) throw error;
    console.log("connected as id " + connection.threadId);
    displayProducts();
});





// // connect to the mysql server and sql database
// connection.connect(function(err) {
//     if (err) throw err;
//     // run the start function after the connection is made to prompt the user
//     start();
//   });


  // start prompt: ask user ID of product they are interested in buying
  
  // second prompt: ask how many units of this product they would like to buy.

  // once customer provides info/places order, check current stock data to confirm enough qty is available.
 
        // if not enough inventory, app logs a phrase 'Insufficient quantity!', prevents order from going thru

        // if enough inventory available, fulfill customer's order:
            // updating SQL database to reflect the remaining qty.
            // once update goes thru, show the customer the total cost of their purchase. 



            // function runSearch() {
            //     inquirer
            //       .prompt({
            //         name: "action",
            //         type: "rawlist",
            //         message: "What would you like to do?",
            //         choices: [
            //           "Find songs by artist",
            //           "Find all artists who appear more than once",
            //           "Find data within a specific range",
            //           "Search for a specific song",
            //           "Find artists with a top song and top album in the same year"
            //         ]
            //       })
            //       .then(function(answer) {
            //         switch (answer.action) {
            //         case "Find songs by artist":
            //           artistSearch();
            //           break;
              
            //         case "Find all artists who appear more than once":
            //           multiSearch();
            //           break;
              
            //         case "Find data within a specific range":
            //           rangeSearch();
            //           break;
              
            //         case "Search for a specific song":
            //           songSearch();
            //           break;
              
            //         case "Find artists with a top song and top album in the same year":
            //           songAndAlbumSearch();
            //           break;
            //         }
            //       });
            //   }




// var start = function(){
//     inquirer.prompt({
//       name:"productChoice",
//       type:"input",
//       message:"What is the ID of the product you would like to buy?",
//       choices:["POST","BID"]
//     })

//     var start = function(){
//         inquirer.prompt({
//           name:"quantity",
//           type:"input",
//           message:"How many units of this item would you like to buy?",
//           choices:["POST","BID"]
//         }).then(function(answer){
//           if(answer.postOrBid.toUpperCase()=="POST"){
//             postAuction();
//           } else {
//             bidAuction();
//           }
//         })
//       }

//   }

 