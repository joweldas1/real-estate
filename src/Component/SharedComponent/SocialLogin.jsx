  import useAuth from "../../Pages/useAuth/useAuth";
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
      <div>
        <button
          className="btn bg-blue-600 text-white"
          onClick={() => social(googleLogin)}
        >
          Continue with google
        </button>
        <button
          className="btn bg-blue-600 text-white"
          onClick={() => social(gitLogin)}
        >
          Continue with github
        </button>
      </div>
    );
  };

  export default SocialLogin;
