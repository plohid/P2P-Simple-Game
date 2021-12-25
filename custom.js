(function() {
    //select set winning score 
 const SetWinScoreEle = document.querySelector('#setScrore');
 const formEle = document.querySelector('form');
 const winScoreSetShowEle = document.querySelector('.winScoreSet-Display');
 const resetBtnEle = document.querySelector('#resetBtn');
 
 
     // remember client side js a 2 ta layer thake, 
     // data layer (data track / data store)
     // view layer (DOM)
     const player1BtnEle = document.querySelector('#p1Btn');
     const p1ScoreEle = document.querySelector('.p1Score');
 
     const player2BtnEle = document.querySelector('#p2Btn');
     const p2ScoreEle = document.querySelector('.p2Score');
 
 // data view layer //
 let winScore = 10; 
 let p1Score = 0;
 let p2Score = 0; 
 let chargeTrun = 'player1';
 
 
 winScoreSetShowEle.textContent = winScore;
 p1ScoreEle.textContent = p1Score;
 p2ScoreEle.textContent = p2Score;
 
 function generateRandomNum(max){
     return Math.floor(Math.random() * max + 1) //math.floor targeted number theke 1 kom generate korbe tai result pabar jnno +1 kore dilam
 //floor method numberk akta based number a convert kore. (0-9, 0-1.1,2.2) dosomik number k o based number a niye ase.
 }
 
 formEle.addEventListener('submit', e => {
     
    e.preventDefault() 
     //validation 
    const inputVal = +SetWinScoreEle.value;
    if( inputVal === '' || inputVal <1){
     if(!document.querySelector('.invalid-input')){      
     formEle.insertAdjacentHTML 
     ('beforebegin', 
     '<h4 class="invalid-input">Please insert Valid Number</h4>' );   
     }
    }else{
     if(document.querySelector('.invalid-input')){
         document.querySelector('.invalid-input').remove();
     }
 
     winScore = +SetWinScoreEle.value; 
 
     winScoreSetShowEle.textContent = SetWinScoreEle.value;  
     // clearing input value 
     SetWinScoreEle.value = ''; 
     initializeDefault(); 
 
    }
 
 
 } );
 
 player1BtnEle.addEventListener('click', e=> {
     if(chargeTrun === 'player1'){  
     p1Score = generateRandomNum(winScore);
     p1ScoreEle.textContent = p1Score; 
     chargeTrun = 'player2'; 
     player1BtnEle.setAttribute('disabled', 'disabled') 
     player2BtnEle.removeAttribute('disabled') 
 
         checkWinner();
 
     }
     
 })
 
 function checkWinner(){
 
         const isP1Winner = winScore === p1Score; 
         const isP2Winner = winScore === p2Score; 
         console.log(isP1Winner, isP2Winner);
 
           if(isP1Winner || isP2Winner ){
                 player1BtnEle.setAttribute('disabled', 'disabled') 
                 player2BtnEle.setAttribute('disabled', 'disabled') 
             } // jekono player win hole btn disabled hoye jabe.
 
             displayWinner(isP1Winner, isP2Winner);
 
 }
 function displayWinner(p1WinnerState, p2WinnerState){
     if (p1WinnerState){
         formEle.insertAdjacentHTML('beforebegin', '<h2 class="WinMsg">Player - 1 is Winner <img src="emoji-smile.gif" alt="gif missing"></h2>' );
     } else if(p2WinnerState){
         formEle.insertAdjacentHTML('beforebegin', '<h2 class="WinMsg">Player - 2 is Winner <img src="emoji-smile.gif" alt="gif missing"></h2>' );
 
     }
 
 
 }
 player2BtnEle.addEventListener('click', e=> {
     
     if(chargeTrun === 'player2'){ 
 
         p2Score = generateRandomNum(winScore);
         p2ScoreEle.textContent = p2Score; 
 
         chargeTrun = 'player1'; 
         player2BtnEle.setAttribute('disabled', 'disabled') 
         player1BtnEle.removeAttribute('disabled') 
 
             
     }
 
 })
 
 resetBtnEle.addEventListener('click', e => {
     winScore = 10; 
 
     initializeDefault();
 
 })
 
 function initializeDefault(){
     
     p1Score = 0;
     p2Score = 0; 
     chargeTrun = 'player1';
 
     winScoreSetShowEle.textContent = winScore;
     p1ScoreEle.textContent = p1Score;
     p2ScoreEle.textContent = p2Score;
     player1BtnEle.removeAttribute('disabled')
     player2BtnEle.removeAttribute('disabled')
     //reset winning msg 
     if(document.querySelector('.WinMsg')){
         document.querySelector('.WinMsg').remove();
     }
 }
 
   
})();

//IIFE function body

// (function () {
//     statements
//   })();

