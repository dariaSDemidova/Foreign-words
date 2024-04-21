import './App.css';
// import WordProvider from './components/WordContext';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import CardWrapper from './components/CardWrapper/CardWrapper';
import Missing from './components/Missing/Missing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WordStore from './components/WordStore'; 
import { Provider } from 'mobx-react';


const stores = {
  wordStore: new WordStore()
};

function App() {
  return (
    <Provider {...stores}>
    {/* <WordProvider> */}
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Table/>}/>
          <Route path="/card" element={<CardWrapper/>}/>
          <Route path="*" element={<Missing/>}/>
        </Routes>
      </div>
    </Router>
    {/* </WordProvider> */}
    </Provider>
  );
}

export default App;