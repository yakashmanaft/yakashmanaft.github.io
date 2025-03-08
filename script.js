
// Немного юзабилити для бургер меню
const menu_tab_list = document.querySelectorAll('.menu_wrapper')
const menu_btn = document.getElementById('menu_btn')
const menu_btn_label = document.querySelector('.menu_btn')

// Где-то сглупил, не смог поставитть иконки, вывернулся через js
menu_btn_label.style.backgroundImage = "url('icons/burger.svg')"
menu_btn_label.style.backgroundRepeat = 'no-repeat'
menu_btn_label.style.backgroundPosition = 'center'

menu_btn_label.addEventListener('click', () => {
menu_btn_label.style.backgroundImage = "url('icons/burger.svg')"
    if(menu_btn.checked) {
        menu_btn_label.style.backgroundImage = "url('icons/burger.svg')"
    } else {
        menu_btn_label.style.backgroundImage = "url('icons/close.svg')"
    }
})

menu_tab_list[0].addEventListener('click', (e) => {

    if(e.target.classList.contains('menu_tab')) {
        menu_btn.checked = false
        menu_btn_label.style.backgroundImage = "url('icons/burger.svg')"
    }
    if(e.target.tagName === 'A') {
        menu_btn.checked = false
        menu_btn_label.style.backgroundImage = "url('icons/burger.svg')"
    }
})


// MAIN ЗАМЕНА ЦВЕТА блоку через switcher
const switcher_label = document.querySelector('.switcher_label');
const switcher_el = document.querySelector('#switcher');
const target_block_el = document.querySelector('#target_block');

switcher_label.addEventListener('click', (e) => {
        
        if(!switcher_el.checked) {
            target_block_el.style.background = 'var(--color-1-main)'

        } else {
            target_block_el.style.background = 'var(--gradient-main)'
        }

})


// ТИПА СЛАЙДЕР
// Сам слайдер обошел стороной, и так медленно реализовываю, дабы хлоть что-то вам показать...
// добавляем пролистывание колесом прокрутки ыши
const scrollSliderContainer= document.getElementById("slider_list")

scrollSliderContainer?.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollSliderContainer.scrollLeft += evt.deltaY;
});
// добавляем кликабельность кнопкам
const btn_prev = document.querySelector('.btn_prev')
const btn_next = document.querySelector('.btn_next')
btn_prev.addEventListener('click', (e) => {
    // console.log('clicked prev')
    scrollSliderContainer.scrollLeft -= 400
})
btn_next.addEventListener('click', (e) => {
    // console.log('clicked next') 
    scrollSliderContainer.scrollLeft += 400  
})

// МАСКА ДЛЯ ТЕЛЕФОНА
document.addEventListener("DOMContentLoaded", function() {

    const form_submit_btn = document.querySelector('#form_submit_btn')

    form_submit_btn.disabled = true


    var input_phone = document.querySelector(".maskphone");
    
    input_phone.addEventListener("input", mask);
    input_phone.addEventListener("focus", mask);
    input_phone.addEventListener("blur", mask);
    
    /***/
    function mask(event) {
      var blank = "+_ (___) ___-__-__";
      
      var i = 0;
      var val = this.value.replace(/\D/g, "").replace(/^8/, "7"); // <---
      
      this.value = blank.replace(/./g, function(char) {
        if (/[_\d]/.test(char) && i < val.length) return val.charAt(i++);
        
        return i >= val.length ? "" : char;
      });
      
      if (event.type == "blur") {
        if (this.value.length == 2) this.value = "";
      } else {
        setCursorPosition(this, this.value.length);
      }
    };
    
    /***/
    function setCursorPosition(elem, pos) {
      elem.focus();
      
      if (elem.setSelectionRange) {    
        elem.setSelectionRange(pos, pos);
        return;
      }
      
      if (elem.createTextRange) {    
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();      
        return;
      }
    }
  });


  // ВАЛИДАЦИЯ ФОРМЫ
const form_submit_btn = document.querySelector('#form_submit_btn')
const accept_form = document.querySelector('#accepted_by_user')
const accept_label = document.querySelector('#accept_label')

let input_name = document.querySelector('#name');
let input_phone = document.querySelector('#phone');
let input_email = document.querySelector('#email');

let form_warning = document.querySelector('.form_warning')
//  условия возможности нажатия кнопки отправить форму
//  наличие согласия
accept_label.addEventListener('click', (e) => {
    if(
        accept_form.checked ||
        input_name.value === '' ||
        (input_phone.value.length !== 18 || 
        input_phone.value === '') ||
        input_email.value === ''
    ) {
        
        form_submit_btn.disabled = true
        form_warning.style.display = 'block'
        // console.log(accept_form.checked)
        // console.log(input_phone.value)
    } else if (        
        accept_form.checked && 
        (input_phone.value.length === 18 || 
        input_phone.value !== '')
    ) {
        form_submit_btn.disabled = true
        form_warning.style.display = 'block'
        // console.log(accept_form.checked)
        // console.log(input_phone.value)
    } 
    else if (input_phone.value === '') {
        form_submit_btn.disabled = true
        form_warning.style.display = 'block'
    } else {
        form_submit_btn.disabled = false
        form_warning.style.display = 'none'
        // console.log(accept_form.checked)
        // console.log(input_phone.value)
    }
})

//= если номер телефона указан
input_phone.addEventListener('input', (e) => {
    // console.log(input_phone.value)
    if(
        !accept_form.checked ||
        input_name.value === '' ||
        (input_phone.value.length !== 18 || 
        input_phone.value === '') ||
        input_email.value === ''
    ) {
        form_submit_btn.disabled = true
        form_warning.style.display = 'block'
    } else {
        form_submit_btn.disabled = false
        form_warning.style.display = 'none'
    }
})

//= если имя указано
input_name.addEventListener('input', () => {
    if(
        !accept_form.checked ||
        input_name.value === '' ||
        (input_phone.value.length !== 18 || 
        input_phone.value === '') ||
        input_email.value === ''
    ) {
        form_submit_btn.disabled = true
        form_warning.style.display = 'block'
    } else {
        form_submit_btn.disabled = false
        form_warning.style.display = 'none'
    }
})

//= если почта указана
input_email.addEventListener('input', () => {
    if(
        !accept_form.checked ||
        input_name.value === '' ||
        (input_phone.value.length !== 18 || 
        input_phone.value === '') ||
        input_email.value === ''
    ) {
        form_submit_btn.disabled = true
        form_warning.style.display = 'block'
    } else {
        form_submit_btn.disabled = false
        form_warning.style.display = 'none'
    }
})

form_submit_btn.addEventListener('click', (e) => {
    e.preventDefault()

    // Данные к отправке
    console.log(`name: ` + input_name.value)
    console.log(`phone: ` + input_phone.value)
    console.log(`email: ` + input_email.value)

    setTimeout(() => {
        console.log('Данные отправлены')
        input_name.value = ''
        input_phone.value = ''
        input_email.value = ''
    }, 1000)
})

