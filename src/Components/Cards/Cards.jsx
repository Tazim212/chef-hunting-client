import React from 'react';
import {FaRegThumbsUp} from "react-icons/fa";
import { Link } from 'react-router-dom';


const Cards = ({dt}) => {

      const {id, chef_name, chef_picture, years_of_experience, num_recipes, likes} = dt
    return (

        <div className="card w-96 h-auto shadow-xl mx-auto mt-5 bg-slate-400 opacity-80">
            <figure className="px-10 pt-4">
                <img src={chef_picture} alt="Shoes" className="rounded-full w-72 h-56" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-orange-600 text-2xl">{chef_name}</h2>
                <p className='text-lg text-orange-950'>Years of Experience: {years_of_experience}</p>
                <small className='text-base text-red-800'>Number Of Recipes: {num_recipes}</small>
                <small className='flex'><FaRegThumbsUp className='mt-1 mr-2 bg-zinc-400'></FaRegThumbsUp> {likes}</small>
                <div className="card-actions">
                    <Link to={`recipes/${id}`}><button className="btn btn-info">View Recipes</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Cards;