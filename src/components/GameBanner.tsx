import React from 'react';


interface GameProps {
    bannerUrl: string;
    title: string;
    adsCount: number;
}


export default function GameBanner( properties :GameProps ) {

    return (
        <a href="" className="relative rounded-lg overflow-hidden">
            <img src={ properties.bannerUrl } alt="" />

            <div className='w-full pt-4 h-auto bg-game-gradient absolute bottom-0 left-0 right-0 flex items-end'>

                <div className="w-full flex flex-col  pr-3">
                        <div className="flex justify-end">
                                <p style={{textAlign: 'right'}}>
                                    <strong className='text-3xl font-bold text-white'> {properties.title} </strong>
                                </p>
                        </div>
                        <div className="flex justify-end">
                                <p className='text-zinc-300 text-xl block '> {properties.adsCount} anúncio(s) </p>
                       </div>
                </div>
            </div>
        </a>
  );
}