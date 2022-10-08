import React, {useEffect, useState} from 'react';

import SongwriterAPI from "../utils/SongwriterAPI";
import {Song} from "../models/Song";


function SongComponent({id}: { id: number | null }) {
    const [song, setSong] = useState(new Song());

    useEffect(() => {
        SongwriterAPI.getSong(id)
            .then(response => {
                let song = new Song(response.title, response.id, response.songcontent);
                setSong(song);
            });
    }, [id]);

    return (
        <div>
            <div>
                {song.title !== null ? song.title : 'Песня не выбрана'}
                {song.getJSXContent()}
            </div>

            <div>
            </div>
        </div>
    );
}

export default SongComponent;
