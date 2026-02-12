function function1(k){ 
    console.log("function1 " + k) 
    return k+100; 
}function1(100) 

function function2(k){ 
    console.log("function2 " + k)
} function2(function1(1000))