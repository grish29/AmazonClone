export const initialState = {
	basket: [],
	user: null,
};

//selector
export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0);

//reducer is the one which dispatched that item into the
//data layer
//REDUCER is something that is always just listening
const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "ADD_TO_BASKET":
			return {
				...state,
				basket: [...state.basket, action.item],
			};

		case "REMOVE_FROM_BASKET":
			// return {
			// 	...state,
			// 	basket: state.basket.filter((item) => item.id != action.id),
			// };
			//this will remove all quantities of same entity, instead of deleting one of them

			const index = state.basket.findIndex(
				(basketItem) => (basketItem.id = action.id)
			);

			let newBasket = [...state.basket];

			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.warn(
					"Cant remove product (id : ${action.id}) as its not in the basket"
				);
			}

			return {
				...state,
				basket: newBasket,
			};

		case "SET_USER":
			return {
				...state,
				user: action.user,
			};

		default:
			return state;
	}
};

export default reducer;
