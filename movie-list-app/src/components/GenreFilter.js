import React, { useState, useEffect } from 'react';

const GenreFilter = ({ genres, selectedGenres, onGenreSelect }) => {
  const [allGenres, setAllGenres] = useState([]); // Store all available genres

  useEffect(() => {
    setAllGenres(genres); // Set initial genres on component mount
  }, [genres]);

  const handleGenreChange = (event) => {
    const selectedOption = event.target.value;
    const newSelectedGenres = [...selectedGenres]; // Copy existing selection

    if (selectedOption === 'all') {
      // Clear selection for "all" option
      newSelectedGenres.length = 0;
    } else {
      if (newSelectedGenres.includes(selectedOption)) {
        // Remove genre if already selected
        const index = newSelectedGenres.indexOf(selectedOption);
        newSelectedGenres.splice(index, 1);
      } else {
        // Add genre if not already selected
        newSelectedGenres.push(selectedOption);
      }
    }

    onGenreSelect(newSelectedGenres); // Pass updated selection to parent component
  };

  return (
    <div className="genre-filter">
      <h2>Filter by Genre</h2>
      <select value={selectedGenres.length === 0 ? 'all' : selectedGenres.join(',')} onChange={handleGenreChange}>
        <option value="all">All Genres</option>
        {allGenres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;
