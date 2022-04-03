import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { capitalizeFirstLetter } from '../../helpers/stringHelpers';
import "./PlanetCard.scss";

interface IPlanet {
  name: string,
  terrain: string
  population: string
}


export default function PlanetCard({planet}: {planet: IPlanet}) {
  return (
    <div className='PlanetCardMainContainer'>
      <div>
      <img className='PlanetCardImage' src={require('../../assets/alderaan.jpg')} />
      </div>
      <div className='PlanetCardInfoContainer'>
        <div className='PlanetCardLeftInfo'>
          <p className='PlanetCardPlanetName'>
            {planet.name}
          </p>
          <p className='PlanetCardPlanetTerrain'>
            {capitalizeFirstLetter(planet.terrain)}
          </p>
          <p>
            {planet.population !== "unknown" ? `Population of ${planet.population}` : "Unknown population"}
          </p>
        </div>
        <div className='PlanetCardRightInfo'>
            <FaUserCircle className='PlanetCardUserIcon' />
            <FaUserCircle className='PlanetCardUserIcon'/>
            <FaUserCircle className='PlanetCardUserIcon'/>
        </div>
      </div>
    </div>
  )
}