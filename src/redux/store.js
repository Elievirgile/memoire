import { configureStore } from "@reduxjs/toolkit";
import menuStateReducer from './menuStateSlice';

export default configureStore ({
    reducer: {
        menuState: menuStateReducer
    }
});