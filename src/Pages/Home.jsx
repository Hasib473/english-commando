import React from 'react';
import Hero from '../Component/Home/Hero';
import Fluency from '../Component/Home/Fluency';
import Roadmap from '../Component/Home/Roadmap';
import Card from '../Component/Home/Card';
import Curriculam from '../Component/Home/Curriculam';
import Bonus from '../Component/Home/Bonus';
import Disclaimer from '../Component/Home/Disclaimer';
import Garunty from '../Component/Home/Garunty';
import Cirtificate from '../Component/Home/Cirtificate';
import Join from '../Component/Home/Join';

const Home = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Hero />
      <Fluency />
      <Roadmap />
      <Card />
      <Curriculam />
      <Bonus />
      <Disclaimer />
      <Garunty />
      <Cirtificate />
      <Join />
    </main>
  );
};

export default Home;
