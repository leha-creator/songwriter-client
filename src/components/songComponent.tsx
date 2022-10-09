import React, {useEffect, useState} from 'react';
import SongwriterAPI from '../utils/SongwriterAPI';
import {Song} from '../models/Song';
import '../styles/components/song.css';


export function SongComponent({id}: { id: number | null }) {
    const [song, setSong] = useState(new Song());

    useEffect(() => {
        SongwriterAPI.getSong(id)
            .then(response => {
                let song = new Song(response.title, response.id, response.songcontent);
                setSong(song);
            });
    }, [id]);

    return (
        <div className="song">
            {song.title !== null ? <div className="song__title">{song.title}</div> : 'Песня не выбрана'}
            <div className="song__content">
                {song.getJSXContent()}
            </div>
        </div>
    );
}
