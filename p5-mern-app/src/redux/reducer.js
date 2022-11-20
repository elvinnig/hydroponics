// Imports
import Drivers from '../data/drivers.json';
import Taxis from '../data/taxis.json';

// Initial data
const initialData = {
    drivers: Drivers,
    taxis: Taxis
};

const reducer = (
    state = initialData,
    action
) => {

    switch( action.type ){
        default:
            return state;
    }

}

export default reducer;
