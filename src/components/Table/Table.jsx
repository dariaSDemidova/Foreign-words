// import React, { useContext } from 'react';
// import { WordContext } from '../WordContext';
import React from 'react';
import { observer, inject } from 'mobx-react';
import WordsTableHead from '../WordsTableHead/WordsTableHead';
import WordsTableBody from '../WordsTableBody/WordsTableBody';
import Loading from '../Loading/Loading';
// import Form from '../Form/Form';

// function Table() {
//     const { words, loading } = useContext(WordContext); 
const Table = observer(({ wordStore }) => {
    const { words, loading } = wordStore;

    if (loading) {
        return <Loading />; 
    }

    return (
        <div>
            {/* <Form/> */}
            <WordsTableHead />
            {
                words.map((word) => (
                    <WordsTableBody key={word.id} {...word}></WordsTableBody>
                ))
            }
        </div>
    );
});

// export default Table;
export default inject('wordStore')(Table);

