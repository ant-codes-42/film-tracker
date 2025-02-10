import type React from 'react';
// TODO: Uncomment when Film interface is added
import type Film from '../utils/interfaces/Film.interface';
import FilmCard from './FilmCard';

// TODO: Define watchListFilmProps
interface WatchListFilmProps {
  filmsToWatch: Film[],
  removeFromStorage:
  | ((
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    currentlyOnWatchList: boolean | null | undefined,
    currentlyOnSeenItList: boolean | null | undefined,
    title: string | null
  ) => void)
  | null;
}

// TODO: Destructure filmsToWatch from props
const FilmsToWatchList = ({ filmsToWatch, removeFromStorage }: WatchListFilmProps) => {
  console.log(filmsToWatch);

  return (
    <>
      <ul>
        {filmsToWatch.map((film: Film) => (
          <FilmCard
            currentFilm={film}
            key={film.Title}
            onWatchList={true}
            removeFromStorage={removeFromStorage}
          />
        ))}
      </ul>
    </>
  );
};

export default FilmsToWatchList;
