import { createSlice } from '@reduxjs/toolkit';
import stations from '../data/stations';

const initialState = {
    value: false,
    radios: [...stations],
}

export const radioSlice = createSlice({
    name: 'radio',
    initialState,
    reducers: {
        toggleRadio: (state, action) => {
             state.radios.find(radio => {
                if(radio.id === action.payload){
                    radio.isPlaying = !radio.isPlaying;
                } else {
                    radio.isPlaying = false;
                }
            });
        },
        
        searchRadio: (state, action) => {
            state.radios.filter((station) => station.name.toLowerCase().includes(action.payload.toLowerCase()));
        }

        
    }
});

export const { toggleRadio, searchRadio } = radioSlice.actions;

export default radioSlice.reducer;