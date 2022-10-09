import React, {useEffect, useState} from 'react';
import SongwriterAPI from '../utils/SongwriterAPI';
import '../styles/components/song-list.css';

export function SongListComponent({setActualSongId}: { setActualSongId: Function }) {
    const [songListItems, setSongListItems] = useState<JSX.Element[]>()


    useEffect(() => {
        SongwriterAPI.getSongs()
            .then(songs => {
                setSongListItems(songs.map((song) => {
                    return <button className='song-list__item'
                                   key={song.id}
                                   onClick={() => setActualSongId(song.id)}>
                        {song.title}
                    </button>
                }));

            })
    }, [])

    return (
        <div className='song-list'>
            <div className="song-list__header">Выберите песню</div>
            <div className="song-list__items">
                {songListItems}
            </div>
        </div>
    );
}