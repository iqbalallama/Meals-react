import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [searchText,setSearch] = useState('');
    const [mealss,setMeals] = useState([]);
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[searchText]);
    
    const show = e =>{
        setSearch(e.target.value);
    }
    return (
        <div>
            <h1 className='text-4xl'>Food Search</h1>
            <input onChange={show} className="border-double border-4 border-indigo-600 mt-5 py-2" placeholder='Search your food' type='text'/>
            <br/>
            <h1>Result Found: {mealss.length}</h1>
            <div className=' grid md:grid-cols-3 gap-4'>
                {
                    mealss.map(meal=><Meal
                    key={meal.idMeal}
                    meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;