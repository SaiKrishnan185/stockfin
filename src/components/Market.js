import React from 'react';
import { MyChartComponent } from './MyChartComponent';

export const Market = () => {

  return (
    <div className="flex flex-col justify-center items-center gap-3 font-black text-lg font-mono min-h-full border-t-2 border-black">
      <h1 className='py-6 pt-16 text-3xl'>Market Price</h1>
      <MyChartComponent/>
    </div>
  );
};
