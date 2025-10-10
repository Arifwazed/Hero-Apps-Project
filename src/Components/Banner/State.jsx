import React from 'react';

const State = () => {
    return (
        <div>
            <div className='bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white text-center py-17'>
                <h1 className='text-4xl font-bold'>Trusted by Millions, Built for You</h1>
                <div className='flex flex-col md:flex-row gap-15 md:gap-35 mt-8 max-w-4xl mx-auto'>
                    <div>
                        <p className='text-sm'>Total Downloads</p>
                        <h1 className='text-5xl font-bold my-3'>29.6M</h1>
                        <p>21% More Than Last Month</p>
                    </div>
                    <div>
                        <p className='text-sm'>Total Reviews</p>
                        <h1 className='text-5xl font-bold my-3'>906K</h1>
                        <p>46% more than last month</p>
                    </div>
                    <div>
                        <p className='text-sm'>Active Apps</p>
                        <h1 className='text-5xl font-bold my-3'>132+</h1>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default State;