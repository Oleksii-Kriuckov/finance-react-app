import { makeAutoObservable } from "mobx";

class ArrayTikers {
    constructor() {
        this._arrTickers = [];
        this._responce = [];
        makeAutoObservable(this);
    }

    setArrTickers(array) {
        this._arrTickers = array;
    };
    setResponce(value) {
        this._responce = value;
    }
    get responce() {
        return this._responce;
    }

    get arrTickers() {
        return this._arrTickers
    }
}

export default ArrayTikers