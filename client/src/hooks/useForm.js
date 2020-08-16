// write your custom hook here to control your checkout form

import { useState } from "react"



export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const handleChanges = e => {
        console.log('e', e.target.name);
        setValue({ ...value, [e.target.name]: e.target.value });
    };

    console.log(value);
    return [value, setValue, handleChanges];
}
