var mysql = require("mysql");
var inq = require("inquirer");
var ctable = require("console.table");

// loading libraries
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazonDB"
  });


// establishing connection 
  connection.connect(function (err) {
    if (err) throw err;
    afterConnection();
});

function afterConnection(){
  console.log("connection successful!");
  listProducts();
}

function listProducts(){
  var query = connection.query("SELECT * FROM products", function(err, data){
      if(err) throw err;
      console.log("");
    console.table(data);
    console.log("");
      // execute inquirer:
      selectId();
});
}

function selectId(){
  console.log("");
  inq.prompt([

    {
    name: "Id",
    message: "Input the ID of the item you would like to buy:",
    type: "input"
  },
  {
    name: "quantity",
    message: "How many items you would like to buy",
    type: "input"
  }


]).then(function(data){
      console.log(data.Id);
      console.log(data.quantity);

      var pId = data.Id;
      var pQty = data.quantity; // user asks for qty
      // get qty from sqll

      // select all from sql with ID/qty
      var query = "SELECT * FROM products WHERE item_id=" + pId;
      connection.query(query, function(err,data2){

        // incorrect id:
        var num = data2.length;
        // if(num>){


          // console.log(data2);
          var qtyLeft = data2[0].stock_quantity; // qty remaining
            if(qtyLeft >= pQty){

              var totalCost = data2[0].price * pQty; // total cost of order
              // good to go
              var newQty = qtyLeft - pQty;
              // update sql with new qty

              var query2 = "UPDATE products SET stock_quantity =" + newQty + " WHERE item_id=" + pId; 
              connection.query(query2, function(err, data3){
                  if(err) throw err;
                  console.log("Order complete!");
                  console.log("Total order cost is: "+  data2[0].product_name + " $" + totalCost);

                  listProducts();
                });
              
            }else{
              // insufficient qty
              console.log("\nInsufficient quantity!\n");
            }
      });

      listProducts();
  });
}


 