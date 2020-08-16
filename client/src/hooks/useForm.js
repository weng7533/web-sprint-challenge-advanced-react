// write your custom hook here to control your checkout form

import { useState } from "react"



export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const handleChanges = e => {
        e.preventDefault();

        setValue({ ...value, [e.target.name]: e.target.value });
    };


    return [value, setValue, handleChanges];
}
