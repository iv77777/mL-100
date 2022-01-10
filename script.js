const inputRefueling = document.querySelector('#inputRefueling');

const inputMileage = document.querySelector('#inputMileage');
const inputMileageL = document.querySelector('#inputMileageL');

const inputMpg = document.querySelector('#inputMpg');
const inputMpgL = document.querySelector('#inputMpgL');

const totalЬileage = document.querySelector('#totalЬileage');
const idRefueling = document.querySelector('#idRefueling');

const button = document.querySelector('#button');

let mpgL;
let milesKm;
                                                 
// округление до сотых
var rounded = function (number) {
  return +number.toFixed(2);
}

button.addEventListener('click', function(){
  // вищитуем росход газа на 100 км.
  if (inputRefueling.value > 0 && inputMileage.value > 0){
    milesKm = inputRefueling.value / (inputMileage.value * 1.60934 / 100);
    inputMileageL.value = rounded(milesKm);
  }
 

  // Перещитуем mpg в литры на 100км
  if(inputMpg.value > 0){
   mpgL = (100 * 3.785) / (inputMpg.value * 1.60934);
    inputMpgL.innerHTML = rounded(mpgL);
  }

  // Выводим сколько проехали километров
  if (inputMileage.value > 0){
    totalЬileage.innerHTML = rounded(inputMileage.value * 1.60934);
  }

  // Вищитуем разницу росхода газа от бензина
  if (inputMpg.value && inputMileageL.value){
    let refueling = milesKm - mpgL;
    idRefueling.innerHTML = rounded(refueling);
  }

 


  // ********************<< localStorage >>****************

  if (inputMileageL.value){
    let usObjectMile = [{ valueKm: '' }];

    usObjectMile[0].valueKm = inputMileageL.value;

    // переобразовуем масив valueKmObject в строку и записываем в valueKmObjectText
    let valueKmObjectText = JSON.stringify(usObjectMile);
    // добавляем valueKmObjectText в localStorage
    localStorage.setItem("usObjectMile", valueKmObjectText);
  }
 
// ********************<< // localStorage >>***************

});

