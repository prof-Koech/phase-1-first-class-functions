function receivesAFunction(myCallBack){
    return myCallBack()
    

}
receivesAFunction("wow!! that's awesome!"),function (myCallBack){ "Hi" +myCallBack}

function returnsANamedFunction(){
    return function myCWorld(){
        return "must be a great day!"
    }
}
function returnsAnAnonymousFunction(){
    return function(){
        return "this is could be an anonymous"
    }
}