import React from 'react';
import Novel from '../assets/project-1.png';
import Weather from '../assets/project-3.png';
import Todo from '../assets/todo.png';

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Work
                    </p>
                    <p className='py-6'>// Check out some of my recent work</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

  
                    <div
                        style={{ backgroundImage: `url(${Todo})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 duration-300'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                A Todo list With React
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://precious-chimera-ce77c7.netlify.app/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='https://github.com/immodi/Todo-List'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${Novel})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 duration-300'>
                            <span className='text-xl font-bold text-white tracking-wider'>
                                Full-Stack Novels Webapp
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://modi.pythonanywhere.com'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='https://github.com/immodi/novelsite'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div
                        style={{ backgroundImage: `url(${Weather})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 duration-300'>
                            <span className='text-xl font-bold text-white tracking-wider'>
                                Full-Stack Weather Webapp
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://enchanting-fairy-f81f0f.netlify.app/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='https://github.com/immodi/weather-app-front-end'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Work;