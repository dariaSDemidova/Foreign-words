import React, { useState } from 'react';
import { observer, inject } from 'mobx-react';
import styles from "./Form.module.css"

const Form = ({addWord}) => {
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

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValue((word) => {
            return { ...word, [name]: value };
        })
        setErrors({
            ...errors,
            [e.target.name]:
            e.target.value.trim() === "" ? "Field cannot be empty" : false});
    }

    const handleAdd = (e) => {
        e.preventDefault()
        addWord(value);
        setValue({ english: '', transcription: '', russian: '' });
        setErrors({
            english: false,
            transcription: false,
            russian: false,
        });
    }

    const isBtnDisabled = Object.values(errors).some((elem) => elem);

    return (
        <form className={styles.form} onSubmit={handleAdd}>
            <td>
                <input
                    type="text"
                    value={value.english}
                    name="english"
                    placeholder="слово"
                    className={errors.english ? styles.error_border : ""}
                    onChange={handleChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={value.transcription}
                    name="transcription"
                    placeholder="транскрипция"
                    className={errors.transcription ? styles.error_border : ""}
                    onChange={handleChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={value.russian}
                    name="russian"
                    placeholder="перевод"
                    className={errors.russian ? styles.error_border : ""}
                    onChange={handleChange}
                />
            </td>
            <td>
                <button type="submit" className={styles.saveButton} disabled={isBtnDisabled}>Save</button>
            </td>
        </form>
    );
};

export default inject(({wordStore}) => {
    const {addWord} = wordStore;
    
    return {
    addWord
    };
    })(observer(Form));
