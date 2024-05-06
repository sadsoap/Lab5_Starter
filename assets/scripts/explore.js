// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  
  //initialize elements from html into js
  const faceImg = document.querySelector("img[src='assets/images/smiling.png']");
  const textBox = document.getElementById("text-to-speak");
  const voiceSel = document.getElementById("voice-select");
  const talkButton = document.querySelector("button");
  const synthesizer = window.speechSynthesis;

  console.log('test');

  //Load voices and populate dropdown and select
  window.addEventListener("load", (event) => {
    
    // code to run when the event is triggered
   const voices = speechSynthesis.getVoices();

    voices.forEach((element)=>{

      const option = document.createElement("option");
      option.textContent = element.name;
      voiceSel.appendChild(option);
  
    });
  });

  //input for textbox
  textBox.addEventListener("input", (event) => {
    const text = event.target.value;
  });

  //button click, play respective voice
  talkButton.addEventListener("click", (event) => {
    const selectedVoice = voiceSel.value;
    const textToSpeak = textBox.value;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    
    const voices = speechSynthesis.getVoices();
    const selectedVoiceObject = voices.find(voice => voice.name === selectedVoice);
    utterance.voice = selectedVoiceObject;
    
    utterance.onstart = () => {
      faceImg.src = "assets/images/smiling-open.png";
    };
    utterance.onend = () => {
      faceImg.src = "assets/images/smiling.png";
    };
    speechSynthesis.speak(utterance);
  });

}