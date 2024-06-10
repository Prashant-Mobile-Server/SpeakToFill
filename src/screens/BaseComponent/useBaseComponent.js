import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY, API_HOST, API_URL, DEFAULT_TEXT, DEBUG } from '../../constants';

const useBaseComponent = () => {
    const [text, setText] = useState('');
    const [entities, setEntities] = useState('');
    const [apiResponse, setApiResponse] = useState('');
    const [isVoiceActive, setVoiceActive] = useState(false);

    // useEffect(() => {
    //     // console.log("Set Text---- ", text)
    //     // handleButtonClick();
    // }, [text])

    const debounce = (func, delay) => {
        let timeoutId;
        return function (...args) {
            const context = this;
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(context, args), delay);
        };
    };

    const handleTextChange = debounce((text) => {
        setText(text);
    }, 60 * 1000); // Adjust the delay time as needed (in milliseconds)

    const setEntity = (entities) => {
        setEntities(entities);
    };


    const handleButtonClick = async (transcript) => {
        const dataToUse = transcript;

        const options = {
            method: 'POST',
            url: API_URL,
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': API_HOST
            },
            data: {
                text: dataToUse,
                entities: entities
            }
        };

        if (DEBUG) console.log("Request-->", options)

        try {
            const response = await axios.request(options);
            if (DEBUG) console.log(response.data);
            setApiResponse(response.data)
        } catch (error) {
            console.error(error);
        }
    };

    const startListening = () => {
        const recognition = new window.webkitSpeechRecognition(); // for Chrome
        setVoiceActive(true)
        recognition.onresult = (event) => {
            const newTranscript = event.results[0][0].transcript;
            if (DEBUG) console.log("Voice to  text--> ", newTranscript)
            setText(newTranscript);
            setVoiceActive(false)
            handleButtonClick(newTranscript)
        };
        recognition.onend = () => {
            setVoiceActive(false)
        };
        recognition.start();
    };

    return {
        text,
        entities,
        setText,
        setEntities,
        handleButtonClick,
        setEntity,
        startListening,
        handleTextChange,
        apiResponse,
        isVoiceActive
    };
};

export default useBaseComponent;
