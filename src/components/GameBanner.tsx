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

            <div className='w-full pt-4 pb-4 px-5 bg-game-gradient absolute bottom-0 left-0 right-0'>
                <strong className='font-bold text-white'> {properties.title} </strong>
                <br />
                <span className='text-zinc-300  text-sn block mt-1'> {properties.adsCount} anúncio(s) </span>
            </div>
        </a>
  );
}