function addition()
{
       var num1 = Number(document.getElementById("firstNumber").value);
        var num2 = Number(document.getElementById("secondNumber").value);
        let result=num1 + num2
        //console.log(result)
        document.getElementById("result").innerHTML = result;
}



function subtraction(){

        var num1 = Number(document.getElementById("firstNumber").value);
        var num2 = Number(document.getElementById("secondNumber").value);
        let result=num1 - num2
        //console.log(result)
        document.getElementById("result").innerHTML = result;      
}


function multiplication(){

        var num1 = Number(document.getElementById("firstNumber").value);
        var num2 = Number(document.getElementById("secondNumber").value);
        let result=num1 * num2
        //console.log(result)
        document.getElementById("result").innerHTML = result;      
}


function division(){

        var num1 = Number(document.getElementById("firstNumber").value);
        var num2 = Number(document.getElementById("secondNumber").value);
        let result=num1 / num2
        //console.log(result)
        document.getElementById("result").innerHTML = result;      

}