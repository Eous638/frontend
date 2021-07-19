import { observable } from "mobx";
import { createContext } from "react";

class descriptionStore{
    @observable title = 'fart';
    @observable desc = 'kenjac';
}

export const descriptionStoreContext = createContext(new descriptionStore())