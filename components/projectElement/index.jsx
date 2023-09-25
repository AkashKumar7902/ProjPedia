import * as React from 'react';
import Rating from '@mui/material/Rating';

export default function ProjectComp(props) {
  const project = props.projectDetails;
  return (
    <div className="py-2 px-4 flex gap-2 text-sm">
      <div>{project.name}</div>
      {project.tags && project.tags.map((tag) => (
        <div className='flex flex-row justify-center items-center bg-blue-200 rounded-lg gap-1 pl-1 pr-3 outline-1 outline outline-blue-200' key={tag}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
          </svg>
          <div className='text-sm'>{tag}</div>
        </div>
      ))}    
      <Rating name="disabled" value={project.stars} max={5} disabled />
      <div>{project.uploaded_at}</div>
    </div>
  );
};