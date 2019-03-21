export const explore = {getAll}
function getAll(params) {
    const requestOptions = {
        method: 'GET',
        // headers: { 'Content-Type': 'application/json' },
    };

    return fetch(`http://www.omdbapi.com/?${query(params)}`, requestOptions)
        .then(handleResponse)
        .then(data => {

            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('data', JSON.stringify(data));

            return data;
        });
}

function handleResponse(response) {
    debugger;
    return response.json().then(text => {
        debugger;
        const data = text ;
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                // logout();
                // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

function query(params){
    return Object.keys(params)
             .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
             .join('&');
     
}