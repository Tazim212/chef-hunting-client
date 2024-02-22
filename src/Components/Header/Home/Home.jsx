import React, { useEffect, useState } from 'react';
import Cards from '../../Cards/Cards';
import foodImg from '../../../assets/food.avif'
import serviceImg from '../../../assets/serviceImg.jpg';


const Home = () => {

    const [chefData, setChefData] = useState([])

    const [loading,setLoading] = useState(false);

    if(loading){
        setLoading(true);
        return <button className="btn-square loading mx-auto mt-16"></button>
    }
    fetch("https://chef-hunting-server-tazim212.vercel.app/chefdata")
        .then(res => res.json())
        .then(data => setChefData(data))

    return (
        <div>
            <div className="card lg:card-side bg-slate-700 shadow-xl mt-8 mx-20">
                <figure><img className='w-72 h-72' src={foodImg} alt="Album" /></figure>
                <div className="card-body text-slate-300">
                    <h2 className="card-title text-3xl font-bold text-fuchsia-500 pb-6">Welcome To Bangladeshi Chef Hub!!</h2>
                    <p>Bangladeshi food hub is one of the most popular food servicer in bangladesh.<br></br>People like to come for eating delicious and tasty food here.</p>
                </div>
            </div>

            <h1 className='text-center text-5xl text-amber-200 md:text-amber-500 mt-6 font-bold'>Chef Section</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 mt-5'>
                {
                    chefData.map(dt => <Cards key={dt.id} dt={dt}></Cards>)
                }
            </div>

            <h1 className='text-center md:text-left ml-5 my-12 font-bold text-5xl text-amber-200 md:text-amber-600'>Chef's Community</h1>
            <div className='flex sm:flex-col lg:flex-row gap-10 justify-center ml-3 bg-slate-500 w-1/2 rounded-lg mb-14'>
                <img className='rounded-full py-4 ps-3' src={serviceImg} alt="" />
                <p className='text-lg text-lime-500 sm:text-center pr-4 py-6'>The community of the chef's works for the betterment of the chef's.They help them in every problem if they face.Gradually there community is increasing day by day.</p>
            </div>
            <h1 className='text-center md:text-right mr-5 my-12 font-bold text-5xl text-amber-200 md:text-amber-600'>Chef's Services</h1>

            <div className='flex sm:flex-col lg:flex-row gap-10 justify-center float-right mr-5 bg-slate-500 w-2/4 rounded-lg mb-20'>
                <img className='rounded-full py-4 ps-3' src={serviceImg} alt="" />
                <p className='text-lg text-lime-500 sm:text-center pr-4 py-6'>The services of this chefs are very good.They are giving their best to achieve more<br></br> in their life.They have a great cooking skill and make so many tasty foods.<br></br>Our chefs also made foods for many programmes and marriage programmes.They also work in many luxurious 5 star hotel and give good food service in there.</p>
            </div>

        </div>

    );
};

export default Home;