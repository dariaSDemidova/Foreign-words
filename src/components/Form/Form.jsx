import React, { useContext, useState } from 'react';
import { WordContext } from "../WordContext";
import styles from "./Form.module.css"

function Form () {
    const { addWord } = useContext(WordContext);
    
    const [isPressed, setPressed] = useState(false);
    const [value, setValue] = useState({
        english: '',
        transcription: '',
        russian: ''
    });

    const [errors, setErrors] = useState({
        english: false,
        transcription: false,
        russian: false,
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setValue((prevValue) => {
            return { ...prevValue, [name]: value };
        });
        setErrors({
            ...errors,
            [event.target.name]: event.target.value.trim() === "" ? "Field cannot be empty" : false,
        });
    };

    const handleAdd = (e) => {
        e.preventDefault(); 
            addWord(value);
            setValue({ english: '', transcription: '', russian: '' });
            setPressed(!isPressed); 
    };

    const isBtnDisabled = Object.values(errors).some((elem) => elem);

    return (
        <form className={styles.form}>
            <td>
                <input
                    type="text"
                    onChange={handleChange}
                    value={value.english}
                    name="english"
                    placeholder="слово"
                    className={errors.english ? styles.error_border : ""}
                />
            </td>
            <td>
                <input
                    type="text"
                    onChange={handleChange}
                    value={value.transcription}
                    name="transcription"
                    placeholder="транскрипция"
                    className={errors.transcription ? styles.error_border : ""}
                />
            </td>
            <td>
                <input
                    type="text"
                    onChange={handleChange}
                    value={value.russian}
                    name="russian"
                    placeholder="перевод"
                    className={errors.russian ? styles.error_border : ""}
                />
            </td>
            <td>
                <button className={styles.saveButton} onClick={handleAdd} disabled={isBtnDisabled}>Save</button>
            </td>
        </form>
    );
};

export default Form;