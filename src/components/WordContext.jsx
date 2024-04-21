// import React, { createContext, useState, useEffect } from 'react';

// export const WordContext = createContext();

// const WordProvider = ({ children }) => {
//     const [words, setWords] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchWords = async () => {
//             try {
//                 const response = await fetch('http://itgirlschool.justmakeit.ru/api/words'); 
//                 if (!response.ok) {
//                     throw new Error('Ошибка загрузки данных');
//                 }
//                 const data = await response.json();
//                 setWords(data);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchWords();
//     }, []);

//   const updateWord = async (id, updatedWord) => {
//     const body = {
//     id: id,
//     english: updatedWord.english,
//     transcription: updatedWord.transcription,
//     russian: updatedWord.russian,
//     tags: "",
//     tags_json: "[\"\"]",
//     }

//     try {
//       const response = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/update`, {
//         method: 'POST',
//         headers: {
//         'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body),
//       });

//       if (!response.ok) {
//           throw new Error('Ошибка обновления слова');
//       }

//       const updatedWords = words.map((word) =>
//       word.id === id ? updatedWord : word
//       );
//       setWords(updatedWords);
//     } catch (err) {
//       setError(err.message);
//     }
//   };
  
//   const deleteWord = async (id) => {
//     try {
//       const response = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
//         method: 'POST',
//       });

//       if (!response.ok) {
//         throw new Error('Ошибка удаления слова');
//       }

//       const updatedWords = words.filter((word) => word.id !== id);
//       setWords(updatedWords);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const addWord = async (newWord) => {
//     try {
//       const response = await fetch('http://itgirlschool.justmakeit.ru/api/words/add', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newWord),
//       });

//       if (!response.ok) {
//         throw new Error('Ошибка добавления слова');
//       }

//       const data = await response.json();
//       setWords([...words, data]);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//     return (
//         <WordContext.Provider value={{ words, loading, error, updateWord, deleteWord, addWord }}>
//             {children}
//         </WordContext.Provider>
//     );
// };

// export default WordProvider;