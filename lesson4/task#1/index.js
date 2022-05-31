/*
  1.Напишите с помощью изученной конструкции try/catch простую валидацию инпута для числового значения. 
  Если поле пустое, текстовое содержимое не является числом, или значение меньше 5 или больше 10 — пробросьте 
  ошибку с соответствующим текстом. Чтобы пользователю было понятен текст ошибки, выводите текст ошибки в 
  абзац под инпутом.
*/

const input = document.getElementById("input");
const messagePlaceholder = document.getElementById("message-placeholder");

const validate = (inputValue) => {
  if (inputValue == "") throw new Error("value is empty");
  if (typeof inputValue != Number) throw new Error("value isn't number");
  if (inputValue < 5) throw new Error("value less than 5");
  if (inputValue > 10) throw new Error("value greater than 10");
};

input.addEventListener("change", (env) => {
  try {
    validate(env.target.value);
  } catch (error) {
    messagePlaceholder.innerText = error;
  }
});
