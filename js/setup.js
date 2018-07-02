'use strict';
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)',  'rgb(241, 43, 107)',  'rgb(146, 100, 161)',  'rgb(56, 159, 117)',  'rgb(215, 210, 55)',  'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var wizards = []; 
/**
 * функция генерирует массив объектов типа wizard
 * заполняя случайными данными из массива 
 */
function generateWizards(){
    for (var i = 0; i < 4; i++) {
        var wizard = {
            name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)],
            secondName : WIZARD_SECOND_NAMES[Math.floor(Math.random() * WIZARD_SECOND_NAMES.length)],
            coatColor : COAT_COLORS[Math.floor(Math.random() * COAT_COLORS.length)],
            eyesColor : EYES_COLORS[Math.floor(Math.random() * EYES_COLORS.length)]
        };
        wizards.push(wizard);
    }
};
/**
 * функция создает dom элемент на основе js объекта  
 * @param {*} wizard 
 */
var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.secondName;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    
    return wizardElement;
}
var fillSimilarList = function (){
    generateWizards();
   
    var fragment = document.createDocumentFragment(similarListElement, similarWizardTemplate);

    for (var i = 0; i < wizards.length; i++) {
        fragment.appendChild(renderWizard(wizards[i]));
    }

    similarListElement.appendChild(fragment);
}

// по нажатию на элемент .setup-open удалить класс hidden 

var setup = document.querySelector(' .setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');

var onPopupEscPress = function(evt) {
    if (evt.keyCode === ESC_KEYCODE) {
        closePopup();
    }
};

var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
}

var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
}

setupOpen.addEventListener('click', function(){
    openPopup();
});

setupClose.addEventListener('click', function(){
    closePopup();
});

setupOpen.addEventListener('keydown', function(evt){
    if (evt.keyCode === ENTER_KEYCODE){
        openPopup();
    }
});

setupClose.addEventListener('keydown', function(evt){
    if (evt.keyCode === ESC_KEYCODE){
        closePopup();
    }
});



var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

document.querySelector(' .setup-similar').classList.remove('hidden');
fillSimilarList(similarListElement, similarWizardTemplate);

