//import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Input from './Form/Input';
import { GameController } from 'phosphor-react';



export function CreateAdModel() {

  const styleButtonsDaysWeek = "w-8 h-8 rounded bg-zinc-900"

  return (
    /* Portal permite que o modal apareça centralizado na tela por cima dos outros componentes */
    <Dialog.Portal>
        
            {/* Overlay é camada preta que escurece o fundo para destacar o modal  */}
            <Dialog.Overlay className="bg-black/80 insert-0 fixed" >


                {/* Conteúdo do modal */}
                <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-lg w-[30%] shadow-lg shadow-black/25">
                        
                    <Dialog.Title className="text-3xl font-black">
                        Publique um anúncio
                    </Dialog.Title>{/* Avisa para os leitores de tela que um novo anúncio/modal foi aberto!! */}

                    
                    <form className="mt-8 flex flex-col gap-4">

                                <div className="flex flex-col gap-2">
                                    <label className="font-semibold" htmlFor="game">Qual o game? </label>
                                    <Input id="game" placeholder="Selecione o game que deseja jogar... "   />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name">Seu nome (ou nickname) </label>
                                    <Input id="name" type="text" placeholder="Como te chamam dentro do game?" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="yearsPlaying">Joga há quantos anos? </label>
                                            <Input id="yearsPlaying" type="text" placeholder="Tudo bem ser ZERO?" />
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="discord">Qual o seu Discord? </label>
                                            <Input id="discord" type="text" placeholder="Usuario#0000" />
                                        </div>
                                </div>


                                <div className="flex gap-6">
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="weekDays">Quando costuma jogar? </label>
                                        
        
                                            <div className="grid grid-cols-4 gap-2">
                                                <button title="Domingo" className={styleButtonsDaysWeek}> D </button>
                                                <button title="Segunda" className={styleButtonsDaysWeek}> S </button>
                                                <button title="Terça" className={styleButtonsDaysWeek}> T </button>
                                                <button title="Quarta" className={styleButtonsDaysWeek}> Q </button>
                                                <button title="Quinta" className={styleButtonsDaysWeek}> Q </button>
                                                <button title="Sexta" className={styleButtonsDaysWeek}> S </button>
                                                <button title="Sábado" className={styleButtonsDaysWeek}> S </button>
                                            </div>
                                        
                                        </div>

                                        <div className="flex flex-col gap-2 flex-1">
                                            <label htmlFor="hourStart">Qual horário do dia? </label>
                                            <div className="grid grid-cols-2 gap-1">
                                                <Input id="hourStart" type="time" placeholder="De" />
                                                <Input id="hourInput" type="time" placeholder="Até" />
                                            </div>
                                        </div>
                                </div>

                                <div className="mt-2 flex gap-2 text-sm">
                                    <input type="checkbox" />
                                    Costumo me conectar ao chat de voz
                                </div>


                                <footer className="mt-2 flex justify-end gap-4">
                                    <Dialog.Close 
                                        type="button"
                                        className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"> 
                                        Cancelar 
                                    </Dialog.Close>

                                    <button className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex item-center gap-3 hover:bg-violet-600" type="submit">
                                        <GameController size={24} />
                                        Encontrar duo
                                    </button>
                                </footer>

                    </form>
                    
                </Dialog.Content>
            </Dialog.Overlay>
    </Dialog.Portal>

  );
}