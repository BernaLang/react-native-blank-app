import { combineReducers } from 'redux';

const INITIAL_STATE = {
	username: 'BernaLang',
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default combineReducers({
	user: userReducer,
});
