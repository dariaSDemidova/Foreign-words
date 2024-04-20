import React, { useContext } from 'react';
import { WordContext } from '../WordContext';
import WordsTableHead from '../WordsTableHead/WordsTableHead';
import WordsTableBody from '../WordsTableBody/WordsTableBody';
import Loading from '../Loading/Loading';
import Form from '../Form/Form';

function Table() {
    const { words, loading } = useContext(WordContext); 

    if (loading) {
        return <Loading />; 
    }

    return (
        <div>
            <Form/>
            <WordsTableHead />
            {
                words.map((word) => (
                    <WordsTableBody key={word.id} {...word}></WordsTableBody>
                ))
            }
        </div>
    );
}

export default Table;

