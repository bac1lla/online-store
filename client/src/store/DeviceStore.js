import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Холод'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Xiaomi'},
        ]
        this._devices = [
            {id: 1, name: 'IPhone 10', price: 25000, rating: 5, img: 'https://main-cdn.sbermegamarket.ru/hlr-system/1691563/100023348274b0.jpg'},
            {id: 2, name: 'IPhone 10', price: 25000, rating: 5, img: 'https://main-cdn.sbermegamarket.ru/hlr-system/1691563/100023348274b0.jpg'},
            {id: 3, name: 'IPhone 10', price: 25000, rating: 5, img: 'https://main-cdn.sbermegamarket.ru/hlr-system/1691563/100023348274b0.jpg'},
            {id: 4, name: 'IPhone 10', price: 25000, rating: 5, img: 'https://main-cdn.sbermegamarket.ru/hlr-system/1691563/100023348274b0.jpg'},
            {id: 5, name: 'IPhone 10', price: 25000, rating: 5, img: 'https://main-cdn.sbermegamarket.ru/hlr-system/1691563/100023348274b0.jpg'}
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}