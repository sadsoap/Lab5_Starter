// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //Initialize items to js
  let hornSelect = document.getElementById("horn-select");
  let hornImage = document.querySelector("img[src='assets/images/no-image.png']");

  let volSlide = document.querySelector("input[name='volume']");
  let volIco = document.querySelector("img[src='assets/icons/volume-level-2.svg']");
  
  let audioFile = document.querySelector("audio[class='hidden']")
  let playBtn = document.querySelector("button");

  let confetti = new JSConfetti();
  let consent = 1;



  //DROP DOWN
  // Changes on select menu correlate to values
  hornSelect.addEventListener("change", (event) => {

  //change image
   hornImage.src = 'assets/images/' + `${event.target.value}` + '.svg';
   //change audio
   audioFile.src = 'assets/audio/' + `${event.target.value}` + '.mp3';

   // confirm "consent" for confetti
   if (`${event.target.value}`.localeCompare('party-horn') ==0 ){
    consent = 0;
   }else{
    consent = 1;
   }

  });



  //VOLUME SLIDER
  
  volSlide.addEventListener("change", (event) => {
    
    //at zero, show mute icon
    if ( `${event.target.value}`<=0 ){
      volIco.src = 'assets/icons/volume-level-0.svg';

      // 1<= x < 33, show first volume level
    }else if( (`${event.target.value}` >=1 ) && (`${event.target.value}` <33) ){
      volIco.src = 'assets/icons/volume-level-1.svg';

      // 33 <= x < 67, show second
    }else if( (`${event.target.value}` >=33 ) && (`${event.target.value}` <67) ){
      volIco.src = 'assets/icons/volume-level-2.svg';

      // 67 <= x , show full volume icon
    }else if( (`${event.target.value}` >=67 ) && (`${event.target.value}` <=100) ){
      volIco.src = 'assets/icons/volume-level-3.svg';

      //else, show an error.
    }else{
      console.log('Error: value is out of bounds [0-100]');
    }

    // recalibrate element property for volume
    audioFile.volume = (`${event.target.value}` /100);

  });



  //PLAY BUTTON

  playBtn.addEventListener("click", (event) => {
    //play the audio, no matter the horn type; should correlate with photo
    audioFile.play();

    // if party horn, confetti should shoot.
    if(consent==0){
      confetti.addConfetti();
    }

    
  });

}