import * as React from 'react';
import {
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import {useState, useEffect} from 'react';
import Link from 'next/link';


export default function Suggestion(props) {
    const result = [{
        title: 'Project 1',
        tag: ['tag1', 'tag2']
    },
    {
        title: ' 1',
        tag: ['tag1', 'tag2']
    }, {
        title: ' 1',
        tag: ['tag1', 'tag2']
    }, {
        title: ' 1',
        tag: ['tag1', 'tag2']
    }, {
        title: ' 1',
        tag: ['tag1', 'tag2']
    }, {
        title: ' 1',
        tag: ['tag1', 'tag2']
    }, ]
    return (
        <> 
            <div className='max-h-36 overflow-y-scroll z-50 absolute w-full top-8 py-3 flex flex-col gap-2 bg-blue-50 rounded-b-lg outline outline-1 outline-gray-200'>
                {
                    result.map((item, index) => {
                        return (
                            <div className='flex flex-row justify-start gap-3 px-3 py-1' key={index}>
                                <div className='flex flex-row overflow-hidden'>
                                    <Link href={`/project/${item._id}`} className='ml-2 text-sm hover:underline hover:cursor-pointer'>{item.title}</Link>
                                </div>
                                {item.tag.map((tag, index) => {
                                    return (
                                    <div className='flex flex-row justify-center items-center bg-blue-100 rounded-lg gap-1 pl-1 pr-3 outline-1 outline outline-blue-200'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                                        </svg>
                                        <div className='text-sm' key={index}>{tag}</div>    
                                    </div>
                                   )
                                })}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}