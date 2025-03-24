import pimbi from './voice.jpg'
import bulb from './bulb.jpg'
import { useNavigate } from 'react-router'

export default function Home(){

    const navigate = useNavigate();

    function navigateToLogin(){
        navigate('login')
    }

    return <section className="bg-[#F9F9F9] h-[88vh] flex justify-between">
        <div className="w-[28.5%] flex flex-col mt-[320px] items-end">
            <img src={bulb} alt="pic" className="h-8 mr-[240px] mt-10"/>
            <p className="bg-white font-medium border  border-slate-100 px-4 py-2 w-max rounnded-lg items-start mr-[104px]">We're always there</p>
            <p className="bg-white font-medium border border-slate-100 px-4 py-2 rounnded-lg w-max mt-4">Find anything you want to know!</p>
        </div>
        <div className="">
            <p className="text-center text-[#1A54D3] text-[26px] font-medium pt-20">Connecting Generations Through Seamless Translation</p>.
            <p className="text-center mt-4 text-[80px] font-bold">What if you could ask<br/> anything?</p>
            <p className="text-center mt-10 text-slate-600 text-[20px]">HudumaVoice is a cutting-edge AI assistant designed to offer human-like voice<br/> conversations, extensive knowledge, and multilingual support.</p>

            <div className="flex space-x-6 justify-center mt-20">
                <button className="border bg-[#0257F6] text-white rounded-full font-medium px-10 py-4 hover:cursor-pointer">Get Started</button>
                <button className="border bg-black text-white rounded-full border-black font-medium px-10 py-4 hover:cursor-pointer" onClick={navigateToLogin}>Book a Demo</button>
            </div>
        </div>
        <div className="w-[28.5%] flex flex-col mt-[280px]">
            <img src={pimbi} alt="pic" className="w-[40%] ml-20"/>
            <p className="bg-white font-medium border border-slate-100 px-4 py-2 rounnded-lg w-max">Hi, I will always help you!</p>
        </div>
    </section>
}