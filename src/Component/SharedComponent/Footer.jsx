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
      <footer className="footer footer-center p-10 bg-[#F8F9FA] text-[#333333]">
        <aside>
          <img src="../../../public/helper.png " className="w-40" alt="" />
          <p className="font-bold text-2xl">Helper builders Ltd.</p>
          <p className="font-semibold text-lg">
            Customer Priority Fast <br />
            Quality Service Must
          </p>
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
        <nav>
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
      </footer>
    </div>
  );
};

export default Footer;
