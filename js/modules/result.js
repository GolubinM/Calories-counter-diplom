export default class Result {
    constructor(element) {
        this.counter = element;

        this.root = element.querySelector(`.counter__result`);
        this.caloriesNormOutput = this.root.querySelector(`#calories-norm`);
        this.caloriesMinOutput = this.root.querySelector(`#calories-minimal`);
        this.caloriesMaxOutput = this.root.querySelector(`#calories-maximal`);
    }

    show(calories) {
        // показ блока с результатом
    }

    hide() {
        // скрытие блока, очистка значений
    }
}