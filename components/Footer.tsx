import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import { profile } from 'console'

const Footer = () => {
  return (
    <footer className='w-full pb-10 px-20 mb-[100px] md:mb-5' id='contact'>
        {/* <div className='w-full absolute left-0 -bottom-72 min-h-96'>
            <img src="/footer-grid.svg" alt="grid" 
            className='w-full h-full opacity-50'/>
        </div> */}
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Ready to take
                <span className='text-purple'> your </span>
                digital presence to the next level?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>
                Reach out to me today and let's discuss how I can help you achieve your goals.
            </p>
            <a href="mailto:souravbiswasjob19april@gmail.com">
                <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow/>}
                position='right'
                />
            </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2025 
                <span  className='text-purple'> Sourav Biswas </span>
            </p>
            
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <a
                    key={profile.id}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='w-10 h-10 cursor-pointer flex justify-center items-center
                        backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'
                    >
                    <img 
                        src={profile.img} 
                        alt={profile.img} 
                        width={20} height={20}
                    />
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer