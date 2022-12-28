import Result from './result.js';

const PhysicalActivityRatio = {
    MIN: 1.2,
    LOW: 1.375,
    MEDIUM: 1.55,
    HIGH: 1.725,
    MAX: 1.9,
};

const CaloriesFormulaFactor = {
    AGE: 5,
    WEIGHT: 10,
    HEIGHT: 6.25,
};

const CaloriesFormulaConstant = {
    MALE: -5,
    FEMALE: 161
};

const CaloriesMinMaxRatio = {
    MIN: 0.85,
    MAX: 1.15
};

export default class Counter {
    constructor(element) {
        // перечисление параметров, необходимых для работы: gender, age, weight, height, activity и т.д.
    }

    _onFormInput() {
        // получение данных от пользователя
        // также можно добавить небольшую валидацию
    }

    _onFormReset() {
        // задизабленность при обновлении страницы кнопок, скрытие блока с результатом
    }

    _onFormSubmit(evt) {
        // вызов методов расчета калорий 
        // getCaloriesNorm(), getCaloriesMin(), getCaloriesMax()
        // показ блока с результатами калорий
    }

    init() {
        // инициализация обработчиков событий 
        // _onFormInput, _onFormReset, _onFormSubmit
    }

    deinit() {
        // удаление обработчиков событий 
        // _onFormInput, _onFormReset, _onFormSubmit
    }

    getCaloriesNorm() {
        // перечисление констант age, weight, height, gender, activity
        // применение формулы расчета
    }

    getCaloriesMin() {

    }

    getCaloriesMax() {

    }
}