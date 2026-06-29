function starting (){
    setTimeout(() => {
        
        console.log("add milk and water and put the pot on the stove");
    }, 1000);
    
}
function sugartea(){
    setTimeout(() => {
        
        console.log("add sugar to the  tea ");
        
    }, 2000);
}
function serve (){
    console.log("serve the tea with some biscuits");
    
}
function calling(){
    starting()
    sugartea()
    serve()
}
calling()