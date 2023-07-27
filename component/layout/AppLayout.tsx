import React from 'react';
import { ReactNode } from 'react';

const AppLayout: React.FC<{ children: ReactNode }> = ({ children }) => {

    return (
        <div className='w-full max-w-[1200px]'>
            {children}
        </div>
    );
};

export default AppLayout;