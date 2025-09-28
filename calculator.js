function addition(num1,num2)
{
    return num1 + num2;
}
function substract(num1,num2)
{
    return num1 - num2;
}
function multiply(num1,num2)
{
    return num1 * num2;
}
function divide(num1,num2)
{
    return num1 / num2;
}


function calculator(a,b,operation)
{
    if(operation=='addition')
    {
        const total=addition(a,b);
        return total;
    }
    else if(operation=='substract')
    {
        const total=substract(a,b);
        return total;
    }
    if(operation=='multiply')
    {
        const total=multiply(a,b);
        return total;
    }
    if(operation=='divide')
    {
        const total=divide(a,b);
        return total;
    }
    else{
        return "Only 'addition','substract','multiply','divide' opeation is allowed ";
    }
    
}

const result=calculator(5,7,'multiply');
console.log(result);

