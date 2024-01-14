import './App.css';
import DescrCard from './components/DescrCard';
import Card from './components/WordCard';
import Inputs from './components/Inputs';
import './styles/WordCard.css'
import './styles/DescrCard.css'
import './styles/Inputs.css'


const words = [
  { "id": "15104", "english": "dog", "transcription": "[dɒg]", "russian": "собака", "category": "животныецц", "tags_json": "[\"u0436u0438u0432u043eu0442u043du044bu0435u0446u0446\"]" },
  { "id": "15105", "english": "ocean", "transcription": "[əʊʃn]", "russian": "океан", "tags": "стихия", "tags_json": "[\"u0441u0442u0438u0445u0438u044f\"]" },
  { "id": "15111", "english": "butterfly", "transcription": "[ˈbʌtəflaɪ]", "russian": "бабочка", "tags": "насекомые", "tags_json": "[\"u043du0430u0441u0435u043au043eu043cu044bu0435\"]" },
  { "id": "15114", "english": "offspring", "transcription": "[ˈɒfsprɪŋ]", "russian": "потомство", "tags": "животные", "tags_json": "[\"u0436u0438u0432u043eu0442u043du044bu0435\"]" },
  { "id": "15115", "english": "disrespectful", "transcription": "[ˌdɪsrɪsˈpɛktfʊl]", "russian": "неуважительный", "tags": "прилагательное", "tags_json": "[\"u043fu0440u0438u043bu0430u0433u0430u0442u0435u043bu044cu043du043eu0435\"]" },
  { "id": "15116", "english": "to conspire", "transcription": "[kənˈspaɪə]", "russian": "cговориться", "tags": "глагол", "tags_json": "[\"u0433u043bu0430u0433u043eu043b\"]" },
  { "id": "15123", "english": "conjecture", "transcription": "[kənˈʤɛkʧə]", "russian": "догадка", "tags": "мышление", "tags_json": "[\"u043cu044bu0448u043bu0435u043du0438u0435\"]" },
  { "id": "15138", "english": "flower", "transcription": "[ˈflaʊə]", "russian": "цветок", "tags": "", "tags_json": "[]" },
  { "id": "15143", "english": "ability", "transcription": "[əˈbɪləti]", "russian": "умение, способность", "tags": "гарри поттер.", "tags_json": "[\"u0433u0430u0440u0440u0438 u043fu043eu0442u0442u0435u0440.\"]" },
  { "id": "15144", "english": "ability", "transcription": "[əˈbɪləti]", "russian": "умение, способность", "tags": "гарри поттер.", "tags_json": "[\"u0433u0430u0440u0440u0438 u043fu043eu0442u0442u0435u0440.\"]" },
];


function App() {
  return (
    <div className="App">
      <DescrCard />
      <Inputs />
      {
        words.map((word) =>
          <Card id={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tagsy}></Card>
        )
      }
    </div>
  );
}

export default App;
