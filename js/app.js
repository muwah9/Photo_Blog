(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    const menuButton = document.querySelector(".icon-menu");
    const navigation = document.querySelector(".header__navigation");
    const body = document.querySelector("body");
    body.classList.add("lock");
    navigation.classList.remove("header__navigation--no-js");
    menuButton.addEventListener("click", (function() {
        if (navigation.classList.contains("header__navigation--closed")) {
            navigation.classList.remove("header__navigation--closed");
            navigation.classList.add("header__navigation--open");
        } else {
            navigation.classList.add("header__navigation--closed");
            navigation.classList.remove("header__navigation--open");
        }
    }));
    window["FLS"] = true;
    isWebp();
})();