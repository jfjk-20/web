function readText() {
  const text = document.getElementById('text-content').innerText;
  const speech = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(speech);
}
