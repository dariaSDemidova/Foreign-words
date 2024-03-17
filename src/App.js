import './App.css';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import './components/WordsTableHead/WordsTableHead.scss';
import './components/WordsTableBody/WordsTableBody.scss';
import Cards from './components/Cards/Cards';
import CardWrapper from './components/CardWrapper/CardWrapper';
import Missing from './components/Missing/Missing';
import './components/Missing/Missing.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Table/>}/>
          <Route path="/card" element={<CardWrapper/>}/>
          <Route path="/cards" element={<Cards/>}/>
          <Route path="*" element={<Missing/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
