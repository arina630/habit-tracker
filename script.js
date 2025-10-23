// ИНИЦИАЛИЗАЦИЯ ДАННЫХ:(хранит данные всех привычек в удобной структуре)
let waterTotal = 0;//хранит общее кол-во воды в мл
let foodList = [];//массив для хранения блюд
let workout = {done: false, minutes: 0};//объект с полями done(checkbox) и minutes(минуты тренировок) 
let activity = {type: 'reading', amount: 0};//объект с полями type(чтение/английский) и amount(минуты/страницы)
let frontend = { hours: 0, notes: ''};//объект с полями hours(часы) и notes(заметки)

//water
/*СТАРОЕ РЕШЕНИЕ
let waterTotal = 0;
function addWater() {
    const waterInput = document.getElementById('waterInput').value;//const чтобы знать сколько стаканов я ввела
    if (waterInput > 0) {
        waterTotal += waterInput * 250 //1 glass = 250ml
           document.getElementById('waterTotal').textContent = waterTotal;
           document.getElementById('waterInput').value = '';
           saveData();
    }
}*/

//training

//food
/*СТАРОЕ РЕШЕНИЕ
function addFood() {//функция addFood() вызывается при клике на кнопку *добавить блюдо*
    const foodInput = document.getElementById('foodInput').value;//находит инпут в html по id и берет его знаечение(например овсянку) в константу 
    if(foodInput) {//проверяет что поле не пустое
        const li = document.createElement('li');//создает новый HTML-элемент <li>(пункт списка)
        li.textContent = foodInput;//задает текст для <li>(-овсянка)
        document.getElementById('foodList').appendChild('li');//находит <ul id="foodList">, добавляет новый <li> в конец списка <ul> - показывает блюдо на странице
        document.getElementById('foodInput').value = '';//очистка поля ввода чтоб внести новое блюдо
        saveData();
    }
}
//*/

//frontend

//SAVE THE DAY