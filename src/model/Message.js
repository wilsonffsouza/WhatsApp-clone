import { Model } from "./Model";

export class Message extends Model {

    constructor() {
        super();
    }

    get content() { return this._data.content; }
    set content(valeu) { return this._data.content = value; }

    get type() { return this._data.type; }
    set type(valeu) { return this._data.type = value; }

    get timeStamp() { return this._data.timeStamp; }
    set timeStamp(valeu) { return this._data.timeStamp = value; }

    get status() { return this._data.status; }
    set status(valeu) { return this._data.status = value; }

    getViewElement() {

        let div = document.createElement('div');

        div.className = 'message';

        switch (this.type) {

            case 'contact':

                div.innerHTML = ``;

                break;

            case 'image ':

                div.innerHTML = ``;

                break;

            case 'document':

                div.innerHTML = ``;

                break;

            case 'audio':

                div.innerHTML = ``;
                break;

            default:
        }

    }
}