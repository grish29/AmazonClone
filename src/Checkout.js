import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
	const [{ basket, user }, dispatch] = useStateValue(); //fetches the basket, so it can be used

	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					className="checkout__ad"
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
					alt=""
				/>
				<div>
					<h3>Hello, {user?.email}</h3>
					<h2 className="checkout__title">Your Shopping Basket</h2>
					{/*CheckoutProduct */}
					{/*CheckoutProduct */}
					{/*dummy set*/}
					{/*<CheckoutProduct
						id="1244"
						title="Testinggg lorem ipsum blob lorem ipsum blob lorem ipsum blob lorem ipsum blob"
						image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
						price={123.99}
						rating={5}
					/>
					
					<CheckoutProduct
						id="1244"
						title="Testinggg lorem ipsum blob lorem ipsum blob lorem ipsum blob lorem ipsum blob"
						image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
						price={123.99}
						rating={5}
					/>
	*/}
					{basket.map((item) => (
						<CheckoutProduct
							id={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							rating={item.rating}
						/>
					))}
				</div>
			</div>
			<div className="checkout__right">
				<Subtotal />
			</div>
		</div>
	);
}
export default Checkout;
