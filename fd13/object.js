// // creating an object 
// let employee = {
//     name: "Ramawatar",
//     salary: 25000,
//     profile: "team leader",
//     address : "Delhi",
//     JoiningDate: "10/6/2026",
      

// };
// console.log(employee);
// console.log(employee.name);
// let product = {
//     productName: "A.C.",
//     "product name": "croma",
//     productType: "Electronics",
//     "product id": 1234,
//     "COMPANY NAME": "TATA",
//     "PRICE": 25000,


// };
// console.log(product);
// console.log(product.productName);

// // CRUD OPERATION
// create
let actor={
    name: "Salman Khan",
    age:60,
    address: "Mumbai",
    profile: "Actor",
    image: "https://www.bollywoodhungama.com/wp-content/uploads/2023/12/salman-khan-1.jpg",
};  

// console.log(actor);
// // read
// // add
// actor.gender = "male";
// console.log(actor);
// // update
// actor.age = 61;
// console.log(actor);
// // delete
// delete actor.address;
// console.log(actor);


// 3. checking properties 
// console .log ("name" in actor);for
// console.log(actor.hasOwnProperty("name"));

// iterating object properties
for (let key in actor){
    if(key === "profile"){
        break;
    }
    console.log(key + "-" + actor[key]);
    
}
