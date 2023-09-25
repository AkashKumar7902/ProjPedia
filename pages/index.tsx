import * as React from 'react';
import {useEffect} from 'react';
import Head from 'next/head';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import useSWR from 'swr';

import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import ProjectComp from '../components/projectElement'
import { allProjectDataState } from '@/atoms';

const fetcher = url => axios.get(url).then(res => res.data);

const Home = () => {
  const {data, isLoading, error} = useSWR('/api/show', fetcher);
  console.log(data);
  return (
    <>
      <Head>
        <title>ProjPedia</title>
        <meta name='description' content='ProjPedia Home Page' />
        <link rel='icon' href='https://cdn.discordapp.com/attachments/1053686321908023418/1155204080491307118/final.png' />
      </Head>
      <SearchBar/>
      <FilterBar/>
      <div className="flex flex-col bg-gray-200 relative outline outline-1 outline-gray-400 rounded-md md:mx-24 mx-3 md:mt-7 mt-4">
         {data && data.map((project) => (
            <ProjectComp key={project.name} projectDetails={project}/>
         ))}
      </div>
    </>
  );
};

export default Home;
