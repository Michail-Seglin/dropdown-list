const active = document.querySelector('.active');
const wrapper = document.querySelector('.wrapper');

active.addEventListener('click', function () {
    if (wrapper.hidden) {
        wrapper.hidden = false
        document.querySelector('.arrow').style='background-image: url(./assets/ChevronDown.svg);'
    } else {
        wrapper.hidden = true
        document.querySelector('.arrow').style='background-image: url(./assets/ChevronUp.svg);'
    }
})