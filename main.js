const target = document.getElementsByClassName("image");
const images = document.getElementsByClassName("travelHeading");

for (let i=0; i<target.length; i++) {
    target[i].addEventListener("mouseenter", () => {
        images[i].classList.add("imagePlus");
        target[i].classList.add("transformAnimation");
    });
}

for (let i=0; i<target.length; i++) {
    target[i].addEventListener("mouseleave", () => {
        for (let i=0; i<images.length; i++) {
            images[i].classList.remove("imagePlus");
            target[i].classList.remove("transformAnimation");
        }
    });
}

class App {
    constructor() {
        this.$activeForm = document.querySelector(`.active`);
        this.$rightLis = document.querySelectorAll(`.rightLi`);

        this.registerEventHandlers();
    };

    registerEventHandlers() {
        this.$rightLis.forEach(rightLi => {
            rightLi.addEventListener(`click`, (e) => {
                this.$activeForm.classList.remove(`active`);
                this.$activeForm = e.target.closest(`.rightLi`);
                this.$activeForm.classList.add(`active`);
            });
        });
    };
};

new App();
