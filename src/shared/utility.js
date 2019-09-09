export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const checkValidity = (value, rules) => {
    let isValid = true;

    if(rules && rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if(rules && rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
    }

    if(rules && rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
}
