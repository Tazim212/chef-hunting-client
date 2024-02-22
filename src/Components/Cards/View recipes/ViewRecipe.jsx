import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

const ViewRecipe = () => {

    const { id } = useParams();
    const Views = useLoaderData();
    const [Favourite, setFavourite] = useState(false);

    const ToastMessage = () =>{
        toast("Its my favourite food.I like it a lot!!!")
        setFavourite(true)
    }

    return (

        <div className='mb-16'>

            {/*-------- -----------Single chef cards-----------------------  */}

            <div className="card card-side shadow-xl mx-10 mt-10 bg-slate-400 opacity-100">
                <figure className="px-10 pt-10">
                    <img src={Views.chef_picture} alt="" className="h-72 rounded-md w-[fit-content] pb-10 px-7" />
                </figure>
                <div className="items-center text-center pt-10 px-6">
                    <h2 className=" text-amber-700 text-2xl font-bold pb-4">{Views.chef_name}</h2>
                    <p className='text-lg text-orange-950 pb-5'>Years of Experience: {Views.years_of_experience}</p>
                    <small className='text-base text-red-800'>Number Of Recipes: {Views.num_recipes}</small>
                    <p className='text-green-800 text-lg leading-8 pt-3 italic tracking-wide'><span className='font-bold text-lg'>Description: </span>{Views.description}</p>

                </div>
            </div>

         {/* --------------------------Chef Recipieses---------------------  */}

            <h1 className='mt-16 text-5xl text-center text-amber-600 font-bold'>Recipe Details</h1>

         <div className='flex mt-12 justify-center gap-9'>

            <div className="card w-96 bg-orange-100">
                <div className="card-body">
                    <h2 className="card-title text-slate-800 font-extrabold justify-center pb-5">{Views.recipe_info.recipe_name}</h2>
                    <ol className='text-slate-800'>
                        <li>- {Views.recipe_info.ingredients[0]}</li>
                        <li>- {Views.recipe_info.ingredients[1]}</li>
                        <li>- {Views.recipe_info.ingredients[2]}</li>
                        <li>- {Views.recipe_info.ingredients[3]}</li>
                        <li>- {Views.recipe_info.ingredients[4]}</li>
                    </ol>
                    <p className='text-slate-800'><span className='font-bold text-lg'>Cooking Method:</span> {Views.recipe_info.cooking_method}</p>

                    <strong className='text-lg text-indigo-900'>Rating: {Views.recipe_info.rating}</strong>

                    <div className="card-actions justify-end">
                    <button disabled={Favourite} onClick={ToastMessage} className='btn bg-orange-950'>Favourite</button>
                        <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light">
                        </ToastContainer>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-orange-100">
                <div className="card-body">
                    <h2 className="card-title text-slate-800 font-extrabold justify-center pb-5">{Views.recipe_info.recipe_name}</h2>
                    <ul className='text-slate-800'>
                        <li>- {Views.recipe_info.ingredients[0]}</li>
                        <li>- {Views.recipe_info.ingredients[1]}</li>
                        <li>- {Views.recipe_info.ingredients[2]}</li>
                        <li>- {Views.recipe_info.ingredients[3]}</li>
                        <li>- {Views.recipe_info.ingredients[4]}</li>
                    </ul>
                    <p className='text-slate-800'><span className='font-bold text-lg'>Cooking Method:</span> {Views.recipe_info.cooking_method}</p>

                    <strong className='text-lg text-indigo-900'>Rating: {Views.recipe_info.rating}</strong>

                    <div className="card-actions justify-end">
                    <button disabled={Favourite} onClick={ToastMessage} className='btn bg-orange-950'>Favourite</button>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-orange-100">
                <div className="card-body">
                    <h2 className="card-title text-slate-800 font-extrabold justify-center pb-5">{Views.recipe_info.recipe_name}</h2>
                    <ul className='text-slate-800'>
                        <li>- {Views.recipe_info.ingredients[0]}</li>
                        <li>- {Views.recipe_info.ingredients[1]}</li>
                        <li>- {Views.recipe_info.ingredients[2]}</li>
                        <li>- {Views.recipe_info.ingredients[3]}</li>
                        <li>- {Views.recipe_info.ingredients[4]}</li>
                    </ul>
                    <p className='text-slate-800'><span className='font-bold text-lg'>Cooking Method:</span> {Views.recipe_info.cooking_method}</p>

                    <strong className='text-lg text-indigo-900'>Rating: {Views.recipe_info.rating}</strong>

                    <div className="card-actions justify-end">
                    <button disabled={Favourite} onClick={ToastMessage} className='btn bg-orange-950'>Favourite</button>
                    </div>
                </div>
            </div>
            </div>

        </div>
    );
};

export default ViewRecipe;