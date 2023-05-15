import React, { useState } from 'react';
import history_img from "../assets/history_img.jpg";
// import jose from "../../assets/Gallery/jose_aringo.jpeg";
import jose from "../assets/Gallery/jose_aringo.jpeg";


function About() {
    const [isTruncated, setIsTruncated] = useState(true);

    function toggleIsTruncated() {
        setIsTruncated(!isTruncated);
    }
    const text = " lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem morem lorem"
    const truncatedText = text.slice(0, 10);
    
    
        return (
            <div className='grid  md:grid-cols-3   md:w-container w-mobile mx-auto gap-5 '>
                <div className="card h-70  shadow-md bg-white  mx-auto  relative rounded-md items-start -z-10">
                    <img className="rounded-md " src={history_img} alt="" />
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 p-0.5 bg-white  rounded-full absolute top-[258px] left-[42%]  ">
<path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg> */}

                    <div className="card-body">
                        <h2 className="card-title text-ourRed text-center text-extrabold pt-4 text-lg "> Our vision</h2>
                        <p className='text-md items-center p-2'>To be a club recognized for providing top-class training and
                            developing highly skillful and intelligent players capable of
                            competing at the highest levels of the game locally and
                            internationally</p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div>
                <div className="card h-70  shadow-md bg-white rounded-md mx-auto  relative  items-start -z-10">
                    <img className="rounded-md " src={history_img} alt="" />
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 p-0.5 bg-white  rounded-full absolute top-[258px] left-[42%]  ">
<path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg> */}

                    <div className="card-body">
                        <h2 className="card-title  text-center text-extrabold pt-4 text-ourRed text-lg "> Our mission</h2>
                        <p className='text-md items-center p-2'>To foster sportsmanship and ‘espirit de corps’ amongst the officers
                            and service members of Armoured Brigade and local civilian youths,
                            and provide an opportunity and a suitable platform for them to
                            showcase their talents in a supportive and rewarding environment
                            that helps them reach their full potential on and off the field.</p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
        
                </div>
                <div className="card h-70  shadow-md bg-white rounded-md mx-auto  relative  items-start -z-10">
                    <img className="rounded-md  w-full object-cover " src={history_img} alt="" />
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 p-0.5 bg-white  rounded-full absolute top-[258px] left-[42%]  ">
<path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg> */}

                    <div className="card-body">
                        <h2 className="card-title text-ourRed text-center text-extrabold pt-4 ">Head coach's word</h2>
                        <p className='text-md items-center p-2 md:font-sm'>“As a football coach, my philosophy centers around building from the back, creating and
exploiting space and maintaining possession of the ball in order to control the game. This
approach is based on the belief that soccer is a fluid and dynamic sport that requires a high
degree of technical skill, tactical awareness and physical fitness. 
‘Jose Aringo’.
                        </p>


                    {/* <div>
    `{isTruncated ? truncatedText : text}
    <button onClick={toggleIsTruncated}>
        {isTruncated ? 'Read more' : 'Read less'}
    </button>``
    </div> */}
                        <div className="card-actions justify-end">

                        </div>
                    </div>
        
                </div>
            </div>

        );
    
}
export default About;