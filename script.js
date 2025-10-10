//water
let waterTotal = 0;
function addWater() {
    const waterInput = document.getElementById('waterInput').value;//const чтобы знать сколько стаканов я ввела
    if (waterInput > 0) {
        waterTotal += waterInput * 250 //1 glass = 250ml
           document.getElementById('waterTotal').textContent = waterTotal;
           document.getElementById('waterInput').value = '';
           saveData();
    }
}

//training

//food
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
//reading/english

//frontend

//SAVE THE DAY