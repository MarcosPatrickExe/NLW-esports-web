//import { useState } from 'react'
import './styles/main.css';
import logo from './assets/Logo.svg';
import React from 'react';
// LINK DO FIGMA:
// https://www.figma.com/file/AjotQe5dsfCyxCGjEY0iE2/NLW-eSports-(Community)?node-id=6%3A23

function App() {
    
    return (
      <React.Fragment>

        <div className='max-w-[1344p] mx-auto flex flex-col items-center'>

                <img className='aspect-video transform scale-25 mt-[-12%]' src={logo} alt=""/>

                <h1 className="text-5xl text-white font-black mt-[-12%]">
                    Seu <span className="text-transparent bg-nlw-gradient bg-clip-text"> duo </span> está aqui
                </h1>
            {/* 
                <div className="w-8 h-8 bg-black dark:bg-state-500 lg:bg-violet-500 text-zinc-400">
                    <h1> Hello Worlddddd</h1>
                </div>
            */}

            <div className="grid grid-cols-6 gap-6 mt-6 transform scale-80">

                    <a href="" className="relative rounded-lg overflow-hidden">
                        <img src="/image 1.png" alt="" />

                        <div className='w-full pt-4 pb-4 px-5 bg-game-gradient absolute bottom-0 left-0 right-0'>
                             <strong className='font-bold text-white'>League of Legends</strong>
                             <br />
                             <span className='text-zinc-300  text-sn block mt-1'>4 anúncios</span>
                        </div>
                    </a>

                    <a href="" className="relative rounded-lg overflow-hidden">
                        <img src="/image 2.png" alt="" />

                        <div className='w-full pt-4 pb-4 px-5 bg-game-gradient absolute bottom-0 left-0 right-0'>
                             <strong className='font-bold text-white'>Dota 2</strong>
                             <br />
                             <span className='text-zinc-300  text-sn block mt-1'>4 anúncios</span>
                        </div>
                    </a>

                    <a href="" className="relative rounded-lg overflow-hidden">
                        <img src="/image 3.png" alt="" />

                        <div className='w-full pt-4 pb-4 px-5 bg-game-gradient absolute bottom-0 left-0 right-0'>
                             <strong className='font-bold text-white'>Counter Strike</strong>
                             <br />
                             <span className='text-zinc-300  text-sn block mt-1'>4 anúncios</span>
                        </div>
                    </a>

                    <a href="" className="relative rounded-lg overflow-hidden">
                        <img src="/image 5.png" alt="" />

                        <div className='w-full pt-4 pb-4 px-5 bg-game-gradient absolute bottom-0 left-0 right-0'>
                             <strong className='font-bold text-white'>Apex Legends</strong>
                             <br />
                             <span className='text-zinc-300  text-sn block mt-1'>4 anúncios</span>
                        </div>
                    </a>

                    <a href="" className="relative rounded-lg overflow-hidden">
                        <img src="/image 6.png" alt="" />

                        <div className='w-full pt-4 pb-4 px-5 bg-game-gradient absolute bottom-0 left-0 right-0'>
                             <strong className='font-bold text-white'>Fortnite</strong>
                             <br />
                             <span className='text-zinc-300  text-sn block mt-1'>4 anúncios</span>
                        </div>
                    </a>

                    <a href="" className="relative rounded-lg overflow-hidden">
                        <img src="/image 7.png" alt="" />

                        <div className='w-full pt-4 pb-4 px-5 bg-game-gradient absolute bottom-0 left-0 right-0'>
                             <strong className='font-bold text-white'>World Warcraft</strong>
                             <br />
                             <span className='text-zinc-300  text-sn block mt-1'>4 anúncios</span>
                        </div>
                    </a>
            </div>



        </div>

      </React.Fragment>
    )
}

export default App
