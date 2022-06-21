
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Routes, Route } from "react-router-dom";
import Meals from './components/Meals/Meals';
import MealDetails from './components/MealDetails/MealDetails';
function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/meals' element={<Meals></Meals>}></Route>
      <Route path='/meal/:mealId' element={<MealDetails></MealDetails>}></Route>
     </Routes>
    </div>
  );
}

export default App;
