//Creating a start button to start game
let startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click',()=>{
   startBtn.style.display='none';
   createButtons();
   showWord();
})

//Adding functionality to dark mode button
let darkMode = document.getElementById('darkMode');
darkMode.addEventListener('click',()=>{
   let body = document.querySelector('body');
   console.log(body);
   body.style.backgroundColor="#353b40"
   let navbar= document.querySelector('.navbar');
   console.log(navbar);
})
//Adding functionality to light mode button
let lightMode = document.getElementById('lightMode');
lightMode.addEventListener('click',()=>{
   let body = document.querySelector('body');
   console.log(body);
   body.style.backgroundColor="white"

   let navbar= document.querySelector('.navbar');
   console.log(navbar);
})

//Creating a word list
const words =['apple','banana','cider','dog','elephant','fish','goat','watermelon', 'honeydew', 'orange', 'pineapple']

//Choosing a random word from the wordlist
let randomNo = Math.random();

// AS WE KNOW THAT THE NO CAN GO MAXIMUM TILL THE LENGTH OF ARRAY
randomNo =  Math.floor(0+words.length*Math.random());

//Selecting a random word from the array using the randomNo
let randomWord = words[randomNo];
console.log(randomWord);

//Storing the randomWord into string
let arr=[];
let recordIndexes=[];
for (let index = 0; index < randomWord.length; index++) {
   let finalRandomword ;
   let zeroToOne= Math.round(Math.random());
   if(zeroToOne==0){
      finalRandomword=`_`;
      recordIndexes.push(index)
   }
   else{
      finalRandomword= randomWord[index];
   }
  arr.push(finalRandomword)
}
console.log(arr)

//Defining a function showWord
function showWord() {
   for(i=0;i<arr.length;i++){
   let showBtn = document.createElement('button');
   let showBtnTextNode = document.createTextNode(arr[i]);
   showBtn.setAttribute("class",'showBtn')
   showBtn.appendChild(showBtnTextNode);
   let showingContainer = document.querySelector('.showingContainer');
   showingContainer.append(showBtn);
   }
}

//Creating Buttons to take input
function createButtons() {
for (let i = 65; i < 91; i++) {
   let myBtn=document.createElement('button');
   myBtn.setAttribute("class","myBtn");
   myBtn.setAttribute('onClick','reply_click(this.id)');
   myBtn.setAttribute("id",`${i}`);
   btn = String.fromCharCode(i);
   let myBtnTextNode = document.createTextNode(btn);
   myBtn.appendChild(myBtnTextNode);
   let keyboard = document.getElementById('keyboard');
   keyboard.append(myBtn);
   myBtn.addEventListener('click',()=>{
      myBtn.style.backgroundColor='rgb(78, 76, 73)';
      myBtn.style.color="white";

   })
}
}
let Mystorage =[];
function reply_click(clicked_id)
  {
      Mystorage.push(parseInt(clicked_id));
  }
//Searching for _
console.log(recordIndexes);

//Storing The clicks
   console.log(Mystorage);


   let randomWordArr=[];
   for (let index = 0; index < recordIndexes.length; index++) {
      randomWordArr.push(randomWord[recordIndexes[index]].charCodeAt()-32);
   }
   // console.log(randomWord[recordIndexes])
      console.log(randomWordArr)
     
      //Defining function
      function finalCall(){
         if(Mystorage.length === randomWordArr.length && Mystorage.every(function(value, index) { return value === randomWordArr[index]})){
         console.log('You won')
         let loadContainer = document.querySelector('.loadContainer');
         loadContainer.innerHTML=`<div class="alert alert-info" role="alert">
         You Have Won The Game
       </div>`
         console.log(Mystorage);
         console.log(randomWordArr)
         clearInterval(myFinal)
      }
      else if(Mystorage.length > randomWordArr.length){
         let loadContainer = document.querySelector('.loadContainer');
         loadContainer.innerHTML=`<div class="alert alert-danger" role="alert">
         Sorry You have lost the game <button id="retry" onClick=reload(this.id)>Retry</button>
       </div>`
       clearInterval(myFinal)
      }
   }
function reload(){
   location.reload();
}
   
let myFinal = setInterval(finalCall,1000)