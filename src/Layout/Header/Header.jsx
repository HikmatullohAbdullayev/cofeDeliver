// import  Nav  from "../../components/Nav.jsx";
import logo from "../../assets/img/Logo.png"
import loc from "../../assets/img/location.png"
import cartTop from "../../assets/img/cart.png"
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="py-[20px] flex justify-between items-center">
                <Link to="/">
             <div className="">
                  <img className="" src={logo} alt="logo" />
            </div>
                </Link>
                <div className="flex justify-between items-center  gap-2">
                    <div className="flex justify-between items-center  gap-2 bg-[#EBE5F9] py-[10px] px-[8px] rounded-[12px]">
                        <img src={loc} alt="location" />
                        <p>Tashkent, Uzbekistan</p>
                    </div>
                    <Link to="/check-out" >
                    <img src={cartTop} alt="cart" />
                    </Link>
                </div>
        </div>
    );
}

export default Header;