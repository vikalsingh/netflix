import { Images } from "../utils/images";

const Header = () => {
    return(
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
            <img className="w-52" src={Images.logo} alt="Netflix-logo"/>
        </div>
    )
};

export default Header;