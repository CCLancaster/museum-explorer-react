import { useState } from 'react';

const useAddMuseum = (formSubmitCB) => {
    const [inputs, setInputs] = useState({
        name: '',
        city: '',
        country: '',
        image: ''
    });

    // handle input change & handle submit

    const handleInputChange = e => {
        e.persist();
        setInputs({...inputs, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        formSubmitCB();
    }

    return {
        handleSubmit,
        handleInputChange,
        inputs
    }
}

export {
    useAddMuseum
}