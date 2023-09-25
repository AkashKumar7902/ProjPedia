import * as React from 'react';
import {useState, useEffect} from 'react';

import { useRecoilState } from 'recoil';
import { subjectSelectedState } from '../../atoms/index';
// import connectMongoDb from '../../libs/mongodb';
// import { Project } from '../../models/project';

const Subject = () => {
    const [subjects, setSubjects] = useState('');
    const [subjectSelected, setSubjectSelected] = useRecoilState(subjectSelectedState);
    useEffect(() => {
        setSubjects(['english', 'maths', 'science']);
    }, [])
    
  function handleChange(event) {
    setSubjectSelected(event.target.value);
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
        <div className="max-h-36 overflow-y-scroll absolute left-1/4 w-1/4 top-11 py-3 flex flex-col gap-2 bg-gray-100 z-50 rounded-b-lg outline outline-1 outline-gray-200">
            {subjects && subjects.map((subject) => {
                return (
                    <label className="pl-2 flex gap-2" key={subject}>
                        <input type="radio" value={subject} checked={subjectSelected === subject} onChange={handleChange} />
                        {subject}
                    </label>
                )
            })}
        </div>
    );    
};

export default Subject;
