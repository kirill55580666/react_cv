import {makeAutoObservable} from "mobx";


export default class Store {
    sizeImage = 450;
    smallSize = 650;
    bigSize = 900;
    sizeElement = 70;

    constructor() {
        makeAutoObservable(this);
    }

    setSizeImage(size: number) {
        this.sizeImage = size;
    }
    setSmallSize(size: number) {
        this.smallSize = size;
    }
    setBigSize(size: number) {
        this.bigSize = size;
    }
    setSizeElement(size: number) {
        this.sizeElement = size;
    }

}