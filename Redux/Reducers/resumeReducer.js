import {SET_RESUME_DATA, SAVE_RESUME_DATA} from "../Types";

const initialState = {
	resumeData:{}
};

export default function(state = initialState, action){
	switch(action.type){
		case SET_RESUME_DATA:
			return{
				...state,
				firstPageLoaded:true
			}
		case SAVE_RESUME_DATA:
			return{
				...state,
				resumeData:action.payload,
				loading:false
			}
			default:
				return state;
	}
}