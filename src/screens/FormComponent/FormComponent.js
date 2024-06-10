import React, { useState, useEffect } from 'react';
import './FormComponent.css';
import { FORM_CLASS_NAME, getEntityArrayFromForm } from '../../constants';
import { form } from './FormUI'

const FormComponent = ({ sendEntityToParent, results }) => {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        let formElement = document.getElementsByClassName(FORM_CLASS_NAME)[0];
        const entity = getEntityArrayFromForm(formElement);
        sendEntityToParent(entity);
    }, [])

    useEffect(() => {
        if (results) {
            fillForm(results);
        }
    }, [results]);

    const fillForm = (results) => {
        for (const key in results) {
            const element = document.getElementsByName(key)[0];
            if (element && results[key]) {
                element.value = results[key] || '';
            }
        }
    }

    return (
        <div>
            {form}
        </div>
    );
};

export default FormComponent;
