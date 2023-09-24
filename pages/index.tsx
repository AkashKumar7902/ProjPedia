import type { NextPage } from 'next';
import Head from 'next/head';

import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import ProjectComp from '../components/projectElement'

const Home = () => {
  return (
    <>
      <Head>
        <title>ProjPedia</title>
        <meta name='description' content='ProjPedia Home Page' />
        <link rel='icon' href='https://cdn.discordapp.com/attachments/1053686321908023418/1155204080491307118/final.png' />
      </Head>
      <SearchBar/>
      <FilterBar/>
      <div className="flex flex-row bg-gray-200 relative outline outline-1 outline-gray-400 rounded-md md:mx-24 mx-3 md:mt-7 mt-4">
         <ProjectComp />
      </div>
    </>
  );
};

export default Home;
