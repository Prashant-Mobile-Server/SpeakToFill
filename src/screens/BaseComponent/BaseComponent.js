import React from 'react';
import useBaseComponent from './useBaseComponent';
import './BaseComponent.css';
import FormComponent from '../FormComponent/FormComponent';

const BaseComponent = () => {
    const {
        text,
        entities,
        setEntities,
        handleTextChange,
        handleButtonClick,
        startListening,
        setEntity,
        apiResponse,
        isVoiceActive
    } = useBaseComponent();

    const handleEntityFromForm = (data) => {
        setEntity(data)
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>SpeakToFill</h1>
            </header>
            <main>
                <div className="container">
                    <button
                        onClick={startListening}
                        style={{ backgroundColor: isVoiceActive ? 'green' : '' }}
                    >
                        {isVoiceActive ? 'Listening ...' : 'Start Listening'}
                    </button>
                    {/* <button onClick={handleButtonClick}>Fill the form</button> */}
                    {/* <div className="input-container">
                        <textarea
                            type="text"
                            value={text}
                            onChange={(e) => handleTextChange(e.target.value)}
                            placeholder="Enter text"
                        />
                    </div>
                    <div className="input-container">
                        <textarea
                            type="text"
                            value={JSON.stringify(entities, null, 2)}
                            onChange={(e) => setEntities(JSON.parse(e.target.value))}
                            placeholder="Enter entities JSON"
                        />
                    </div> */}
                    <FormComponent sendEntityToParent={handleEntityFromForm} results={apiResponse.results} ></FormComponent>
                </div>
            </main>
        </div>
    );
};

export default BaseComponent;
