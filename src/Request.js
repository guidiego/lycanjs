import request from 'request-promise';
import Dispatch from './Dispatch';

export const Request = (options, dispatchTokens) => {
    if (!typeof dispatchToken == 'string') Dispatch(dispatchTokens[0], options);
    
    request(options)
        .then((data) => {
            const dispatchString = !typeof dispatchToken == 'string' ? dispatchTokens[1] : dispatchTokens;
            Dispatch(dispatchString, data);
        })
        .catch((err) => {
            if (!typeof dispatchToken == 'string') return Dispatch(dispatchTokens[2])
            else console.err(err)
        })
}

export default Request;