import React from 'react';
interface Props { 
    name: string;
    content: string;
    icon: React.ReactNode;
    className?: string;
}
const AppFunction = (props: Props) => {
    const {name,content,icon,className} = props
    return (
        <div className={'flex flex-col justify-star ' + className}>
            <div>{ icon}</div>
            <h3>{name}</h3>
            <span>{content}</span>
        </div>
    );
};

export default AppFunction;