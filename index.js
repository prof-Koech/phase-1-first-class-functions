function receivesAFunction(myCallBack){
    return myCallBack()
    

}
receivesAFunction("wow!! that's awesome!"),function (myCall){ "Hi" +myCall}

function returnsANamedFunction(){
    return function myCase(){
        return "must be a great day!"
    }
}
function returnsAnAnonymousFunction(){
    return function(){
        return "this is could be an anonymous"
    }
}