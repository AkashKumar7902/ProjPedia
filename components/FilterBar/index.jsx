import * as React from 'react';
import { useState } from "react";
import { useRecoilState } from 'recoil';

import { sortTypeState, hideSearchState, hideInstituteState, hideSubjectState, hideYearState, hideSortState } from '../../atoms/index';
import Institute from './institute';
import Subject from './subject';
import Year from './year'
import SortType from './sortType'

const FilterBar = () => {
    const [sortType, setSortType] = useRecoilState(sortTypeState);
    const [hideSearch, setHideSearch] = useRecoilState(hideSearchState);
    const [hideInstitute, setHideInstitute] = useRecoilState(hideInstituteState);
    const [hideSubject, setHideSubject] = useRecoilState(hideSubjectState);
    const [hideYear, setHideYear] = useRecoilState(hideYearState);
    const [hideSort, setHideSort] = useRecoilState(hideSortState);
    const onClickInstitute = () => {
        setHideInstitute(!hideInstitute);
        setHideSubject(true);
        setHideYear(true);
        setHideSort(true);
        setHideSearch(true);
    }
    const onClickSubject = () => {
        setHideInstitute(true);
        setHideSubject(!hideSubject);
        setHideYear(true);
        setHideSort(true);
        setHideSearch(true);
    }
    const onClickYear = () => {
        setHideInstitute(true);
        setHideSubject(true);
        setHideYear(!hideYear);
        setHideSort(true);
        setHideSearch(true);
    }
    const onClickSort = () => {
        setHideInstitute(true);
        setHideSubject(true);
        setHideYear(true);
        setHideSort(!hideSort);
        setHideSearch(true);
    }
    return (
        <div className="flex flex-row bg-gray-200 relative outline outline-1 outline-gray-400 rounded-3xl md:mx-36 mx-3 md:mt-7 mt-4">
            <div className="flex justify-center relative items-center w-1/4 py-2 border-r-2 border-gray-300" onClick={onClickInstitute}>
                <div>institute</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute right-3 w-4 h-4 md:block hidden">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            {!hideInstitute && <Institute/>}
            <div className="flex justify-center relative items-center w-1/4 py-2 border-r-2 border-gray-300" onClick={onClickSubject}>
                <div>subject</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute right-3 w-4 h-4 md:block hidden">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            {!hideSubject && <Subject/>}
            <div className="flex justify-center relative items-center w-1/4 py-2 border-r-2 border-gray-300" onClick={onClickYear}>
                <div>year</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute right-3 w-4 h-4 md:block hidden">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            {!hideYear && <Year/>}
            <div className="flex justify-center relative items-center w-1/4 py-2" onClick={onClickSort}>
                <div>sort by: {sortType}</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute right-3 w-4 h-4 md:block hidden">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            {!hideSort && <SortType/>}
        </div>
    );
};

export default FilterBar;
