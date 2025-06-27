'use strict'
let btnCheck = document.querySelector('.btn-check');
let btnAgain = document.querySelector('.btn-again');
let secretNum = document.querySelector('.secret-number');
let guess = document.querySelector('.guess');
let highScore = document.querySelector('.high-score');
let score = document.querySelector('.score');
let inputNum = document.querySelector('.textbox');
let displayHidden = document.querySelector('.hidden');
    
/////////////////////application code\\\\\\\\\\\\\\\\\\\\\

class App{
    _randomNumber;
    _userNumber;
    _scoreCount = 20;

    constructor() {
        this._randomNumber= this._getRandomNumer();
        console.log(this._randomNumber);
        btnCheck.addEventListener('click', this._getUserNum.bind(this));
        btnCheck.addEventListener('click', this._checkMatch.bind(this));
        btnAgain.addEventListener('click',this._startAgain.bind(this))
    }
    
    _getRandomNumer() {
        return Math.round(Math.random() * 19) + 1;
    }

    _getUserNum() {
        let userNum = +inputNum.value;
        if (userNum === 0 || '') {
            guess.textContent='☢ No Number'
        }

        this._userNumber = +inputNum.value;
        console.log(this._userNumber);
        
    }

    _checkMatch() {
        if (this._scoreCount > 0) {
            if (this._userNumber < this._randomNumber && this._userNumber>0) {
                guess.textContent='📉 To Low';
            }
            if (this._userNumber > this._randomNumber) {
                guess.textContent='📈 To High';
            }
            if (this._userNumber === this._randomNumber) {
                guess.textContent = '🎉 Correct Number!🎉';
                this.checkHighScore(this._randomNumber);
                document.body.style.backgroundColor = 'rgb(19, 198, 19)';
                secretNum.textContent = 'You Win😎';
                displayHidden.textContent = this._randomNumber;
                
            }
            this._scoreCount--;
            score.textContent = this._scoreCount;
        } else {
            secretNum.textContent = 'You Lost 😐';
            document.body.style.backgroundColor = 'red';
            
        }
    }

    checkHighScore(num) {
        let highNum = +highScore.textContent;
        if (highNum < num) {
            highScore.textContent = num;
        }
    }

    _startAgain() {
        guess.textContent='Start Guessing...';
        score.textContent=20;
        secretNum.textContent='Guess My Number!';
        displayHidden.textContent='?';
        document.body.style.backgroundColor='#333';
        this._randomNumber=Math.round(Math.random()*19)+1;
        inputNum.value = '';
        this._scoreCount = 20;
    }
}
let app1 = new App();
    

//     let randomNumber=Math.round(Math.random()*19)+1;

// let scoreNumb = 20;
//     ///function-1
//     const checkHighScore=function(num){
//         let highNum=+highScore.textContent;
//         if(highNum<num){
//             highScore.textContent=num;
//             console.log('highNum')
//         }
// }
    
// //function--2
//     const checkNumber=function(){
//         let userNum=+inputNum.value;

//         score.textContent=scoreNumb;

//         if(scoreNumb>0){
//             if(userNum<randomNumber){
//             guess.textContent='📉 To Low';
            
//         }
//          if(userNum>randomNumber){
//             guess.textContent='📈 To High';
//         }
//         if(userNum===randomNumber){
//             secretNum.textContent='You Win😎';
//             displayHidden.textContent=randomNumber;
//             guess.textContent='🎉 Correct Number!🎉';
//             document.body.style.backgroundColor='rgb(19, 198, 19)';
//             checkHighScore(randomNumber);
//         }
//         scoreNumb--;
//         }else{
//             secretNum.textContent='You Lost 😐';

//         }
//     }
//     btnCheck.addEventListener('click',checkNumber);
    

//     //function-3
//     const clearFields=function(){
//         guess.textContent='Start Guessing...';
//         score.textContent=0;
//         secretNum.textContent='Guess My Number!';
//         displayHidden.textContent='?';
//         document.body.style.backgroundColor='#333';
//         randomNumber=Math.round(Math.random()*19)+1;
//         inputNum.value='';
//     }
//     btnAgain.addEventListener('click',clearFields);