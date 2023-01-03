import { observable } from "mobx";
import { createContext } from "react";

class descriptionStore{
    @observable title = '';
    @observable desc = '';
    @observable image = '';
    @observable markers = [];
    @observable startlang = "";
    @observable startlat = "";
}

export const descriptionStoreContext = createContext(new descriptionStore())