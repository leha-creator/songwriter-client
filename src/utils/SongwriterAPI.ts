/**
 * Class to simplify interaction with the Songwriter API
 */

import {Song} from "../models/Song";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

class SongwriterAPI {
    baseURL = 'http://songwriter.ru/api/';
    songsURL = 'songs'

    async getSongs() {

    }

    async getSong(song_id: number, setSongFunc: any) {

        await this.fetchGet<{ id: number; title: string; songcontent: object; created_at: "string"; updated_at: "string" }>(this.songsURL + "/" + song_id)
            .then(({id, title, songcontent, created_at, updated_at}) => {
                setSongFunc(title);
            })
            .catch(error => {
            });

    }

    async fetchGet<T>(url: string): Promise<T> {
        return fetch(this.baseURL + url)
            .then(response => {
                if ((!response.ok)) {
                    throw new Error(response.statusText);
                }
                return response.json()
            });

    }
}

export default new SongwriterAPI;