import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const MealDetails = () => {
    const {mealId} = useParams();
    const [meal,setMeal]= useState({});
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data => setMeal(data.meals[0]))
    },[])
    return (
        <div>
            <h1>Meal Count no : {mealId}</h1>
            <h1>Meal Name:{meal.strMeal}</h1>
            <img className='mx-auto' width='600px' src={meal.strMealThumb} alt=""/>
        </div>
    );
};

export default MealDetails;