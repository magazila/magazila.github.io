alert("Давай поиграем, укажи диапоз чисел от и до");

let minNum = prompt("Укажи первое число");
let maxNum = prompt("Укажи второе число");

minNum = Number(minNum);
maxNum = Number(maxNum);

if (!isNaN(minNum) && !isNaN(maxNum) && minNum < maxNum) {
  let number = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
  alert(`Отлично, я загадал число от ${minNum} До ${maxNum}`);

  alert(
    "Теперь пора играть, говори число а я скажу больше или меньше загаданного",
  );

  let score = 0;
  while (true) {
    let userNumber = prompt("Введи число");

    if (userNumber === null) {
      break;
    }

    if ((userNumber > maxNum) || (userNumber < minNum) || (userNumber.trim() === '')) {
      alert(
        "Введенное число вышло за допустмый диапазон! Введи допустимые значения",
      );
      continue;
    }


    if (isNaN(userNumber)) {
      alert("Введи число!");
      continue;
    }
    if (userNumber == number) {
      alert(`Поздравляю ты отгадал число ${number} за ${score + 1} попыток `);
      break;
    } else if (userNumber > number) {
      alert(`загаданное число меньше`);
      score += 1;
    } else if (userNumber < number) {
      alert(`загаданное число больше`);
      score += 1;
    }
  }
} else {
  alert(
    "При вводе данных произошла ошибка. Убедитесь, что введены числа и первое число меньше второго",
  );
}
