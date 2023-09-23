import * as React from 'react';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

import Navbar from './navbar';


export default function CommonLayout() {

  return (
    <>
      <div className='min-h-full'>
        <Navbar />
        <main>
          <div className='mx-auto max-w-7xl py-6 px-4'>

          </div>
        </main>
      </div>
    </>
  );
}
