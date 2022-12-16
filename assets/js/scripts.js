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
$(document).ready(function(){
	$('.menu__btn').on('click', function(){
		$(this).toggleClass('menu__btn--active');
		$('.menu__list').stop(true, true).slideToggle(300);
	});
});


