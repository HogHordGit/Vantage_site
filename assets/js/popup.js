const popButton = document.querySelector(".form__btn");
const popContainer = document.querySelector(".popup__text");
const popTitle = document.querySelector(".popup__title");

const inpName = document.querySelector("#input-name");
const inpPhone = document.querySelector("#input-phone");
const errorNameText = document.querySelector("#errorName");
const errorPhoneText = document.querySelector("#errorPhone");

let searchNameLast = null;
let searchPhoneLast = null;
let testName = null;
let testPhone = null;

const popHandler = (e) => {
    const target = e.target;

    setInterval(() => {
        const searchNameString = inpName.value;
        const searchPhoneString = inpPhone.value;

        if (searchNameString !== searchNameLast) {
            testName = /^\D{3}/.test(searchNameString);
        }
        if (searchPhoneString !== searchPhoneLast) {
            testPhone = /^380(\d{9})$/.test(searchPhoneString);
        }

        if (testName) {
            inpName.style.border = "1px solid green";
            errorNameText.style.display = "none";
        } else {
            inpName.style.border = "1px solid red";
            errorNameText.style.display = "block";
        }
        if (testPhone) {
            inpPhone.style.border = "1px solid green";
            errorPhoneText.style.display = "none";
        } else {
            inpPhone.style.border = "1px solid red";
            errorPhoneText.style.display = "block";
        }
    
        searchNameLast = searchNameString;
        searchPhoneLast = searchPhoneString;
    }, 50);

    setTimeout(() => {
        console.log(testName, testPhone);

        if(target && target.classList.contains("form__btn") && (testName && testPhone)) {
            popContainer.remove();

            console.log(`Submitted name: ${searchNameLast} phone: ${searchPhoneLast}`);
            popTitle.innerHTML = "Дякуємо! <br><br> Протягом 5 хвилин наш менеджер <br> зв'яжиться з вами.";
        }
    }, 300);
};

popButton.addEventListener("click", popHandler);