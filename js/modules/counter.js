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
    this.element = element;
    this.btnReset = element.querySelector(".form__reset-button");
    this.form = element.querySelector(".form");
    this.genderMale = element.querySelector("#gender-male");

    this.age = element.querySelector("#age");
    this.height = element.querySelector("#height");
    this.weight = element.querySelector("#weight");

    // перечисление параметров, необходимых для работы: gender, age, weight, height, activity и т.д.
  }

  _onFormInput() {
    console.log(this.element);

    this.ageInt = parseInt(this.age.value);
    this.heightInt = parseInt(this.height.value);
    this.weightInt = parseInt(this.weight.value);
    this.btnReset.disabled = !(this.ageInt || this.heightInt || this.weightInt); //button reset is enabled
    this.genderIsMale = this.genderMale.checked;

    console.log(
      `Value of age, height, weight: ${this.ageInt}, ${this.heightInt}, ${this.weightInt}`
    );
    console.log(
      `typeof of age, height, weight: ${typeof this.ageInt}, ${typeof this
        .heightInt}, ${typeof this.weightInt}`
    );
    console.log(
      `Boolen of age, height, weight: ${Boolean(this.ageInt)}, ${Boolean(
        this.heightInt
      )}, ${Boolean(this.weightInt)}`
    );

    // получение данных от пользователя
    // также можно добавить небольшую валидацию
  }

  _onFormReset() {
    this.form.reset(); // reset the form
    this.btnReset.disabled = true; //button reset is disabled

    // задизабленность при обновлении страницы кнопок, скрытие блока с результатом
  }

  _onFormSubmit(evt) {
    // вызов методов расчета калорий
    // getCaloriesNorm(), getCaloriesMin(), getCaloriesMax()
    // показ блока с результатами калорий
  }

  init() {
    this.element.addEventListener("change", (event) => {
      event.preventDefault();
      this._onFormInput(); //
      // console.log("======");
      // if (this.age || this.weight || this.height) {
      //   this.btnReset.removeAttribute("disabled");
      //   console.log(`Element is enabled`);
      // }
    });
    this.btnReset.addEventListener("click", (event) => {
      event.preventDefault();
      this._onFormReset(); // Дуйствия при нажатии сброс
    });

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

  getCaloriesMin() {}

  getCaloriesMax() {}
}
