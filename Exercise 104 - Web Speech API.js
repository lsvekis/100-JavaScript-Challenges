const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.onresult = event => console.log(event.results[0][0].transcript);
recognition.start();