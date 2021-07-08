import axios from "axios";
import {SET_RESUME_DATA, SAVE_RESUME_DATA, LOADING_UI, STOP_LOADING_UI} from "../Types";

export const saveResume = (Resumestate) =>(dispatch)=>{
	dispatch({type:LOADING_UI});
	const resumeState = Resumestate
	dispatch({
		type:SAVE_RESUME_DATA,
		payload:resumeState
	});
}