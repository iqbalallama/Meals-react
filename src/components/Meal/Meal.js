import React from 'react';
import { useNavigate } from "react-router-dom";
import './Meal.css'
const Meal = ({meal}) => {
    const {idMeal,strInstructions,strMealThumb,strMeal}=meal;
    const navigate = useNavigate();
    const learn = () =>{
        navigate(`/meal/${idMeal}`)
    }
    return (
        <div className='meal mx-auto'>
            <img className='w-full' src={strMealThumb} alt=''/>
            <h1>Name:{strMeal}</h1>
            <p>Description:{strInstructions.slice(0,100)}</p>
            <button onClick={learn} className='bg-red-400 py-3 w-full'>See Details</button>
        </div>
    );
};

export default Meal;