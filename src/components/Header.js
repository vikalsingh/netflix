import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Images } from "../utils/images";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  console.log(auth, user);
  return (
    <div className="flex justify-between w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-52" src={Images.logo} alt="Netflix-logo" />
      {user && (
        <div className="pt-6 px-8">
          <img className="w-10" src={user?.photoURL} alt="user Icon" />
          <span onClick={handleSignOut} className="cursor-pointer font-bold">
            (Sign out)
          </span>
        </div>
      )}
    </div>
  );
};

export default Header;
