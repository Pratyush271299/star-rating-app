import logo from './logo.svg';
import './App.css';
import StarRating from './components/StarRating';

function App() {
  return (
    <div className="App">
      <StarRating noOfStars={5}/>
    </div>
  );
}

export default App;