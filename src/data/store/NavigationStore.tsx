import {makeAutoObservable} from "mobx";

export class NavigationStore {

    currentItemId: string = 'main'


    constructor() {
        makeAutoObservable(this)
    }


    setCurrentItemId(id: string) {
        this.currentItemId = id;
    }
}