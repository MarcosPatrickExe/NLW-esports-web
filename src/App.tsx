//import { useState } from 'react'
import './styles/main.css';
import logo from './assets/Logo.svg';
import GameBanner from './components/GameBanner';
import CreateAdBanner from './components/CreateAdBanner';
import React, { useEffect, useState } from 'react';
//import * as Dialog from '@radix-ui/react-dialog';
import { Dialog } from '@radix-ui/react-dialog';
//import {e} from '@types/express/index';
import './styles/main.css'
import { CreateAdModel } from './components/CreateAdModel';



interface GameTyped {
    id: string,
    title: string,
    bannerUrl: string,
    _count: {
        ads: number
    }
}

function timeout(delay: number) {
    return new Promise( res => setTimeout(res, delay) );
}





// LINK DO FIGMA:
// https://www.figma.com/file/AjotQe5dsfCyxCGjEY0iE2/NLW-eSports-(Community)?node-id=6%3A23

function App() {
    setTimeout(()=>{}, 2000);

    const [games, setGames] = useState<GameTyped[]>([]);


    useEffect( function(){
       
        setTimeout(() => { }, 5000);

        fetch('http://localhost:3333/games')
            .then( (response :Response )=> response.json() )
          
            .then( (data: GameTyped[]) => {
                    console.dir( JSON.stringify(data, null, 4) );
                    setGames(data);
                   
            })
            .catch( function( requestError ){
                  console.log(requestError);
            })

    }, []);


    return (
    
        <div className='max-w-[1344p] mx-auto flex flex-col items-center'>

            <img className='aspect-video transform scale-25 mt-[-12%]' src={logo} alt=""/>

            <h1 className="text-5xl text-white font-black mt-[-12%]">
                Seu <span className="text-transparent bg-nlw-gradient bg-clip-text"> duo </span> está aqui
            </h1>
           

            { games.length==0 && ( 
                    <div className="grid grid-cols-6 gap-6 mt-12 transform scale-80 w-full h-50 mb-6 pl-[45%] pr-[50%] ">
                          <div className="loading relative "></div>
                    </div> ) 
            }


{/*================================ CARDS DOS GAMES ===============================================*/}
            <div className="grid grid-cols-6 gap-6 mt-1 transform scale-80">

                { games.length!=0 && (
                        games.map( 
                            function( game: GameTyped ) {
                                return (
                                    <GameBanner 
                                        key={game.id} 
                                        bannerUrl={game.bannerUrl} 
                                        title={game.title} 
                                        adsCount={ game._count.ads } 
                                    />
                                )
                        })
                  )
                }
            </div>


{/*================================ RODAPÉ (DIV COM BOTÃO DE CRIAR ANÚNCIO) ===============================================*/}
          
            {/* Dialog.Root ou modal deve ser colocando em volta do componente que contém o botão que irá abrir o modal*/}

            <Dialog>
                
                    <CreateAdBanner />
                    <CreateAdModel />
                   
            </Dialog>
        </div>

     
    );
}

export default App;
