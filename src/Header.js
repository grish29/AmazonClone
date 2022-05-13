import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
	const [{ basket, user }, dispatch] = useStateValue();

	const handleAuthentication = () => {
		if (user) {
			//if there was a user already logged in, it will sign out
			auth.signOut();
		}
	};
	return (
		<div className="header">
			<Link to="/">
				<img
					className="header__logo"
					src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
				/>
			</Link>

			<div className="header__search">
				<input className="header__searchInput" type="text" />
				{/* logo */}
				<SearchIcon className="header__searchIcon"></SearchIcon>
			</div>

			<div className="header__nav ">
				<Link to={!user && "/login"}>
					<div onClick={handleAuthentication} className="header__option">
						<span className="header__optionLineOne">
							Hello {!user ? "Guest" : user.email}
						</span>
						<span className="header__optionLineTwo">
							{user ? "Sign Out" : "Sign In"}
						</span>
					</div>
				</Link>
				<div className="header__option">
					<span className="header__optionLineOne">Returns</span>
					<span className="header__optionLineTwo">& Orders</span>
				</div>

				<div className="header__option">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>
				<Link to="/checkout">
					<div className="header__optionBasket">
						<ShoppingBasketIcon />
						<span className="header__optionLineTwo header__basketCount">
							{basket?.length}
							{/* this ? will gracefully handle the value incase its undefined,etc */}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}
export default Header;