import * as React from 'react';
// import cloudinary from '../../libs/cloudinary_pdf'

export default function Upload() {
    const [ProjectName, setProjectName] = React.useState("");
    const [institution, setInstitution] = React.useState("");
    const [stars, setStars] = React.useState(0);
    const [upvotes, setUpvotes] = React.useState(0);
    const [tags, setTags] = React.useState([]);
    const [link, setLink] = React.useState("");
    const [plagScore, setPlagScore] = React.useState(0);
    const [subject, setSubject] = React.useState("");
    const [pdf, setPdf] = React.useState(null);

    const upload = async () => {
        if(pdf != null && subject != "" && institution != "" && ProjectName != "" && tags != "") {
            // const result = await cloudinary.v2.uploader.upload(pdf, { resource_type: 'image' });
        }
    }

    const setTagsAll = (e) => {
        setTags(e.target.value.split(","));
    }
    
  return (
    <div className="flex flex-col gap-4 rounded-lg p-5 mt-10 w-1/2 bg-blue-200 m-auto">
        <div className="flex gap-2 items-center border-b-1 border-blue-300">
            <label className='w-1/5'>Project Name: </label>
            <input className="w-4/5" value={ProjectName} onChange={(e) => setProjectName(e.target.value)} />
        </div>
        <div className="flex gap-2 items-center border-b-1 border-blue-300">
            <label className='w-1/5'>Subject: </label>
            <input className="w-4/5" value={subject} onChange={(e) => setSubject(e.target.value)} />
        </div>
        <div className="flex gap-2 items-center border-b-1 border-blue-300">
            <label className='w-1/5'>Institution</label>
            <input className="w-4/5" value={institution} onChange={(e) => setInstitution(e.target.value)} />
        </div>
        <div className="flex gap-2 items-center border-b-1 border-blue-300">
            <label className='w-1/5'>Tags: </label>
            <input className="w-4/5" value={tags} onChange={setTagsAll} />
        </div>
        <div className="flex gap-2 items-center border-b-1 border-blue-300">
            <label className='w-1/5'>Marks (out of 5): </label>
            <input className="w-4/5" value={stars} onChange={(e) => setStars(e.target.value)} />
        </div>
        <div className="flex gap-2 items-center border-b-1 border-blue-300">
            <label className='w-1/5'>upload (only pdf): </label>
            <input type="file" accept=".pdf" onChange={(event) => setPdf(event.target.files[0])} />
        </div>
        <button className="flex justify-center items-center p-3 bg-blue-300 rounded-lg" onClick={upload}>
            Upload
        </button>
    </div>
  );
}
