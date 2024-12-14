function Add(...args){//...(3dots)-rest operator
    let result=0;
    for(let arg of args)
    {
        result=result+arg;
        
    }
    return result;
}
console.log(Add(10,20,30,40,50,60,70,80,90));