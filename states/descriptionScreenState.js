import { observable } from "mobx";
import { createContext } from "react";

class descriptionStore{
    @observable title = 'fart';
    @observable desc = 'kenjac';
    @observable image = 'https://static.remove.bg/remove-bg-web/3661dd45c31a4ff23941855a7e4cedbbf6973643/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png'
}

export const descriptionStoreContext = createContext(new descriptionStore())