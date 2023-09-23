import type { NextPage } from 'next';
import Head from 'next/head';
import { useRecoilState } from 'recoil';

import CommonLayout from '../components/Layout';

const Home = () => {
  return (
    <>
      <Head>
        <title>ProjPedia</title>
        <meta name='description' content='ProjPedia Home Page' />
        <link rel='icon' href='https://cdn.discordapp.com/attachments/1053686321908023418/1155204080491307118/final.png' />
      </Head>

      <CommonLayout>
        
      </CommonLayout>
    </>
  );
};

export default Home;
