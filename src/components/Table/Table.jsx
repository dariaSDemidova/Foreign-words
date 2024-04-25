// import React, { useContext } from 'react';
// import { WordContext } from '../WordContext';
import React, {useEffect}  from 'react';
import { observer, inject } from 'mobx-react';
import WordsTableHead from '../WordsTableHead/WordsTableHead';
import WordsTableBody from '../WordsTableBody/WordsTableBody';
import Loading from '../Loading/Loading';
import Form from '../Form/Form';


// function Table() {
//     const { words, loading } = useContext(WordContext); 
const Table = ({ words, loading }) => {

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
};

// export default Table;
export default inject(({wordStore}) => {
const {words, fetchWords, loading} = wordStore;

useEffect(() => {
    fetchWords();
}, []);

return {
    words,
    loading
};
})(observer(Table));