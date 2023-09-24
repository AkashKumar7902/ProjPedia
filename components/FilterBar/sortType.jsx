import * as React from 'react';
import {useState, useEffect} from 'react';

import { useRecoilState } from 'recoil';
import { sortTypeState } from '../../atoms/index';
import connectMongoDb from '../../libs/mongodb';
import { Project } from '../../models/project';

const Year = () => {
    const [sorts, setSorts] = useState('');
    const [sortType, setSortType] = useRecoilState(sortTypeState);
    useEffect(() => {
        setSorts(['latest', 'rating', 'popularity'])
    }, [])
    
    function handleChange(event) {
        setSortType(event.target.value);
    }

    return (
        <div className="max-h-36 overflow-y-scroll absolute left-3/4 w-1/4 top-11 py-3 flex flex-col gap-2 bg-gray-100 z-50 rounded-b-lg outline outline-1 outline-gray-200">
            {sorts && sorts.map((sort, index) => {
                return (
                    <label className="pl-2 flex gap-2">
                        <input type="radio" value={sort} checked={sortType === sort} onChange={handleChange} />
                        sort by: {sort}
                    </label>
                )
            })}
        </div>
    );    
};

export default Year;
