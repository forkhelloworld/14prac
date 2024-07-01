let firstNum = prompt("Enter the first number: ");
let secondNum = prompt("Enter the second number: ");

firstNum = Number(firstNum);
secondNum = Number(secondNum);

if ((firstNum + secondNum) % 5 === 0) {
  alert("Sum of numbers is a multiple of 5");
} else {
  alert("Sum of number is not a multiple of 5");
}

function squareSide(side) {
  return side ** 2;
}

// squareSide(5);

function menu() {
  let drink = Number(
    prompt(`"1 - Чай
    2 - Кава
   3 - Сік
   4 - Вода"`)
  );

  switch (drink) {
    case 1: {
      drink = "Чай";
      break;
    }
    case 2: {
      drink = "Кава";
      break;
    }
    case 3: {
      drink = "Сік";
      break;
    }
    case 4: {
      drink = "Вода";
      break;
    }
    default: {
      alert("Такого напою у нас нема");
      return;
    }
  }
  alert("Ваш напій: " + drink);
}

// menu();

function getSale(check) {
  let totalPrice = check >= 500 ? check - (check / 100) * 3 : check;
  totalPrice = check >= 800 ? check - (check / 100) * 5 : totalPrice;
  alert(totalPrice);
}

//getSale(Number(prompt()));

function isMultiple(a, b) {
  return a % b === 0;
}

alert(isMultiple(Number(prompt()), Number(prompt())));
