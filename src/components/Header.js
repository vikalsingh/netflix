import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Images } from "../utils/images";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmount
    return () => {
      unsubscribe();
    };
  }, []);

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
