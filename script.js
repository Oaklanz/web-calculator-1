function addition()
{
        num1 = Number(document.getElementById("firstNumber").value);
        num2 = Number(document.getElementById("secondNumber").value);
        let result=(num1 + num2)
        console.log(result)
        document.getElementById("result").innerHTML =(num1 + num2);
}