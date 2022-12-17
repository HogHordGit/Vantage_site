"use strict";

// Скрипт для плавной прокрутки
const anchors = document.querySelectorAll('.menu__link');

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


