function countLetters() {
    let inputText = document.getElementById('inputText').value;
    let totalLetters = inputText.replace(/[^a-zA-Z]/g, '').length;
    let totalWords = inputText.split(/\s+/).filter(word => word !== '').length;
    let totalSentences = inputText.split(/[.!?]+/).filter(sentence => sentence !== '').length;

    document.getElementById('totalLetters').textContent = totalLetters;
    document.getElementById('totalWords').textContent = totalWords;
    document.getElementById('totalSentences').textContent = totalSentences;
}
