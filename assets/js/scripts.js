"use strict";

// Скрипт для плавной прокрутки
const anchors = document.querySelectorAll('.slow-scroll');

for (let anchor of anchors) {
    anchor.addEventListener("click", (event) => {
        event.preventDefault();
        const blockID = anchor.getAttribute("href");
        document.querySelector("" + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}

// Скрипт для меню бургера
const list = document.querySelector(".menu__list");

const checkWidth = () => {
    return window.innerWidth;
};
const checkParams = (flag) => {
    if (checkWidth() > 992 && list.style.display == "none" || checkWidth() >= 992 && flag == true) {
        return "flex";
    }
    if (checkWidth() < 992 && list.style.display == "flex" && flag == true) {
        return "block";
    }
    else if (checkWidth() < 992 && list.style.display == "flex") {
        return "none";
    }
};

$(document).ready(function(){
    let flag = false;

    setInterval(() => {
        list.style.display = checkParams(flag);
    }, 100);

	$('.menu__btn').on('click', function(){
        flag = flag ? false : true;

		$(this).toggleClass('menu__btn--active');
		$('.menu__list').slideToggle(300);
	});
});

// Скрипты для стрелки вверх
$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.up-arrow').fadeIn();
        } else {
            $('.up-arrow').fadeOut();
        }
    });
    $('.up-arrow').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

// Скрипты для pop-menu

const popButton = document.querySelector(".form_btn");
const popContainer = document.querySelector(".popup_text");
const popTitle = document.querySelector(".popup_title");

let flag = true;

const popHandler = (e) => {
    const target = e.target;

    if(target && target.classList.contains("form_btn") && flag == true) {
        popContainer.remove();

        popTitle.innerHTML = "Дякуємо! <br><br> Протягом 5 хвилин наш менеджер <br> зв'яжиться з вами.";
    }
};

popButton.addEventListener("click", popHandler);