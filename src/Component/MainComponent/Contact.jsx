import React, { useState } from 'react';
import { FaFacebook, FaWhatsapp, FaDiscord, FaTelegram } from "react-icons/fa";
import contactImg from "../../../public/contact.png";
import 'animate.css';


const Contact = () => {
    const [hoveredIcon, setHoveredIcon] = useState(null);

    const divStyle = {
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;'
    };

    const iconStyle = {
        fontSize: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        padding: '5px 0',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        transition: 'all 0.5s ease'
    };

    const handleIconHover = (icon) => {
        setHoveredIcon(icon);
    };

    const handleIconLeave = () => {
        setHoveredIcon(null);
    };

    return (
        <div className='mt-5 bg-[#E2EDE2] rounded-md sm:shadow-none' style={divStyle}>
            <section className="p-4 lg:p-8">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md  lg:flex-row">
                        <img src={contactImg} alt="" className="dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                            <span className="text-xs uppercase dark:text-gray-600">Feel free to</span>
                            <h3 className="text-4xl font-bold">Contact with us any time</h3>
                            <p className='my-4'>
                                For seamless access to rental homes or apartments, our dedicated team operates around the clock to provide you with exceptional service. Don't hesitate to reach out to us anytime you need assistance. Your satisfaction is our priority, and we're here to help whenever you require it.
                            </p>

                            <div className='flex justify-around'>
                                <div>
                                    <a href="https://www.facebook.com/groups/webdevelopmentbatch9?sorting_setting=CHRONOLOGICAL"
                                        onMouseEnter={() => handleIconHover('facebook')}
                                        onMouseLeave={handleIconLeave}>
                                        <FaFacebook style={iconStyle} className={hoveredIcon === 'facebook' ? 'text-blue-800 bg-[#FCFBF4] animate__animated animate__bounce' : 'text-blue-800 bg-[#FCFBF4]'} />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.facebook.com/groups/webdevelopmentbatch9?sorting_setting=CHRONOLOGICAL"
                                        onMouseEnter={() => handleIconHover('whatsapp')}
                                        onMouseLeave={handleIconLeave}>
                                        <FaWhatsapp style={iconStyle} className={hoveredIcon === 'whatsapp' ? 'text-[#FCFBF4] bg-green-500 animate__animated animate__bounce' : 'text-[#FCFBF4] bg-green-500'} />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.facebook.com/groups/webdevelopmentbatch9?sorting_setting=CHRONOLOGICAL"
                                        onMouseEnter={() => handleIconHover('discord')}
                                        onMouseLeave={handleIconLeave}>
                                        <FaDiscord style={iconStyle} className={hoveredIcon === 'discord' ? 'text-[#FCFBF4] bg-blue-500 animate__animated animate__bounce' : 'text-[#FCFBF4] bg-blue-500'} />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.facebook.com/groups/webdevelopmentbatch9?sorting_setting=CHRONOLOGICAL"
                                        onMouseEnter={() => handleIconHover('telegram')}
                                        onMouseLeave={handleIconLeave}>
                                        <FaTelegram style={iconStyle} className={hoveredIcon === 'telegram' ? 'text-[#FCFBF4] bg-blue-800 animate__animated animate__bounce' : 'text-[#FCFBF4] bg-blue-800'} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
