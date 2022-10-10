import {configureStore} from '@reduxjs/toolkit';
import Carthide from "./hidecart"
import productsincdec from './productincrease';
const store= configureStore({reducer:{products:productsincdec,hide:Carthide}},)
export default store;