import * as React from 'react';
import {useState, useEffect} from 'react';

import { useRecoilState } from 'recoil';
import { yearSelectedState } from '../../atoms/index';
// import connectMongoDb from '../../libs/mongodb';
// import { Project } from '../../models/project';

const Year = () => {
    const [years, setYears] = useState('');
    const [yearSelected, setYearSelected] = useRecoilState(yearSelectedState);
    useEffect(() => {
        setYears(['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', "2019", "2020", "2021", "2022", "2023"]);
    }, [])
    
    function handleChange(event) {
        setYearSelected(event.target.value);
    }

    return (
        <div className="max-h-36 overflow-y-scroll absolute left-1/2 w-1/4 top-11 py-3 flex flex-col gap-2 bg-gray-100 z-50 rounded-b-lg outline outline-1 outline-gray-200">
            {years && years.map((year) => {
                return (
                    <label className="pl-2 flex gap-2" key={year}>
                        <input type="radio" value={year} checked={yearSelected === year} onChange={handleChange} />
                        {year}
                    </label>
                )
            })}
        </div>
    );    
};

export default Year;
