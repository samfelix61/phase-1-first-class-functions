function receivesAFunction(buyCofee){
     
    buyCofee();
    
    console.log("buy cofee")   
   
}

function returnsANamedFunction(){
    
    return function children(){
     
    }
}
function returnsAnAnonymousFunction(){
    
    return function(){

    }
}