/**
 * Song model
 */

export class Song {
    title : string | null = null;
    id : number | null = null;

    constructor(title = null, id = null) {
        this.title = title;
        this.id = id;
    }

}
