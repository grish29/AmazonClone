import "./Payment.css";
import { useStateValue } from "./StateProvider";

function Payment() {
	const [{ basket, user }, dispatch] = useStateValue();

	return (
		<div className="payment">
			<div className="payment__container">
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>{user?.email}</p>
						<p>221b Baker St</p>
						<p>London NW1 6XE, United Kingdom</p>
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Review items and delivery</h3>
					</div>
					<div className="payment__address">
						<p>{user?.email}</p>
						<p>221b Baker St</p>
						<p>London NW1 6XE, United Kingdom</p>
					</div>
				</div>
				<div className="payment__section"></div>
			</div>
		</div>
	);
}
export default Payment;
