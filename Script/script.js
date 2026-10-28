let voices = [];
let voiceSelect = document.getElementById("voiceSelect");

function loadVoices() {
    voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = "";

    voices.forEach((voice, i) => {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = voice.name;
        voiceSelect.appendChild(option);
    });
}

speechSynthesis.onvoiceschanged = loadVoices;

function speak() {
    let text = document.getElementById("text").value;

    let speech = new SpeechSynthesisUtterance(text);
    speech.voice = voices[voiceSelect.value];

    speechSynthesis.speak(speech);
}