// Task 1

// // 1 - отримай body елемент і виведи його в консоль;
// const bodyEL = document.querySelector('body');
// console.log(bodyEL);

// // 2 - отримай елемент id="title" і виведи його в консоль;
// const titleEl = document.querySelector('#title');
// console.log(titleEl);

// // 3 - отримай елемент class="list" і виведи його в консоль;
// const listEl = document.querySelector('.list');
// console.log(listEl);

// // 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// const topicEl = document.querySelectorAll('[data-topic]');
// console.log(topicEl);

// // 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// console.log(topicEl[0]);

// // 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// console.log(topicEl[topicEl.length - 1]);

// // 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// const h1NeighbourEl = document.querySelector('h1').nextElementSibling;
// console.log(h1NeighbourEl);

// // 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// const h3Els = document.querySelectorAll('h3');
// console.log(h3Els);

// // 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// h3Els.forEach(el => el.classList.add('active'));

// // 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// const navigationEl = document.querySelector('[data-topic="navigation"]');
// console.log(navigationEl);

// // 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// navigationEl.style.backgroundColor = 'yellow';

// // 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// navigationEl.querySelector('p').textContent = 'Я змінив тут текст!';

// // 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якого атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// const currentTopic = 'manipulation';
// const manipulationEl = document.querySelector(`[data-topic="${currentTopic}"]`);
// console.log(manipulationEl);

// // 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// manipulationEl.style.backgroundColor = 'cyan';

// // 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// const completedEl = document.querySelector('.completed');
// console.log(completedEl);

// // 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// completedEl.closest('li').remove();

// // 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// const newP = document.createElement('p');
// newP.textContent = "Об'єктна модель документа (Document Object Model)";
// document.querySelector('h1').after(newP);

// // 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// const newLi = document.createElement('li');
// const newH = document.createElement('h3');
// const newParagraph = document.createElement('p');
// newH.textContent = 'Властивість innerHTML';
// newParagraph.textContent =
//   'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';
// newLi.append(newH, newParagraph);
// listEl.append(newLi);

// // 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// listEl.insertAdjacentHTML(
//   'beforeend',
//   `<li>
//     <h3>Властивість innerHTML</h3>
//     <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
//   </li>`
// );

// // 20 - очисти список
// listEl.innerHTML = '';

// Task 2

// // Створіть контейнер div (з класом number-container) в HTML-документі
// // та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// // числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// // Парні числа повинні мати зелений фон (додати клас even),
// // Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// const numberContainerEL = document.querySelector('.number-container');

// for (let i = 0; i < 100; i++) {
//   const num = randomNumber();
//   const numberBlock = document.createElement('div');
//   numberBlock.classList.add('number');
//   numberBlock.textContent = num;
//   if (num % 2 === 0) {
//     numberBlock.classList.add('even');
//   } else {
//     numberBlock.classList.add('odd');
//   }
//   numberContainerEL.append(numberBlock);
// }

// Task 3

// // Form Events, Input, Focus, Blur and Submit.

// // Використовуй шаблон форми з файлу html.

// // 1 - При події `input`, якщо користувач ввів в поле більше
// // 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// // то клас `error`
// const inputEl = document.querySelector('.js-username-input');
// inputEl.addEventListener('input', () => {
//   inputEl.classList.remove('success', 'error');
//   if (inputEl.value.length > 6) {
//     inputEl.classList.add('success');
//   } else {
//     inputEl.classList.add('error');
//   }
// });

// // 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// // якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// // якщо при фокусі поле непусте, то `outline` => `'3px solid green'`
// inputEl.addEventListener('focus', () => {
//   if (inputEl.value === '') {
//     inputEl.style.outline = '3px solid red';
//   } else {
//     inputEl.style.outline = '3px solid green';
//   }
// });
// // 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// // якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// // якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`
// inputEl.addEventListener('blur', () => {
//   if (inputEl.value === '') {
//     inputEl.style.outline = '3px solid red';
//   } else {
//     inputEl.style.outline = '3px solid lime';
//   }
// });
// // 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// // Дістань данні з інпуту і чек боксу, зроби перевірку,
// // що інпут не порожній, також, що нажатий чек бокс у положення true,
// // якщо користувач все виконав вірно, збери данні (userName)
// // у обьект і виведи у консоль. У разі, якщо користувач не виконав
// // одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// // ім`я користувача у span, замість слова "Anonymous".
// // Якщо користувач ввів ім`я, а потім видалив, зроби так,
// // щоб на місце повернулось дефолтне знаяення "Anonymous".
// // При відправці форми, очисти інпут, верни чек бокс у положення
// // false, верни дефолтне значення "Anonymous" у span.

// const formEl = document.querySelector('.js-contact-form');
// const spanEl = document.querySelector('.js-username-output');

// formEl.addEventListener('submit', event => {
//   event.preventDefault();
//   const inputValue = event.target.elements.userName.value.trim();
//   const isChecked = event.target.elements.accept.checked;
//   if (inputValue === '' || !isChecked) {
//     alert('Fill all fields!!!');
//     return;
//   }
//   console.log(inputValue);
//   const userData = { userName: inputValue };
//   console.log(userData);
//   event.target.reset();
//   spanEl.textContent = 'Anonymous';
// });

// inputEl.addEventListener('input', () => {
//   if (inputEl.value === '') {
//     spanEl.textContent = 'Anonymous';
//   } else {
//     spanEl.textContent = inputEl.value;
//   }
// });

// Task 4

// // Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// // При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
// const boxEl = document.querySelector('.box');
// const btnDcrs = document.querySelector('.js-decrease');
// const btnIncrs = document.querySelector('.js-increase');
// let currentSize = 50;
// btnDcrs.addEventListener('click', () => {
//   currentSize -= 20;
//   boxEl.style.width = currentSize + 'px';
//   boxEl.style.height = currentSize + 'px';
// });
// btnIncrs.addEventListener('click', () => {
//   currentSize += 20;
//   boxEl.style.width = currentSize + 'px';
//   boxEl.style.height = currentSize + 'px';
// });
