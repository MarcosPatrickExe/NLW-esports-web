import { MagnifyingGlassPlus} from 'phosphor-react';
//import * as Dialog from '@radix-ui/react-dialog';
//import { DialogTrigger } from '@radix-ui/react-dialog';
//import React from 'react';
import { modalProperties } from '../utils/types';



export default function CreateAdBanner ( {toggleShowModal }:modalProperties  ){


    {/*======================== RODAPÉ DA PÁGINA ======================================================================= */}
          
    return(
        <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mx-16 mb-4  ">
            <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center' >

                <div>
                    <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
                    <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players! </span>
                </div>


               <div className="py-3 px-4 bg-violet-500 hover:bg-violet-700 text-white rounded flex items-center gap-3 " onClick={ ()=>{ toggleShowModal(true)}  }>
                {/* BOTÃO QUE VAI CHAMAR O 'MODAL' */}

                        <MagnifyingGlassPlus size={24} />
                        Publicar anúncio
             
                </div>
            </div>
        </div>
    )
}