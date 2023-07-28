import { DownloadSimple_Regular, GlobeSimple_Regular } from '@/public/asset/svg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CustomButton from './button';

const Navbar = () => {
    return (
        <div className='flex justify-between py-[12px]'>
            <Image src='/asset/images/logoPC.png' width={290} height={48} alt='Poho' />
            <div className='flex gap-[10px]'>
                <Link className='text-brand font-semibold text-[16px] p-[8px]' href={"/"}>Trang chủ</Link>
                <Link className='text-[#656C7B]  text-[16px] p-[8px]' href={"/"}>Về chúng tôi</Link>
                <Link className='text-[#656C7B]  text-[16px] p-[8px]' href={"/"}>Liên hệ</Link>
            </div>
            <div className='flex  items-center gap-[24px]'> 
                <CustomButton
                    icon={<GlobeSimple_Regular />}
                    className=" px-0 py-0 rounded-[0px] bg-[#fff] text-[#656C7B] "
                    name="Tiếng việt"
                />
                <CustomButton
                    icon={<DownloadSimple_Regular />}
                    className={""}
                    name={"Tải Poho"}
                    iconsPosition='left'
                />
            </div>
        </div>
    );
};

export default Navbar;