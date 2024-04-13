
import 'animate.css';
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import contactImg from "../../../public/contact.png";




const Contact = () => {
    const divStyle={
        boxShadow:'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;'
    }
    const iconStyle={ 
        fontSize:'40px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'10px',
        padding:'5px 0',
        shadow:'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'
    }
    return (
        <div className='mt-5 bg-[#E2EDE2] rounded-md sm:shadow-none '  style={divStyle}>
<section className="p-4 lg:p-8  ">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md  lg:flex-row">
			<img src={contactImg} alt="" className=" dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<span className="text-xs uppercase dark:text-gray-600">Feel free to</span>
				<h3 className="text-4xl font-bold">Contact with us any time</h3>
				<p className='my-4'>
                For seamless access to rental homes or apartments, our dedicated team operates around the clock to provide you with exceptional service. Don't hesitate to reach out to us anytime you need assistance. Your satisfaction is our priority, and we're here to help whenever you require it.
                </p>

                <div className='flex justify-around'>
                <div>
                    <div className=''>   <a className=" " href="https://www.facebook.com/groups/webdevelopmentbatch9?sorting_setting=CHRONOLOGICAL">
                    <button className='animate__shakeY'><FaFacebook   style={iconStyle} className='text-blue-800 bg-[#FCFBF4]' /></button></a> </div>
                </div>
                <div>
                    <div className="animate__pulse hover:animate__pulse hover:bg-red-600"> <button>  <a href="https://www.facebook.com/groups/webdevelopmentbatch9?sorting_setting=CHRONOLOGICAL"><FaWhatsapp style={iconStyle} className='text-[#FCFBF4] bg-green-500' /></a> </button></div>
                </div>
                <div>
                    <div className=''> <button>  <a href="https://www.facebook.com/groups/webdevelopmentbatch9?sorting_setting=CHRONOLOGICAL"><FaDiscord style={iconStyle} className='text-[#FCFBF4] bg-blue-500' /></a> </button></div>
                </div>
                <div>
                    <div className=''> <button>  <a href="https://www.facebook.com/groups/webdevelopmentbatch9?sorting_setting=CHRONOLOGICAL"><FaTelegram style={iconStyle} className='text-[#FCFBF4] bg-blue-800' /></a> </button></div>
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