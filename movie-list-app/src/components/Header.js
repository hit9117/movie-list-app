import React from 'react';
import '../styles/header.css';
const Header = ({ genreMap, setSelectedGenre, selectedGenre }) => {
    return (
        <div className="header">
            <h1>Movies</h1>
            <div className="genre-list">
                <button onClick={(() => {
                    setSelectedGenre([])
                })} style={{ background: `${selectedGenre.length === 0 ? "#ed5151" : "#f5d7d7"}` }}>All</button>
                {Object.entries(genreMap).map(([id, name]) => (
                    <button key={id} onClick={(() => {
                        if (selectedGenre.includes(id))
                            setSelectedGenre(selectedGenre.filter((item) => item != id));
                        else
                            setSelectedGenre([...selectedGenre, id])
                    })} style={{ background: `${selectedGenre.includes(id) ? "#ed5151" : "#f5d7d7"}` }}>{name}</button>
                ))}
            </div>
        </div>
    );
};

export default Header;
