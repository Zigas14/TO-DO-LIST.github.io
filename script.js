// memunculkan elemen text area 
const fromText = document.querySelector('.form-text');
const b1 = document.querySelector('.b1');
const textArea = document.querySelector('.text-area');
const b2 = document.querySelector('.btn-text-area');
const textList = document.querySelector('.text-list');
const penampungInput = document.querySelector('.penampung-input');

b1.addEventListener("click", function(){
    fromText.classList.toggle('d-none');
});
// untuk mereset tulisan di text area
b2.addEventListener("click", function(){
    penampungInput.classList.toggle('d-none');
    var textAreaValue = textArea.value;
    textList.innerHTML = textAreaValue;
    textArea.value = '';
});
