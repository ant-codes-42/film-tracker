import type React from 'react';
// TODO: Uncomment when Film interface is added
import type Film from '../utils/interfaces/Film.interface';
import { IoEyeOutline } from 'react-icons/io5';
import { ImCross } from 'react-icons/im';
import { CgPlayListAdd } from 'react-icons/cg';

// TODO: Define FilmCardProps
type FilmCardProps = {
  currentFilm: Film,
  onSeenItList?: boolean | null,
  onWatchList?: boolean | null,
  addToWatchList?(): void | null,
  addToSeenItList?(): void | null,
  removeFromStorage?:
      | ((
          e: React.MouseEvent<SVGSVGElement, MouseEvent>,
          currentlyOnWatchList: boolean | null | undefined,
          currentlyOnSeenItList: boolean | null | undefined,
          title: string | null
        ) => void)
      | null;
};

const FilmCard = ({currentFilm, onSeenItList, onWatchList, addToWatchList, addToSeenItList, removeFromStorage}: FilmCardProps) => {
  return (
    <>
      {currentFilm?.Title ? (
        <section className='filmCard'>
          <figure>{currentFilm.Poster && <img src={currentFilm.Poster} />}</figure>
          <article className='details'>
            {/* TODO: Add film title, director, actors, released, and genre */
            <p>{currentFilm.Title}</p>}{<p>{currentFilm.Director}</p>}{<p>{currentFilm.Actors}</p>}
            {<p>{currentFilm.Released}</p>}{<p>{currentFilm.Genre}</p>}
          </article>
          <article className='plot'>{/* TODO: Add film plot here */<p>{currentFilm.Plot}</p>}</article>
          {/* If film is on Watch List or Seen It list film can be removed
              Else film can be added to Watch List or Seen It list */}
          {onWatchList || onSeenItList ? (
            <aside className='icons'>
              {/* TODO: Add remove film from localStorage logic here */}
              <ImCross style={{ fontSize: '40px', cursor: 'pointer' }} 
              onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) =>
                removeFromStorage?.(
                  e,
                  onWatchList,
                  onSeenItList,
                  currentFilm.Title
                )
              }/>
            </aside>
          ) : (
            <aside className='icons'>
              {/* TODO: Implement add to WatchList logic here*/}
              <CgPlayListAdd style={{ fontSize: '50px', cursor: 'pointer' }} 
              onClick={() => addToWatchList?.()}/>
              {/* TODO: Implement add to Seen It list logic here*/}
              <IoEyeOutline style={{ fontSize: '50px', cursor: 'pointer' }}
              onClick={() => addToSeenItList?.()} />
            </aside>
          )}
        </section>
      ) : (
        <h1 style={{ margin: '16px 0' }}>Please search for a film.</h1>
      )}
    </>
  );
};

export default FilmCard;
