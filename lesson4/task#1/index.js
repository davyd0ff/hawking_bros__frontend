/*
  1.Напишите с помощью изученной конструкции try/catch простую валидацию инпута для числового значения. 
  Если поле пустое, текстовое содержимое не является числом, или значение меньше 5 или больше 10 — пробросьте 
  ошибку с соответствующим текстом. Чтобы пользователю было понятен текст ошибки, выводите текст ошибки в 
  абзац под инпутом.
*/

const input = document.getElementById("input");
const messagePlaceholder = document.getElementById("message-placeholder");

const isNumber = (value) => {
  if (value instanceof Number) {
    value = value.instanceof();
  }
  return isFinite(value) && !isNaN(parseFloat(value));
};

const validate = (value) => {
  if (value === "") throw new Error("value is empty");
  if (!isNumber(value)) throw new Error("value isn't Number");
  if (value < 5) throw new Error("value less than 5");
  if (value > 10) throw new Error("value grater than 10");
};

input.addEventListener("change", (env) => {
  try {
    validate(env.target.value);
    messagePlaceholder.innerText = "Ok";
  } catch (error) {
    messagePlaceholder.innerText = error;
  }
});
