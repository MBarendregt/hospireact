var nlselector = document.querySelector('.nlbutton')
var engselector = document.querySelector('.engbutton')
var nlselector2 = document.querySelector('.nlbutton2')
var engselector2 = document.querySelector('.engbutton2')
var eng_text = document.querySelectorAll('.eng-class')
var nl_text = document.querySelectorAll('.')

// var toggleButton = document.querySelector('#openSidebarMenu')
// var backdrop = document.querySelector('.backdrop');
// var mobileNav = document.querySelector('#sidebarMenu');
// var header = document.querySelector('.main-header');


// backdrop.addEventListener('click', function () {
//     mobileNav.classList.remove('open')
//     console.log(mobileNav.style)
//     closePopUp();
// });

// function closePopUp() {
//     // if (modal) {
//     //     modal.classList.remove('open')
//     // }

//     backdrop.classList.remove('open')
//     setTimeout(function () {
//         backdrop.style.dispay = 'none';

//     }, 10);

// }

// toggleButton.addEventListener('click', function () {
//     mobileNav.classList.add('open')
//     setTimeout(function () {
//         backdrop.style.dispay = 'block';
//     }, 10);
//     backdrop.classList.add('open')
//     console.log(mobileNav.style)
//     mobileNav.style.transform = "translateX(130%)";

// });


// document.getElementById("myForm").addEventListener("submit", function () { this.className = "submitted"; }





nlselector.addEventListener('click', function () {
    nlselected = 1
    langselector(nlselector, engselector);
}, false);

engselector.addEventListener('click', function () {
    nlselected = 0
    langselector(engselector, nlselector);

}, false);


nlselector2.addEventListener('click', function () {
    nlselected = 1
    langselector(nlselector2, engselector2);
}, false);

engselector2.addEventListener('click', function () {
    nlselected = 0
    langselector(engselector2, nlselector2);

}, false);

function langselector(LanguageOn, LanguageOff) {
    console.log(LanguageOn)
    console.log(LanguageOff)
    if (!LanguageOn.classList.contains('current_lang')) {
        LanguageOn.classList.toggle('current_lang');
        LanguageOff.classList.toggle('current_lang');
    }
    console.log("insinde function" + nlselected)
    if (nlselected == 0) {
        display(eng_text, eng_text.length);
        hide(nl_text, nl_text.length);
    }
    else if (nlselected == 1) {
        display(nl_text, nl_text.length);
        hide(eng_text, eng_text.length);
    }
}

function display(txt, txtlength) {
    for (var i = 0; i < txtlength; i++) {
        txt[i].style.display = 'block';
    }
}
function hide(txt, txtlength) {
    for (var i = 0; i < txtlength; i++) {
        txt[i].style.display = 'none';
    }
}
function init() {
    console.log("hello")
    nlselected = 0;
    langselector(nlselector, engselector);
}
init();


document.addEventListener("DOMContentLoaded", function (event) {


    var acc = document.getElementsByClassName("accordion");
    var panel = document.getElementsByClassName('panel');

    for (var i = 0; i < acc.length; i++) {
        acc[i].onclick = function () {
            var setClasses = !this.classList.contains('active');
            setClass(acc, 'active', 'remove');
            setClass(panel, 'show', 'remove');

            if (setClasses) {
                this.classList.toggle("active");
                this.nextElementSibling.classList.toggle("show");
            }
        }
    }

    function setClass(els, className, fnName) {
        for (var i = 0; i < els.length; i++) {
            els[i].classList[fnName](className);
        }
    }

});

