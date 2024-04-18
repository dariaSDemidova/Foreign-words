import './App.css';
import WordProvider from './components//WordContext';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import CardWrapper from './components/CardWrapper/CardWrapper';
import Missing from './components/Missing/Missing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <WordProvider>
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
    </WordProvider>
  );
}

export default App;