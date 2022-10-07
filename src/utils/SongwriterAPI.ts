/**
 * Class to simplify interaction with the Songwriter API
 */
import {Song} from "../models/Song";

class SongwriterAPI {
    baseURL = 'http://songwriter.ru/api/';
    songsURL = 'songs'

    async getSongs() {
        return this.fetchGet<Array<Song>>(this.songsURL);
    }

    async getSong(song_id: number) {
        return this.fetchGet<{ id: number; title: string; songcontent: object; created_at: "string"; updated_at: "string" }>(this.songsURL + "/" + song_id);
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