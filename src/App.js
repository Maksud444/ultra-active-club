import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Student from './Component/Students/Student';

function App() {
  return (
    <div className="App">
       <Header></Header>
       <h2>Select today’s exercise</h2>
       <Student></Student>
    </div>
  );
}

export default App;
