import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
    const iconStyle={ 
        fontSize:'30px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'10px',
        padding:'5px 0',
        shadow:'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'
    }
    return (
        <div>
            <footer className="footer footer-center p-10 bg-[#F8F9FA] text-[#333333 ]">
  <aside>
        <img src="../../../public/helper.png " className="w-40"  alt="" />
    <p className="font-bold text-2xl">
      Helper builders Ltd. 
    </p> 
    <p className="font-semibold text-lg">Customer Priority Fast <br />Quality Service Must</p>
    <p>Copyright © 2024 - All right reserved</p>
  </aside> 
  <nav>
    <div className="grid grid-flow-col gap-4">
    <div>
                    <div className='hover:"facebook"'> <button>  <a href="https://www.facebook.com/groups/webdevelopmentbatch9?sorting_setting=CHRONOLOGICAL"><FaFacebook  style={iconStyle} className='text-blue-800 border-black border bg-[#FCFBF4]' /></a> </button></div>
                </div>
                <div>
                    <div className=''> <button>  <a href="https://www.facebook.com/groups/webdevelopmentbatch9?sorting_setting=CHRONOLOGICAL"><FaWhatsapp style={iconStyle} className='text-[#FCFBF4] bg-green-500' /></a> </button></div>
                </div>
                <div>
                    <div className=''> <button>  <a href="https://www.facebook.com/groups/webdevelopmentbatch9?sorting_setting=CHRONOLOGICAL"><FaDiscord style={iconStyle} className='text-[#FCFBF4] bg-blue-500' /></a> </button></div>
                </div>
                <div>
                    <div className=''> <button>  <a href="https://www.facebook.com/groups/webdevelopmentbatch9?sorting_setting=CHRONOLOGICAL"><FaTelegram style={iconStyle} className='text-[#FCFBF4] bg-blue-800' /></a> </button></div>
                </div>
    </div>
  </nav>
</footer>
            
        </div>
    );
};

export default Footer;