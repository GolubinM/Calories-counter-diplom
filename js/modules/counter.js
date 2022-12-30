import Result from "./result.js";

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
  FEMALE: 161,
};

const CaloriesMinMaxRatio = {
  MIN: 0.85,
  MAX: 1.15,
};

export default class Counter {
  constructor(element) {
    this.element = element; // Проверить необходимость!!!
    this.btnReset = element.querySelector(".form__reset-button");
    this.btnSubmit = element.querySelector(".form__submit-button");
    this.form = element.querySelector(".form"); // используется для reset в _onFormReset() и в init()

    this.age = element.querySelector("#age");
    this.height = element.querySelector("#height");
    this.weight = element.querySelector("#weight");

    // перечисление параметров, необходимых для работы: gender, age, weight, height, activity и т.д.
  }

  _onFormInput() {
    this.ageInt = parseInt(this.age.value);
    this.heightInt = parseInt(this.height.value);
    this.weightInt = parseInt(this.weight.value);

    this.btnReset.disabled = !(this.ageInt || this.heightInt || this.weightInt); //button reset is enabled
    this.btnSubmit.disabled = !Boolean(
      this.ageInt && this.heightInt && this.weightInt
    );
    //+++
    // this.physicalActivity = this.element.querySelector(
    //   'input[name="activity"]:checked'
    // ).value;

    //  !!! activity, gender отправляются формой по submit в алгоритм расчета колорий

    // получение данных от пользователя
    // также можно добавить небольшую валидацию
  }

  _onFormReset() {
    this.form.reset(); // reset the form
    this.btnSubmit.disabled = this.btnReset.disabled = true; //buttons reset, submit were disabled
    //+++
    // задизабленность при обновлении страницы кнопок, скрытие блока с результатом
  }

  _onFormSubmit(evt) {
    this.gender = evt.get("gender").toUpperCase();
    this.activity = evt.get("activity").toUpperCase();

    this.caloriesNorm = this.getCaloriesNorm();
    // вызов методов расчета калорий
    // getCaloriesNorm(), getCaloriesMin(), getCaloriesMax()
    // показ блока с результатами калорий
  }

  init() {
    this.element.addEventListener("change", (event) => {
      event.preventDefault();
      this._onFormInput();
    });
    this.btnReset.addEventListener("click", (event) => {
      event.preventDefault();
      this._onFormReset();
    });
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.formData = new FormData(this.form);
      this._onFormSubmit(this.formData);
    });
    // инициализация обработчиков событий
    // _onFormInput, _onFormReset, _onFormSubmit
  }

  deinit() {
    // удаление обработчиков событий
    // _onFormInput, _onFormReset, _onFormSubmit
  }

  getCaloriesNorm() {
    return (
      (CaloriesFormulaFactor.WEIGHT * this.weightInt +
        CaloriesFormulaFactor.HEIGHT * this.heightInt -
        CaloriesFormulaFactor.AGE * this.ageInt -
        CaloriesFormulaConstant[this.gender]) *
      PhysicalActivityRatio[this.activity]
    );
    // перечисление констант age, weight, height, gender, activity
    // применение формулы расчета
  }

  getCaloriesMin() {
    return getCaloriesNorm() / 1.15;
  }

  getCaloriesMax() {
    return getCaloriesNorm() * 1.15;
  }
}
