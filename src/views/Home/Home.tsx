import React, { useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import PlanetCard from '../../components/PlanetCard/PlanetCard';
import { until, useMediaQuery } from '../../hooks/media';
import usePlanets from '../../hooks/planets';

export default function Home() {
  const {planets} = usePlanets("/");
  const isMobile = useMediaQuery(until.mobile);
  const isTablet = useMediaQuery(until.tablet) && !isMobile;
  const isDesktop = !isMobile && !isTablet;

  useEffect(() => {
    console.log("planets",planets)
  
  }, [planets])

  return (
    <Layout>
      {planets && Array.isArray(planets) && planets.length>0 ? 
       planets.map((planet: any) => {
         return <PlanetCard planet={planet} />
       })
      
      :
      <div>Loading</div>}
    </Layout>
  );
}