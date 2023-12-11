function printLargestNum(num1, num2, num3){
    let largest =[num1,num2,num3].sort((a,b)=>a-b)[2];
    console.log(largest);
}

printLargestNum(33,1111,22);