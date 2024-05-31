console.log('Завдання: 9 ==============================')

function task9() {
  // Створюємо функцію fetchWithError, яка симулює помилку при запиті до сервера.
  function fetchWithError() {
    return Promise.reject(errorMessage)
  }
  const errorMessage = "Помилка при з'єднанні з сервером"
  // Створюємо константу errorMessage в яку записуємо рядок "Помилка при з'єднанні з сервером"
  // Використовуємо Promise.reject(errorMessage) для створення вже відхиленого промісу.
  // Викликаємо функцію fetchWithError
  fetchWithError()
    .then((value) => {
      console.log(value)
    })
    .catch((error) => {
      console.log('Error:', error)
    })
  // Якщо проміс виконаний успішно виводимо в консоль дані які він повертає
  // Якщо проміс виконаний з помилкою виводимо в консоль помилку
}

// Викликаємо функцію task10
task9()
