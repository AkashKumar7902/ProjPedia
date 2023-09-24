import * as React from 'react';
import { useRecoilState } from 'recoil';  

import Navbar from './navbar';
import { hideSearchState, hideInstituteState, hideSubjectState, hideYearState, hideSortState } from "../../atoms/index";

export default function CommonLayout() {
  const [hideSearch, setHideSearch] = useRecoilState(hideSearchState);
  const [hideInstitute, setHideInstitute] = useRecoilState(hideInstituteState);
  const [hideSubject, setHideSubject] = useRecoilState(hideSubjectState);
  const [hideYear, setHideYear] = useRecoilState(hideYearState);
  const [hideSort, setHideSort] = useRecoilState(hideSortState);

  const onClick = () => {
    setHideSearch(true);
    setHideInstitute(true);
    setHideSubject(true);
    setHideYear(true);
    setHideSort(true);
  };

  return (
    <>
      <div className="-z-50 absolute top-0 right-0 bottom-0 left-0" onClick={onClick}/>
      <Navbar />
    </>
  );
}
