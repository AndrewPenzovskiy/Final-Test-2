
//спільні класи
const item = document.querySelectorAll('.item')
const item2 = document.querySelectorAll('.item2')
const itemEditor = document.querySelector('.item__editor')

//головні кнопки
const changeContent = document.querySelector('.item__change-content')
const bold = document.querySelector('.text-style__bold')
const italic = document.querySelector('.text-style__italic')
const underline = document.querySelector('.text-style__underline')
const lineThrough = document.querySelector('.text-style__line-through')
const alignLeft = document.querySelector('.text-align__left')
const alignCenter = document.querySelector('.text-align__center')
const alignRight = document.querySelector('.text-align__right')
const fontFamily = document.querySelectorAll('.font-family')
const fontSize = document.querySelectorAll('.font-size')
const textColor = document.querySelector('.text-settings__text-color')
const background = document.querySelector('.text-settings__background')
const signIn = document.querySelector('.sign-in')
const signOut = document.querySelector('.sign-out')
const save = document.querySelector('.editor__save')
const table = document.querySelector('.editor__table')
const numList = document.querySelector('.editor__num-list')
const markList = document.querySelector('.editor__mark-list')

//контейнер з текстом
const containerMain = document.querySelector('.container__main')
    const containerEditText = document.querySelector('.container__edit-text')
    const editText = document.getElementById('edit-text')

//кнопка закриття блоку
const closeButton = document.querySelectorAll('.close-button')

//редагування кольору тексту
const textColorDropdownContent = document.querySelector('.text-color__dropdown-content')
    const boxItem = document.querySelectorAll('.box-item')

//редагування фону
const backgroundDropdownContent = document.querySelector('.background__dropdown-content')
    const boxColor = document.querySelector('.background__box-color')
    const boxImage = document.querySelector('.background__box-image')
    const boxFiles = document.querySelector('.background__box-files')
    const file = document.getElementById('file')
    const btnColors = document.getElementById('btn-colors')
    const btnImages = document.getElementById('btn-images')
    const btnFiles = document.getElementById('btn-files')

//вхід в блок редагування
const signInDropdownContent = document.querySelector('.sign-in__dropdown-content')
    const login = document.getElementById('login')
    const password = document.getElementById('password')
    const sgnInBtn = document.querySelector('.sign-in__button')

//вихід з блоку редагування
const signOutDropdownContent = document.querySelector('.sign-out__dropdown-content')
    const cancelButton = document.querySelector('.cancel__button')
    const signOutButton = document.querySelector('.sign-out__button')

// блоки при невірній валідації
const empty = document.querySelector('.sign-in__empty')
const invalid = document.querySelectorAll('.invalid')

//кнопка обнулення даних
const resetButton = document.querySelectorAll('.reset__button')

//створення таблиці
const tableDropdownContent = document.querySelector('.table__dropdown-content')
    const tableCreateButton = document.querySelector('.table-create__button')
    const countTr = document.getElementById('count-tr')
    const countTd = document.getElementById('count-td')
    const widthTd = document.getElementById('width-td')
    const heightTd = document.getElementById('height-td')
    const widthBorder = document.getElementById('width-border')
    const styleBorder = document.getElementById('style-border')
    const colorBorder = document.getElementById('color-border')

//створення ol-списку
const olListDropdownContent = document.querySelector('.ol-list__dropdown-content')
    const olCountLi = document.getElementById('ol-count-li')
    const olTypeMark = document.getElementById('ol-type-mark')
    const olCreateButton = document.querySelector('.ol-create__button')

//створення ul-списку
const ulListDropdownContent = document.querySelector('.ul-list__dropdown-content')
    const ulCountLi = document.getElementById('ul-count-li')
    const ulTypeMark = document.getElementById('ul-type-mark')
    const ulCreateButton = document.querySelector('.ul-create__button')

let test1 = /^[A-z]{4,16}$/                     //
let test2 = /^[\S]{4,16}$/                      //
let testCountTr = /^[0-9]{1,2}$/                //
let testCountTd = /^[0-9]{1,2}$/                //
let testWidthTd = /^[0-9]{1,2}$/                // 
let testHeightTd = /^[0-9]{1,3}$/               // Умови регулярних виразів
let testWidthBorder = /^[0-9]{1,3}$/            //
let testStyleBorder = /^[A-z]+[^choose style]/  //
let testColorBorder = /^[A-z]+[^choose color]/  //
let testCountLi = /[0-9]{1,4}/                  //
let testOlTypeMark = /^[1IiAa]/                 //
let testUlTypeMark = /[^choose Ul type mark]/   //

//------------------------------------------------------------------------------------
// Перемикачі
bold.onclick = () => {
    containerMain.classList.toggle('bold')
}
italic.onclick = () => {
    containerMain.classList.toggle('italic')
}
underline.onclick = () => {
    containerMain.classList.toggle('underline')
}
lineThrough.onclick = () => {
    containerMain.classList.toggle('lineThrough')
}
alignLeft.onclick = () => {
    containerMain.style.textAlign = 'left'
}
alignCenter.onclick = () => {
    containerMain.style.textAlign = 'center'
}
alignRight.onclick = () => {
    containerMain.style.textAlign = 'right'
}
//------------------------------------------------------------------------------------
// Стилі для Font Family
fontFamily.forEach((e) => {
    for (i=0; i<fontFamily.length; i++) {
        fontFamily[i].style.fontFamily = fontFamily[i].innerHTML
    }
    e.addEventListener('click', ()=> {
        containerMain.style.fontFamily = e.innerHTML
    })
})
//------------------------------------------------------------------------------------
// Стилі для Font Size
fontSize.forEach((e) => {
    for (i=0; i<fontSize.length; i++) {
        fontSize[i].style.fontSize = fontSize[i].innerHTML
    }
    e.addEventListener('click', () => {
        containerMain.style.fontSize = e.innerHTML
    })
})
//------------------------------------------------------------------------------------
// Відкриття вікна редагування кольору тексту
textColor.onclick = () => {
    textColorDropdownContent.style.display = 'block'
    backgroundDropdownContent.style.display = 'none'
    document.body.children[0].firstElementChild.style.opacity = '0.3'
}
//------------------------------------------------------------------------------------
// Відкриття вікна редагування фону
background.onclick = () => {
    backgroundDropdownContent.style.display = 'block'
    textColorDropdownContent.style.display = 'none'
    document.body.children[0].firstElementChild.style.opacity = '0.3'
}
//------------------------------------------------------------------------------------
// Кнопка закриття вікна
closeButton.forEach((e) => {
    e.addEventListener('click', ()=> {
        textColorDropdownContent.style.display = 'none'
        backgroundDropdownContent.style.display = 'none'
        tableDropdownContent.style.display = 'none'
        olListDropdownContent.style.display = 'none'
        ulListDropdownContent.style.display = 'none'
        boxColor.style.display = 'grid'
        boxImage.style.display = 'none'
        boxFiles.style.display = 'none'
        document.body.children[0].firstElementChild.style.opacity = '1'
    })
})
//------------------------------------------------------------------------------------
// Вибір кольору тексту і фону
boxItem.forEach((e) => {
    e.addEventListener('click', ()=> {
        if (e.classList.contains('color-item')) {
            containerMain.style.color = e.style.backgroundColor
        }
        if (e.classList.contains('background-item')) {
            containerMain.style.backgroundImage = ''
            containerMain.style.backgroundColor = e.style.backgroundColor
        }
        if (e.classList.contains('image-item')) {
            containerMain.style.backgroundImage = e.style.backgroundImage
        }
    })
})
//------------------------------------------------------------------------------------
// Перемикачі відкриття вікон з фоном
btnColors.onclick = () => {
    boxColor.style.display = 'grid'
    boxImage.style.display = 'none'
    boxFiles.style.display = 'none'  
}
btnImages.onclick = () => {
    boxImage.style.display = 'grid'
    boxColor.style.display = 'none'
    boxFiles.style.display = 'none'
}
btnFiles.onclick = () => {
    boxFiles.style.display = 'block'
    boxColor.style.display = 'none'
    boxImage.style.display = 'none'
}
//------------------------------------------------------------------------------------
// Додавання файлу зображення з ПК
file.addEventListener('change', function() {
    const reader = new FileReader()
    let uploaded_image = ''
    reader.addEventListener('load', () => {
        uploaded_image = reader.result
        containerMain.style.backgroundImage = `url(${uploaded_image})`
    })
    reader.readAsDataURL(this.files[0])
})
//------------------------------------------------------------------------------------
// Відкриття вікна Sign In
signIn.onclick = () => {
    signInDropdownContent.style.display = 'block'
    textColorDropdownContent.style.display = 'none'
    backgroundDropdownContent.style.display = 'none'
    login.value = ''
    password.value = ''
    login.style.borderColor = '#676969'
    password.style.borderColor = '#676969'
    document.body.children[0].firstElementChild.style.opacity = '0.3'
}
//------------------------------------------------------------------------------------
// Активація кнопки Change Content, яка дає доступ до блоку редагування
sgnInBtn.onclick = function() {
    if (test1.test(login.value) && test2.test(password.value)) {
        signIn.style.display = 'none'
        signOut.style.display = 'flex'
        signInDropdownContent.style.display = 'none'
        changeContent.style.pointerEvents = 'auto'
        changeContent.style.backgroundColor = '#f5f7f7'
        document.body.children[0].firstElementChild.style.opacity = '1'
    }
        else if (test1.test(login.value)) {
            login.style.border = '3px solid #676969'
        }
        else if (test2.test(password.value)) {
            password.style.border = '3px solid #676969'
        }
    if (test1.test(login.value) == false ){
        login.style.border = '3px solid #fa00008a'
        empty.style.display = 'inline-block'
    }
    if (test2.test(password.value) == false) {
        password.style.border = '3px solid #fa00008a'
        empty.style.display = 'inline-block'
    }
}
//------------------------------------------------------------------------------------
// Відкриття блоку з кнопками Cancel і Sign Out
signOut.onclick = () => {
    signOutDropdownContent.style.display = 'flex'
    document.body.children[0].firstElementChild.style.opacity = '0.3'
}
//------------------------------------------------------------------------------------
// Кнопки відміни або виходу з вікна редагуванням
cancelButton.onclick = () => {
    signOutDropdownContent.style.display = 'none'
    document.body.children[0].firstElementChild.style.opacity = '1'
}
signOutButton.onclick = () => {
    signOutDropdownContent.style.display = 'none'
    changeContent.style.pointerEvents = 'none'
    changeContent.style.backgroundColor = '#c3c5c5'
    signIn.style.display = 'flex'
    signOut.style.display = 'none'
    empty.style.display = 'none'
    document.body.children[0].firstElementChild.style.opacity = '1'
}
//------------------------------------------------------------------------------------
// При натисканні на кнопку Change Content, відкриваються нові кнопки і нове тіло з текстом
changeContent.onclick = () => {
    item.forEach((e) => {
        e.style.display = 'none'
    })
    itemEditor.style.display = 'flex'
    containerMain.firstElementChild.style.display = 'none'
    containerEditText.style.display = 'block'
    editText.value = containerMain.firstElementChild.innerHTML
}
//------------------------------------------------------------------------------------
// Зберігання даних з текстового поля
save.onclick = () => {
    item.forEach((e) => {
        e.style.display = 'flex'
    })
    itemEditor.style.display = 'none'
    signIn.style.display = 'none'
    containerMain.firstElementChild.style.display = 'block'
    containerEditText.style.display = 'none'
    containerMain.firstElementChild.innerHTML = editText.value
}
//------------------------------------------------------------------------------------
// Відкриття блоку з створенням таблиці
table.onclick = () => {
    tableDropdownContent.style.display = 'block'
    document.body.children[0].firstElementChild.style.opacity = '0.3'
}
//------------------------------------------------------------------------------------
// Функція, яка створює таблицю і обирає параметри для неї
tableCreateButton.onclick = ()=> {
    if ( testCountTr.test(countTr.value) && testCountTd.test(countTd.value) && testWidthTd.test(widthTd.value) && testHeightTd.test(heightTd.value) && testWidthBorder.test(widthBorder.value) && testStyleBorder.test(styleBorder.value) && testColorBorder.test(colorBorder.value) ) {
        let table = document.createElement('table')
            for (i = 0; i < countTr.value; i++) {
                tr = document.createElement('tr')
                table.append(tr)
                for (j = 0; j < countTd.value; j++) {
                    td = document.createElement('td')
                    tr.append(td)
                    td.append(`TD`)
                    td.style.width = `${widthTd.value}px`
                    td.style.height = `${heightTd.value}px`
                    td.style.border = `${widthBorder.value}px ${styleBorder.value} ${colorBorder.value}`
                } 
            }
        editText.value += table.outerHTML
        invalidDisplayOff()
    }       
    if (testCountTr.test(countTr.value)) {
        countTr.style.borderColor = '#676969'
    }
    if (testCountTd.test(countTd.value)) {
        countTd.style.borderColor = '#676969'
    }
    if (testWidthTd.test(widthTd.value)) {
        widthTd.style.borderColor = '#676969'
    }
    if (testHeightTd.test(heightTd.value)) {
        heightTd.style.borderColor = '#676969'
    }
    if (testWidthBorder.test(widthBorder.value)) {
        widthBorder.style.borderColor = '#676969'
    }
    if (testStyleBorder.test(styleBorder.value)) {
        styleBorder.style.borderColor = '#676969'
    }
    if (testColorBorder.test(colorBorder.value)) {
        colorBorder.style.borderColor = '#676969'
    }
        if (testCountTr.test(countTr.value) == false) {
            countTr.style.border = '3px solid #fa00008a'
            invalidDisplayOn()
        }
        if (testCountTd.test(countTd.value) == false) {
            countTd.style.border = '3px solid #fa00008a'
            invalidDisplayOn()
        } 
        if (testWidthTd.test(widthTd.value) == false) {
            widthTd.style.border = '3px solid #fa00008a'
            invalidDisplayOn()
        } 
        if (testHeightTd.test(heightTd.value) == false) {
            heightTd.style.border = '3px solid #fa00008a'
            invalidDisplayOn()
        } 
        if (testWidthBorder.test(widthBorder.value) == false) {
            widthBorder.style.border = '3px solid #fa00008a'
            invalidDisplayOn()
        } 
        if (testStyleBorder.test(styleBorder.value) == false) {
            styleBorder.style.border = '3px solid #fa00008a'
            invalidDisplayOn()
        } 
        if (testColorBorder.test(colorBorder.value) == false) {
            colorBorder.style.border = '3px solid #fa00008a'
            invalidDisplayOn()
        }  
} 
//------------------------------------------------------------------------------------
// Кнопка Reset, очищує всі поля
resetButton.forEach((e) => {
    e.addEventListener('click', () => {
        countTr.value = ''
        countTd.value = ''
        widthTd.value = ''
        heightTd.value = ''
        widthBorder.value = ''
        olCountLi.value = ''
        ulCountLi.value = ''
        olTypeMark.value = 'choose Ol type mark'
        ulTypeMark.value = 'choose Ul type mark'
        styleBorder.value = 'choose style'
        colorBorder.value = 'choose color'
        countTr.style.borderColor = '#676969'
        countTd.style.borderColor = '#676969'
        widthTd.style.borderColor = '#676969'
        heightTd.style.borderColor = '#676969'
        widthBorder.style.borderColor = '#676969'
        styleBorder.style.borderColor = '#676969'
        colorBorder.style.borderColor = '#676969'
        olCountLi.style.borderColor = '#676969'
        ulCountLi.style.borderColor = '#676969'
        olTypeMark.style.borderColor = '#676969'
        ulTypeMark.style.borderColor = '#676969'
        invalidDisplayOff()
    })
})
//------------------------------------------------------------------------------------
// Відкриття вікна створення списку OL
numList.onclick = () => {
    olListDropdownContent.style.display = 'block'
    document.body.children[0].firstElementChild.style.opacity = '0.3'
}
//------------------------------------------------------------------------------------
// Функція, яка створює список OL і обирає параметри для нього
olCreateButton.onclick = () => {
    if (testCountLi.test(olCountLi.value) && testOlTypeMark.test(olTypeMark.value)) {
        let ol = document.createElement('ol')
        ol.type = olTypeMark.value
        for ( i = 1; i <= olCountLi.value; i++) {
            let li = document.createElement('li')
            li.append(`item ${i}`)
            ol.append(li)
        }
        editText.value += ol.outerHTML
        invalidDisplayOff()
    }       
    if (testCountLi.test(olCountLi.value)) {
        olCountLi.style.borderColor = '#676969'
    }
    if (testOlTypeMark.test(olTypeMark.value)) {
        olTypeMark.style.borderColor = '#676969'
    } 
        if (testCountLi.test(olCountLi.value) == false) {
            olCountLi.style.border = '3px solid #fa00008a'
            invalidDisplayOn()
        }
        if (testOlTypeMark.test(olTypeMark.value) == false) {
            olTypeMark.style.border = '3px solid #fa00008a'
            invalidDisplayOn()
        } 
}
//------------------------------------------------------------------------------------
// Відкриття вікна створення списку UL
markList.onclick = () => {
    ulListDropdownContent.style.display = 'block'
    document.body.children[0].firstElementChild.style.opacity = '0.3'
}
//------------------------------------------------------------------------------------
// Функція, яка створює список UL і обирає параметри для нього
ulCreateButton.onclick = () => {
    if (testCountLi.test(ulCountLi.value) && testUlTypeMark.test(ulTypeMark.value)) {
        let ul = document.createElement('ul')
        ul.style.listStyle = ulTypeMark.value
        for ( i = 1; i <= ulCountLi.value; i++) {
            let li = document.createElement('li')
            li.append(`item ${i}`)
            ul.append(li)
        }
        editText.value += ul.outerHTML
        invalidDisplayOff()
    }       
    if (testCountLi.test(ulCountLi.value)) {
        ulCountLi.style.borderColor = '#676969'
    }
    if (testUlTypeMark.test(ulTypeMark.value)) {
        ulTypeMark.style.borderColor = '#676969'
    }
        if (testCountLi.test(ulCountLi.value) == false) {
            ulCountLi.style.border = '3px solid #fa00008a'
            invalidDisplayOn()
        }
        if (testUlTypeMark.test(ulTypeMark.value) == false) {
            ulTypeMark.style.border = '3px solid #fa00008a'
            invalidDisplayOn()
        } 
}
function invalidDisplayOn () {
    invalid.forEach((e) => {
        e.style.display = 'inline-block'
    }) 
}
function invalidDisplayOff () {
    invalid.forEach((e) => {
        e.style.display = 'none'
    }) 
}