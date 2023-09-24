import * as React from 'react';
import {useState, useEffect} from 'react';

import useSWR from 'swr'
import { useRecoilState } from 'recoil';
import { instituteSelectedState } from '../../atoms/index';
import connectMongoDb from '../../libs/mongodb';
import { University } from '../../models/university';

const Institute = () => {
    const [institutes, setInstitutes] = useState('');
    const [instituteSelected, setInstituteSelected] = useRecoilState(instituteSelectedState);
    useEffect(() => {
        setInstitutes(['University of Melbourne', 'Monash University', 'RMIT University']);
    }, [])
    
  function handleChange(event) {
    setInstituteSelected(event.target.value);
  }
    // useEffect(() => {
    //     async function call() {
    //         await connectMongoDb();
    //         const data = await University.find({}, 'institute');
    //         setInstitutes(data);
    //     }
    //     call();
    // }, [])
    return (
        <div className="max-h-36 overflow-y-scroll absolute w-1/4 top-11 py-3 flex flex-col gap-2 bg-gray-100 z-50 rounded-b-lg outline outline-1 outline-gray-200">
            {institutes && institutes.map((institute, index) => {
                return (
                    <label className='pl-2 flex gap-2'>
                        <input type="radio" value={institute} checked={instituteSelected === institute} onChange={handleChange} />
                        {institute}
                    </label>
                )
            })}
        </div>
    );    
};

export default Institute;
