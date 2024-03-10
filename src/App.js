import './App.css';
import words from './store/store';
import Header from './components/Header/Header';
import WordsTableHead from './components/WordsTableHead/WordsTableHead';
import WordsTableBody from './components/WordsTableBody/WordsTableBody';
import './components/WordsTableHead/WordsTableHead.scss';
import './components/WordsTableBody/WordsTableBody.scss';
import Cards from './components/Cards/Cards';
import CardWrapper from './components/CardWrapper/CardWrapper';



function App() {
  return (
    <div className="App">
      <Header />
      <WordsTableHead />
      {
        words.map((word, index) =>
          <WordsTableBody key={index} {...word}></WordsTableBody>
        )
      }
      <Cards />
      <CardWrapper/>
    </div>

  );
}

export default App;
