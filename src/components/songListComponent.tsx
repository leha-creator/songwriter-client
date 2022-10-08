import React, {useEffect, useState} from 'react';

import SongwriterAPI from "../utils/SongwriterAPI";

function SongListComponent({setActualSongId} : {setActualSongId : Function}) {
    const [songListItems, setSongListItems] = useState<JSX.Element[]>()


    useEffect(() => {
        SongwriterAPI.getSongs()
            .then(songs => {
                setSongListItems(songs.map((song) => {
                    return <button key={song.id} onClick={() => setActualSongId(song.id)}>{song.title}</button>
                }));

            })
    }, [])

    return (
        <div>
            {songListItems}
        </div>
    );
}

export default SongListComponent;
