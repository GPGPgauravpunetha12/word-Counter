
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// do here class= className and also do href="#" to href="/" replace it and always close all tags to avooid the warning  by using ctrl+F
function App() {
  return (
    <>
  <Navbar Home="noida" Navbar="lala"Link="2Link"/>
      <div className="container my-3">
  <TextForm heading="Enter your text" />
      </div>


    </>
  );
}
// props are nothing but the values of variable that can be change and use again and agin variable will not be changed and no props will be changed 
// and must be readonly and we can change text inside3 it 

export default App;
