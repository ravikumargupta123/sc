import {explore} from '../_services/explore.service'
import { alertActions } from './';

function exploreView(params) {
    debugger;
    return dispatch => {
        // dispatch(request);

        explore.getAll(params)
            .then(
                data => { 
                    dispatch(success(data));
                },
                error => {
                    // dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    // function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(data) { return { type: 'EXPLORE', data } }
    // function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

export default exploreView;