import React from "react";

/**
 * Song model
 */

export interface ISong {
    title: string | null;
    id: number | null;
    songcontent: ISongPart[] | undefined;
}

export interface ISongPart {
    type: string;
    text: string;
}

export class Song implements ISong {

    id: number | null = null;
    songcontent: ISongPart[] | undefined = undefined;
    title: string | null = null;

    constructor(title?: string | null, id?: number | null, songcontent?: ISongPart[] | string | null) {
        if (typeof title !== "undefined") {
            this.title = title;
        }
        if (typeof id !== "undefined") {
            this.id = id;
        }

        if (typeof songcontent == "string") {
            this.songcontent = JSON.parse(songcontent);
        } else if (songcontent !== null) {
            this.songcontent = songcontent;
        }
    }

    getJSXContent() {
        if (Array.isArray(this.songcontent)) {
            let JSXSongContent = [];
            for (let songPartIndex in this.songcontent) {
                JSXSongContent.push(
                    <div key={songPartIndex}>
                        {this.songcontent[Number(songPartIndex)].text}
                    </div>
                );
            }

            return JSXSongContent;
        }

        return (<div>Что-то пошло нет так</div>);
    }

}
