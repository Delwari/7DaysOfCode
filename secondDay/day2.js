const homeSection = document.getElementById('home-section');
const checkSection = document.getElementById('check-section');

const getName = document.getElementById('name-user');
const getAge = document.getElementById('age-user');
const getLang = document.getElementById('lang-program-user');

const FirstBtn = document.getElementById('submit-info');
const SecondBtn = document.getElementById('submit-checkOpt');

const firstMsg = document.getElementById('frt-msg');
const SecondMsg = document.getElementById('scd__msg2');

const checkSpan = document.getElementById('check-span');

const radioY = document.getElementById('radio-y');
const radioN = document.getElementById('radio-n');

function getElementHome() {

    if (getName.value == "" || getAge.value == '' || getAge.value < 0 || getLang.value == "") {

        getName.style.backgroundColor = '#FFFFFF';
        getAge.style.backgroundColor = '#FFFFFF';
        getLang.style.backgroundColor = '#FFFFFF';
        alert('Preencha todos os campos!');
        if (getName.value == "") {
            getName.style.backgroundColor = '#FBEAFF';
        }
        if (getAge.value == "") {
            getAge.style.backgroundColor = '#FBEAFF';
        }
        if (getLang.value == "") {
            getLang.style.backgroundColor = '#FBEAFF';
        }

    } else {

        const name = getName.value;
        const age = getAge.value;
        const lang = getLang.value;

        homeSection.classList.add('hide');
        checkSection.classList.remove('hide');

        firstMsg.innerHTML = `Olá ${name}, você tem ${age} anos e já está aprendendo ${lang}!`;
        checkSpan.innerHTML = lang;
    }
}

function getRadioCheck() {
    if (radioY.checked) {
        SecondMsg.innerHTML = "Muito bom! Continue estudando e você terá muito sucesso."
        SecondBtn.style.marginTop = '26%';
    } else {
        SecondMsg.innerHTML = "Ahh que pena... Já tentou aprender outras linguagens?"
    }
}
