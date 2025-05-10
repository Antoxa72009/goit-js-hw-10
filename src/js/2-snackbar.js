const form = document.querySelector('.form');
const delayInput = form.querySelector('input[name="delay"]');
const stateRadios = form.querySelectorAll('input[name="state"]');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Запобігаємо перезавантаженню сторінки

  const delay = parseInt(delayInput.value); // Читання затримки з форми
  const state = Array.from(stateRadios).find(radio => radio.checked).value; // Читання обраного стану

  // Створюємо проміс
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay); // Якщо Fulfilled, викликаємо resolve
      } else {
        reject(delay); // Якщо Rejected, викликаємо reject
      }
    }, delay); // Затримка в мілісекундах
  });

  // Обробка промісу
  promise
    .then((fulfilledDelay) => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${fulfilledDelay}ms`,
      });
    })
    .catch((rejectedDelay) => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${rejectedDelay}ms`,
      });
    });
});