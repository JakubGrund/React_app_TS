import React, {ChangeEvent, FormEvent, useState,} from 'react'

interface Props {
    
}

//component

const Tunes = (props: Props) => {

    // state

    const [query, setQuery] = useState('')
    const [songs, setSongs] = useState([
        { id: 1, artist: 'Jakub', name: 'Great Song'},
        {id: 2, artist: 'Tata', name: 'Promise'},
        {id: 3, artist: 'Cold', name: 'Is Love'}

    ])

    // form submit

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const newSong = {
            id: Math.max(...songs.map(s => s.id)) + 1,
            artist: query,
            name:query
        }

        setSongs([
            ...songs, newSong
        ])
    }

    // input element

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {

        setQuery(e.target.value)
    }

    // template 

    return (
        <div className = "tunes"> 
            <h1> Tunes </h1>
            
            <p>{query}</p>
            <form onSubmit= {handleSubmit}>
                <input type="text" value={query} onChange={handleInput} />
            </form>

            <ul>
                {songs.map(song => (
                    <p key={song.id}>{JSON.stringify(song)}</p>
                ))}
            </ul>
        </div>
    )
}

export default Tunes