import React, { useState } from 'react';
import { FaFacebook, FaWhatsapp, FaDiscord, FaTelegram } from 'react-icons/fa';
import 'animate.css';

const Footer = () => {
  const [isFacebookHovered, setFacebookHovered] = useState(false);
  const [isWhatsappHovered, setWhatsappHovered] = useState(false);
  const [isDiscordHovered, setDiscordHovered] = useState(false);
  const [isTelegramHovered, setTelegramHovered] = useState(false);

  const iconStyle = {
    fontSize: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    padding: '5px 0',
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    transition: 'all 0.5s ease',
  };

  return (
    <div>
      <footer className="footer footer-center p-5 bg-[#45B39D] text-[#FAF9F6]">
        <div className='flex flex-col md:flex-row-reverse  justify-around w-full'>
          <div>
          <aside>
          <p className="font-bold text-2xl">Helper builders Ltd.</p>
          <p className="font-normal text-sm">
            Customer Priority Fast <br />
            Quality Service Must
          </p>
          <p className='text-sm'>Copyright © 2024 - All right reserved</p>
        </aside>
          </div>
          <div>
          <nav>
            <p className='hidden md:block my-3 text-lg'>Contact 24/7 </p>
          <div className="grid grid-flow-col gap-4">
            <div>
              <button>
                <a
                  onMouseEnter={() => setFacebookHovered(true)}
                  onMouseLeave={() => setFacebookHovered(false)}
                  href="https://www.facebook.com/groups/webdevelopmentbatch9?sorting_setting=CHRONOLOGICAL"
                >
                  <FaFacebook
                    className={`text-blue-800 border-black border bg-[#FCFBF4] ${isFacebookHovered ? 'animate__animated animate__rubberBand' : ''}`}
                    style={iconStyle}
                  />
                </a>
              </button>
            </div>
            <div>
              <button>
                <a
                  onMouseEnter={() => setWhatsappHovered(true)}
                  onMouseLeave={() => setWhatsappHovered(false)}
                  href="https://www.facebook.com/groups/webdevelopmentbatch9?sorting_setting=CHRONOLOGICAL"
                >
                  <FaWhatsapp
                    className={`text-[#FCFBF4] bg-green-500 ${isWhatsappHovered ? 'animate__animated animate__rubberBand' : ''}`}
                    style={iconStyle}
                  />
                </a>
              </button>
            </div>
            <div>
              <button>
                <a
                  onMouseEnter={() => setDiscordHovered(true)}
                  onMouseLeave={() => setDiscordHovered(false)}
                  href="https://www.facebook.com/groups/webdevelopmentbatch9?sorting_setting=CHRONOLOGICAL"
                >
                  <FaDiscord
                    className={`text-[#FCFBF4] bg-blue-500 ${isDiscordHovered ? 'animate__animated animate__rubberBand' : ''}`}
                    style={iconStyle}
                  />
                </a>
              </button>
            </div>
            <div>
              <button>
                <a
                  onMouseEnter={() => setTelegramHovered(true)}
                  onMouseLeave={() => setTelegramHovered(false)}
                  href="https://www.facebook.com/groups/webdevelopmentbatch9?sorting_setting=CHRONOLOGICAL"
                >
                  <FaTelegram
                    className={`hover:animate__heartBeat text-[#FCFBF4] bg-blue-800 ${isTelegramHovered ? 'animate__animated animate__rubberBand' : ''}`}
                    style={iconStyle}
                  />
                </a>
              </button>
            </div>
          </div>
        </nav>
          </div>
        </div>
     
      </footer>
    </div>
  );
};

export default Footer;
