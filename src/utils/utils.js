export const updateObejct = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
};