import * as React from 'react';
import {
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

import { useRecoilState } from 'recoil';
import {useState, useEffect} from 'react';

import Suggestion from './Suggestion';
import {searchResultsState, hideSearchState, hideInstituteState, hideSubjectState, hideYearState, hideSortState} from '../../atoms/index'

export default function SearchBar() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [hideSearch, setHideSearch] = useRecoilState(hideSearchState); // hide suggestion box
  const [hideInstitute, setHideInstitute] = useRecoilState(hideInstituteState);
  const [hideSubject, setHideSubject] = useRecoilState(hideSubjectState);
  const [hideYear, setHideYear] = useRecoilState(hideYearState);
  const [hideSort, setHideSort] = useRecoilState(hideSortState);
  const [searchResults, setSearchResults] = useRecoilState(searchResultsState);

  useEffect (() => {
      const res = fetch(`/api/search?keyword=${searchKeyword}`).then((data) => setSearchResults(data)) 
  }, [searchKeyword])

  const onchange = (e) => {
    setSearchKeyword(e.target.value);
    setHideSearch(false);
    setHideInstitute(true);
    setHideSubject(true);
    setHideYear(true);
    setHideSort(true);
  }

  return (
    <>
      <div className="flex flex-col relative justify-start md:mx-36 mx-3 md:mt-7 mt-4">
          <div className='flex flex-row w-full rounded-3xl outline-1 outline-gray-400 outline bg-blue-50'>
              <MagnifyingGlassIcon className='h-8 px-2 text-slate-500'/>
              <input className='w-full outline-none bg-transparent' onChange={onchange} onFocus={onchange} placeholder='Search for projects by tag or title'/>
          </div>
          {!hideSearch && searchKeyword !== '' && <Suggestion result={searchResults}/>}
      </div>
    </>
  );
}
