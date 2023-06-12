import React, { useState } from 'react';
import axios from 'axios';

export const Console = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const executeCode = async () => {
    try {
      const response = await axios.post('https://saikrishnan.pythonanywhere.com/execute', { code });
      setOutput(response.data.output);
      setError(response.data.error);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center mt-1  w-full relative'>
      <textarea value={code} onChange={e => setCode(e.target.value)} className='w-4/5  min-h-full h-64 text-black bg-white border-solid border-2 rounded-sm p-6 ' placeholder='Enter your code'/>
      <button onClick={executeCode}  className='w-16 py-1  mt-2  rounded-lg absolute right-36 top-0' ><svg viewBox="-1.6 -1.6 19.20 19.20" xmlns="http://www.w3.org/2000/svg" fill="#0a9900" className="bi bi-play" stroke="#0a9900" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"></path> </g></svg></button>
      <div>
        {!error? <div>{output?<p>Output : {output}</p>: <p></p>}</div> : <p>Error : {error}</p>}
      </div>
    </div>
  );
};

