import { BsInstagram, BsGithub } from 'react-icons/bs';
import { AiOutlineLinkedin } from 'react-icons/ai';

export function Footer() {
    return (
        <div className='bg-slate-900 h-40 md:h-36 pb-5 flex flex-col items-center justify-end'>
            <div className='flex justify-center items-center'>
                <a href="https://www.instagram.com/emma_y7/" target='_blank'>
                <BsInstagram className='w-8 h-7 text-slate-50 hover:opacity-75'/>
                </a>
                <a href="https://github.com/EmmanuelYapura" target='_blank'>
                <BsGithub  className='w-8 h-7 mx-2 text-slate-50 hover:opacity-75'/>
                </a>
                <a href="https://www.linkedin.com/in/emmanuelyapura/" target='_blank'>
                <AiOutlineLinkedin className='w-8 h-10 text-slate-50 hover:opacity-75'/>
                </a>
            </div>
            <div>
                <p className='text-slate-50'>Coded by Emmanuel_Yapura</p> 
            </div>
        </div>
    )
}