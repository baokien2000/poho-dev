import React from 'react';

interface Props { 
    icon: React.ReactNode;
    className?: string;
    name?: string;
    iconsPosition?: 'left' | 'right';
}
const CustomButton = (props: Props) => {
    const {icon,className,name,iconsPosition} = props
    return (
        <button className={'flex text-white font-semibold items-center gap-[8px] py-[12px] px-[16px] bg-[#1F5BEF] rounded-[8px] ' + className}>
        <div className={iconsPosition === 'left' ? '' : "order-1"}>
            {icon}
        </div>
        <span >{name}</span>
    </button>
    );
};

export default CustomButton;