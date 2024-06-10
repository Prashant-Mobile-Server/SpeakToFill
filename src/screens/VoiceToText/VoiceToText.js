// VoiceToText.js
import React, { useState } from 'react';

const VoiceToText = () => {
    const [transcript, setTranscript] = useState('');

    const startListening = () => {
        const recognition = new window.webkitSpeechRecognition(); // for Chrome
        recognition.onresult = (event) => {
            setTranscript(event.results[0][0].transcript);
        };
        recognition.start();
    };

    return (
        <div>
            <button onClick={startListening}>Start Listening</button>
            <p>{transcript}</p>
        </div>
    );
};

export default VoiceToText;
