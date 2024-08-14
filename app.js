const display = document.querySelector(".displaybox");
display.innerHTML = " <p></p>"

const main = document.querySelector(".main")

let currentInput = "";
let operation = "";
let firstNumber = "";
let secondNumber = "";


const updateDisplay = (content) => {
    display.innerHTML = `<p>${content}</p>`;
}


main.addEventListener("click", (e) => {
    const button = e.target;
    const value = button.textContent;


    if (button.tagName === "BUTTON"){
        let currentInput = value;
        display.innerHTML += currentInput;
        

        if (currentInput === "AC"){
            display.innerHTML = ""
            currentInput = ""
            firstNumber = "";
            secondNumber = "";
            operation = "";
        }


        if (operation === "") {
            if (currentInput === "."){

                if (!firstNumber.includes(".")){
                    firstNumber += ".";
                } 
            }
            if (!firstNumber && ["+", "-", "*", "/"].includes(currentInput)) {
                operation = currentInput; 
            }

            else if (!isNaN(parseFloat(currentInput)) && isFinite(currentInput)) {
               
                firstNumber += currentInput;
                
            }
        }
        if  (firstNumber !== "" && ["+", "-", "*", "/"].includes(currentInput)){
            operation += currentInput;
            updateDisplay(`${firstNumber} ${operation}`);
        }


        if(operation){
            if (currentInput === "."){
                if (!secondNumber.includes(".")){
                    secondNumber += ".";
                }

            }
            else if (!isNaN(parseFloat(currentInput)) && isFinite(currentInput)) {
                secondNumber += currentInput;
            }


        }




        if (currentInput === "="){
            if (firstNumber !== "" && secondNumber !== "" && operation !== ""){
                if (operation == "+"){
                    updateDisplay(add(firstNumber, secondNumber))
                }
                else if (operation == "-"){
                    updateDisplay(subtract(firstNumber, secondNumber))
                }
                else if (operation == "*"){
                    updateDisplay(multiply(firstNumber, secondNumber))
                }
                else if (operation == "/"){
                    updateDisplay(divide(firstNumber, secondNumber))
                }
            }
            
        }

    }
    
});





function add (num1, num2){
    firstNumber = Number(num1) + Number(num2);
    operation = ""
    secondNumber = ""
    return Number(num1) + Number(num2);
};


function subtract (num1, num2){
    firstNumber = Number(num1) - Number(num2);
    operation = ""
    secondNumber = ""
    return Number(num1) - Number(num2);
};



function multiply (num1, num2){
    firstNumber = Number(num1) * Number(num2);
    operation = ""
    secondNumber = ""
    return Number(num1) * Number(num2);
};



function divide (num1, num2){
    if (Number(num2) === 0){
        return "Error"
    }
    firstNumber = Number(num1) / Number(num2);
    operation = ""
    secondNumber = ""
    return Number(num1) / Number(num2);
};