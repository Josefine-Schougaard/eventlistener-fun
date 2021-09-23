
let questionNumber = 1;

const nextQuestion = function(){
    let currentQuestion = document.querySelector('.quest'+questionNumber);
    currentQuestion.classList.add('d-none');
    questionNumber++;
    let nextQuest = document.querySelector('.quest'+questionNumber);
    nextQuest.classList.remove('d-none');
};

document.querySelectorAll('.next').forEach((btn) =>{
    btn.addEventListener('click', nextQuestion);
});


let body = document.querySelector('body');
let inputElement = document.querySelector('#rainbow');

inputElement.addEventListener('keydown', ()=>{
    if(inputElement.value.length <= 1){
        body.classList.add('red');
    }
    else if(inputElement.value.length <= 2){
        body.classList.remove('red');
        body.classList.add('orange');
    }
    else if(inputElement.value.length <= 3){
        body.classList.remove('orange');
        body.classList.add('yellow');
    }
    else if(inputElement.value.length <= 4){
        body.classList.remove('yellow');
        body.classList.add('green');
    }
    else if(inputElement.value.length <= 5){
        body.classList.remove('green');
        body.classList.add('blue');
    }
    else if(inputElement.value.length <= 6){
        body.classList.remove('blue');
        body.classList.add('purple');
    }
    else if(inputElement.value.length <= 7){
        body.classList.remove('purple');
        body.classList.add('pink');
    }
    else{
        body.classList.remove('pink');
    }
});

let surprise = document.querySelector('#surprise');
surprise.addEventListener('input',()=>{
    alert('How dare you change the input text!?');
});

let findHolger = document.querySelector('.Holger');
findHolger.addEventListener('mouseover', ()=>{
    let notHolger = document.querySelector('.notHolger');
    notHolger.remove();
    findHolger.innerHTML = '<img src="holger.png" alt="Holger waving" class="isHolger">';
});

findHolger.addEventListener('mouseout', ()=>{
    let isHolger = document.querySelector('.isHolger');
    isHolger.remove();
    findHolger.innerHTML = '<img src="personoutline.png" alt="Silhouet of a person" class="notHolger">';
})

let alfabet = {
    bogstav: ['A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','Æ','Ø','Å'],
    bogstavIndex: 0,
    listAlfabet: function(){
        let bogstavet = this.bogstav[this.bogstavIndex];
        this.bogstavIndex++;
        let blackBoard = document.querySelector('#blackboard');
        blackBoard.innerHTML = '<p class="writing">'+bogstavet+'</p>';
    }
}

document.addEventListener('dragstart',(event)=>{
    event.dataTransfer.setData('Text', event.target.id);
    console.log('dragstart');
});

document.addEventListener('drag', (event)=>{
    event.preventDefault();
    console.log('drag');

});

document.addEventListener("dragover", (event)=> {
    event.preventDefault();
  });

document.addEventListener('drop',function(event){
    console.log('drop');
    event.preventDefault();
    if(event.target.className == 'droptarget'){
        let data = event.dataTransfer.getData('Text');
        event.target.appendChild(document.querySelector('#'+data));
        alfabet.listAlfabet();

    }
});

let rickTune = new Audio('rick.mp3');

let rickButton = document.querySelector('.rick');
rickButton.addEventListener('mousedown',()=>{
    rickTune.play();
})