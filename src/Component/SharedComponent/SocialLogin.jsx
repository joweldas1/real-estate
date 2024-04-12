  import useAuth from "../../Pages/useAuth/useAuth";
  import { FaGoogle } from "react-icons/fa";
  import { FaGithub } from "react-icons/fa";


  import { useLocation, useNavigate } from "react-router-dom";
  const SocialLogin = () => {
    const { googleLogin, gitLogin } = useAuth();
    const location = useLocation();
    const place = location?.state || "/";
    const navigate = useNavigate();

    const social = (socialProvider) => {
      socialProvider().then((results) => {
        const result = results.user;
        if (result) {
          console.log(result);
          return navigate(place);
        }
      });
    };

    return (
      <div className="flex flex-col mt-4 md:w-1/2 mx-auto gap-3">
        <button
          className="btn bg-[#3D8AFF  ] mx-7 border border-black"
          onClick={() => social(googleLogin)}
        >
                    <span><FaGoogle className="text-[#4285F4]"/> </span>
                    <span className="text-[#000000]"> Continue with google</span>

         
        </button>
        <button
          className="btn  bg-[#3D8AFF  ] mx-7 border border-black"
          onClick={() => social(gitLogin)}
        >
          <span><FaGithub className="text-[#000000]"/> </span>
                    <span className="text-[#000000]">   Continue with github</span>

        
        </button>
      </div>
    );
  };

  export default SocialLogin;
