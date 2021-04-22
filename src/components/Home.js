import React from 'react';
import Options from './Options';
import ImgAllBeers from '../assets/beers.png';
import ImgRandomBeer from '../assets/random-beer.png';
import ImgNewBeer from '../assets/new-beer.png';

export default function Home() {
  return (
    <div>
      <Options
        image={ImgAllBeers}
        title="All Beers"
        resume="dhasidisahdsaihudhisai"
        to="/allbeers"
      />
      <Options
        image={ImgRandomBeer}
        title="Random Beer"
        resume="dhasidisahdsaihudhisai"
        to="/random"
      />
      <Options
        image={ImgNewBeer}
        title="New Beer"
        resume="dhasidisahdsaihudhisai"
        to="/new"
      />
    </div>
  );
}
