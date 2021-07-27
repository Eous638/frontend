import { observable } from "mobx";
import { createContext } from "react";

class descriptionStore{
    @observable title = '';
    @observable desc = '';
    @observable image = '';
}

export const descriptionStoreContext = createContext(new descriptionStore())