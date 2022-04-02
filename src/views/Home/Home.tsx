import React, { useEffect } from 'react';
import { from, until, useMediaQuery } from '../../hooks/media';
import usePlanets from '../../hooks/planets';

export default function Home() {
  const {planets} = usePlanets("/");
  const isMobile = useMediaQuery(until.mobile);
  const isTablet = useMediaQuery(until.tablet) && !isMobile;
  const isDesktop = useMediaQuery(from.desktop);


  useEffect(() => {
    console.log("planets",planets)
  
  }, [planets])
  

 
  

  return (
    <div>
      HomeScreen
      {isMobile && <div>Mobile</div>}
      {isTablet && <div>Tablet</div>}
      {isDesktop && <div>Desktop</div>}
      {planets && Array.isArray(planets) && planets.length>0 ? 
       planets.map((planet: any) => {
         return <div>{planet.name}</div>
       })
      
      :
      <div>Loading</div>}
    </div>
  );
}