import React from "react";
import { Button } from "./Button";

import '../styles/sidebar.scss';

interface SideBarProps
{// array de genres
  genres: Array<{
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;}>;
  handleClickButton: Function;
  selectedGenreId: number;
}

// tipando dentro e transformando em array
export const SideBar = ({genres, handleClickButton, selectedGenreId} : SideBarProps) => (
  <nav className="sidebar">
  <span>Watch<p>Me</p></span>

  <div className="buttons-container">
    {genres.map(genre => (
      <Button
        id={String(genre.id)}
        title={genre.title}
        iconName={genre.name}
        onClick={() => handleClickButton(genre.id)}
        selected={selectedGenreId === genre.id}
      />
    ))}
  </div>

</nav>
)
