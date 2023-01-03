import { observable } from "mobx";
import { createContext } from "react";

class languageStore{
    @observable language = "sr";
}

export const languageStoreContext = createContext(new languageStore())