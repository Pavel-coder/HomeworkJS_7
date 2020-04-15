// 1. - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let text = document.querySelector('#text');
// let button = document.querySelector('input');
// button.onclick = (e) => {
//     text.innerText = ''};

//   2. - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let button = document.querySelector('input');
// button.onclick = (e) => {
// button.style.display = 'none'};

// 3. створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let inputAge = document.forms.form.age;
// let button = document.forms.form.button;
// button.onclick = (e) =>{
//    if (inputAge.value < 18){
//        alert('Тебе меньше 18');
//    }
//    else {
//        alert('Добро пожаловать');
//    }
//
// }

// - 4. Создайте меню, которое раскрывается/сворачивается при клике
// let menuButton = document.getElementById('menuButton');
// let menu = document.getElementById('menu');
// menuButton.onclick = () => {
//     if(menu.style.display === 'block'){
//         return menu.style.display = "none";
//     }
//     else{
//         return menu.style.display = 'block';
//     }
//
// }
//
// - 5. Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let coment = [{ title: 'Coment1', body: 'Some comment about JavaScript programming'},
//               {title: 'Coment2', body: 'Some comment about Java programming'},
//               {title: 'Coment3', body: 'Some comment about Angular programming'},
//               {title: 'Coment4', body: 'Some comment about React programming'},
//               {title: 'Coment5', body: 'Some comment about NodeJS programming'}
// ];
//
// for (const val of coment) {
//     let newDiv = document.createElement('div');
//     newDiv.innerText = `title: ${val.title} body: ${val.body}`;
//     let button = document.createElement('button');
//     button.innerText = "Delete";
//     newDiv.appendChild(button);
//     document.body.appendChild(newDiv);
//     button.onclick = () => {
//         newDiv.style.display = 'none';
//     };
// };


// - 6. створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let formOneinputOne = document.forms.formOne.inputOne;
// let formOneinputTwo = document.forms.formOne.inputTwo;
// let formTwoinputThree = document.forms.formTwo.inputThree;
// let formTwoinputFour = document.forms.formTwo.inputFour;
// let button = document.getElementById('button');
// button.onclick = () => {
//     let allValuesOfInputs = formOneinputOne.value + formOneinputTwo.value + formTwoinputThree.value + formTwoinputFour.value;
//     console.log(allValuesOfInputs);
// }

// - 7. Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.

 // function table (tr, td, tag){
 //    let tagElement = document.createElement(tag);
 //    document.body.appendChild(tagElement);
 //     let tableBox = document.createElement('table');
 //     tagElement.appendChild(tableBox);
 //     for (let i = 0; i < tr; i++){
 //         let trBox = document.createElement('tr');
 //         tableBox.appendChild(trBox);
 //         for (let j = 0; j < td; j++){
 //             let tdBox = document.createElement('td');
 //             trBox.appendChild(tdBox);
 //         }
 //     }
 //     console.log(tagElement);
 // }

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// let inputTr = document.forms.tableForm.tr;
// let inputTd = document.forms.tableForm.td;
// let inputTag = document.forms.tableForm.tag;
// let button = document.getElementById('button');
// button.onclick = () => {
//     table(inputTr.value,inputTd.value,inputTag.value);
// }

// - 8. Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let arrPhoto = [{
//     id: 1,
//     imgUrl: '1.jpg'
// },
//     {
//         id: 2,
//         imgUrl: "2.jpg"
//     },
//     {
//         id: 3,
//         imgUrl: "3.jpg"
//     },
//
//     {
//         id: 5,
//         imgUrl: "5.jpg"
//     },
//     {
//         id: 6,
//         imgUrl: "6.jpg"
//     }
// ]
//
// let photoDiv = document.getElementById('photo');
// let image = document.createElement('img');
// let button_1 = document.createElement('button');
// let button_2 = document.createElement('button');
// let i = 0;
// button_1.innerText = '<<<';
// button_2.innerText = '>>>';
// image.width = 350;
// image.src = arrPhoto[i].imgUrl;
//
// photoDiv.appendChild(image);
// photoDiv.appendChild(button_1);
// photoDiv.appendChild(button_2);
//
// button_1.onclick = () => {
//     if (i + 1 > arrPhoto.length - 1){
//         i = 0;
//         image.src = arrPhoto[i].imgUrl;
//     }
//     else{
//         i = i + 1;
//         image.src = arrPhoto[i].imgUrl;
//
//     }
//
// }
//
// button_2.onclick = () => {
//     if (i - 1 < 0){
//         i = arrPhoto.length - 1;
//         image.src = arrPhoto[i].imgUrl;
//     }
//     else{
//         i = i - 1;
//         image.src = arrPhoto[i].imgUrl;
//
//     }
//
// }

// -9. Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let badWords = ['suck', 'duk', 'cur', 'bar', 'arr'];
// let button = document.getElementById('button');
// let input = document.getElementById('badWord');
// button.onclick = () => {
//     for (const word of badWords) {
//         if(input.value === word) {
//             alert('You are bad boy');
//         }
//     }
// }

// - 10. Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let badWords = ['suck', 'duk', 'cur', 'bar', 'arr'];
// let button = document.getElementById('button');
// let input = document.getElementById('badWord');
//
// button.onclick = () => {
//     let inputValue = input.value.split(' ');
//     for (const word of badWords) {
//         for (const element of inputValue) {
//             if(element === word) {
//                 alert('You are bad boy');
//             }
//         }
//     }
// }

// 11. создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// let content = document.getElementById('content');
// let h2 = document.getElementsByTagName('h2');
// let wrapper = document.getElementById('wrap')
// let ul = document.createElement('ul');
// for (let i = 0; i < h2.length; i++) {
//     let li = document.createElement('li');
//     let a = document.createElement('a');
//     let anchor = 'anchor' + i;
//     a.href = '#' + anchor;
//     h2[i].setAttribute('id', anchor);
//     a.innerHTML = h2[i].innerText;
//     li.appendChild(a);
//     ul.appendChild(li);
// }
// content.appendChild(ul);


// 12. взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
// let content = document.getElementById('content');
// let user = document.createElement('div');
// user.appendChild(render(usersWithAddress));
// content.appendChild(user);
// let newButton = document.createElement('button');
// let input1 = document.createElement('input');
// let input2 = document.createElement('input');
// let input3 = document.createElement('input');
// let label1 = document.createElement('label');
// let label2 = document.createElement('label');
// let label3 = document.createElement('label');
// newButton.innerText = 'GET'
// label1.innerText = 'false';
// label2.innerText = 'more that 29 years';
// label3.innerText = 'Kyiv';
// input1.type ='checkbox';
// input2.type ='checkbox';
// input3.type ='checkbox';
// content.appendChild(label1);
// content.appendChild(input1);
// content.appendChild(label2);
// content.appendChild(input2);
// content.appendChild(label3);
// content.appendChild(input3);
// content.appendChild(newButton);
// newButton.onclick = () => {
//     let newArr = JSON.parse(JSON.stringify(usersWithAddress));
//     if(input1.checked){
//         newArr = newArr.filter(val => val.status === false);
//     }
//     if(input2.checked){
//         newArr = newArr.filter(val => val.age > 29);
//     }
//     if(input3.checked){
//         newArr = newArr.filter(val => val.address.city === "Kyiv");
//     }
//     user.innerHTML = '';
//     user.appendChild(render(newArr));
// }
//
// function render(arr){
//     let main = document.createElement('div');
//     for (const value of arr) {
//         let div = document.createElement('div');
//         div.innerHTML = JSON.stringify(value);
//         main.appendChild(div);
//     }
//     return main;
// }

//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
