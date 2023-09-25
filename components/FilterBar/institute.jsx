import * as React from 'react';
import {useState, useEffect} from 'react';

import useSWR from 'swr'
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { instituteSelectedState } from '../../atoms/index';

const fetcher = url => axios.get(url).then(res => res.data);

const Institute = () => {
    const {data, isLoading, error} = useSWR('/api/getall/institute', fetcher);
    const [instituteSelected, setInstituteSelected] = useRecoilState(instituteSelectedState);
    if(!isLoading) console.log(data)
    function handleChange(event) {
        setInstituteSelected(event.target.value);
    }
    return (
        <div className="max-h-36 overflow-y-scroll absolute w-1/4 top-11 py-3 flex flex-col gap-2 bg-gray-100 z-50 rounded-b-lg outline outline-1 outline-gray-200">
            {!isLoading && data && data.map((institute) => {
                return (
                    <label className='pl-2 flex gap-2' key={institute.name}>
                        <input type="radio" value={institute.name} checked={instituteSelected === institute.name} onChange={handleChange} />
                        {institute.name}
                    </label>
                )
            })}
        </div>
    );    
};

export default Institute;
