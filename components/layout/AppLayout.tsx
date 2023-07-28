import React from 'react';
import { ReactNode } from 'react';

const AppLayout: React.FC<{ children: ReactNode }> = ({ children }) => {

    return (
        <div className='w-full flex flex-col items-center bg-white'>
            <div className='w-full max-w-PC'>
                {children}
            </div>
        </div>
    );
};

export default AppLayout;