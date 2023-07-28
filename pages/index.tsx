import Image from "next/image";
import { Inter } from "next/font/google";
import { useBearStore } from "@/store/home";
import { useEffect, useState } from "react";
import AppFunction from "@/components/homePage/AppFunction";
import { Shopping_Bag_Smile_24 } from "@/public/asset/svg";
import CustomSmartBanner from "@/components/CustomSmartBanner";

// const inter = Inter({ subsets: ["latin"] });

{/* <main className={`flex min-h-screen flex-col items-center justify-between  ${inter.className}`}> */}
export default function Home() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between`} >
            {/*LandingPage 1 */}
            <CustomSmartBanner />
            <div className="w-full flex flex-row h-[calc(100vh-96px)] items-center">
                <div className="w-2/5">
                    <h1>POHO - ỨNG DỤNG NHẮN TIN ĐA NĂNG </h1>
                    <p>
                        Poho là một nền tảng nhắn tin không chỉ giúp người dùng giữ liên lạc với bạn bè và gia đình, mà
                        còn mang lại trải nghiệm mua sắm trực tuyến tiện lợi ngay trong cùng một nền tảng.
                    </p>
                </div>
                <div className="w-3/5 relative flex justify-start h-full">
                    <Image src="/asset/images/HomeImage.png" layout="fill" alt="Poho" />
                </div>
            </div>
            {/*LandingPage 1 */}

            {/*LandingPage 2 */}
            <div className="py-[84px]">
                <h2 className="text-center">POHO CHAT - KẾT NỐI VÀ GIAO TIẾP KHÔNG BIÊN GIỚI </h2>
                <div className="flex">
                    <div className="w-1/3 flex flex-col justify-between">
                        <AppFunction
                            // className=""
                            name="Mua sắm"
                            content="Tính năng mua sắm trên ứng dụng chat đa năng cho phép người dùng mua hàng và thanh toán trực tuyến trong khung chat, tiết kiệm thời gian và tối ưu hóa trải nghiệm mua sắm."
                            icon={<Shopping_Bag_Smile_24 />}
                        />
                        <AppFunction
                            // className="w-1/3"
                            name="Mua sắm"
                            content="Tính năng mua sắm trên ứng dụng chat đa năng cho phép người dùng mua hàng và thanh toán trực tuyến trong khung chat, tiết kiệm thời gian và tối ưu hóa trải nghiệm mua sắm."
                            icon={<Shopping_Bag_Smile_24 />}
                        />
                    </div>

                    <div className="relative flex items-center justify-center">
                        {/* <div className="absolute w-[452px] h-[452px] bg-brand z-1 rounded-[100%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div> */}
                        <Image
                            className="z-2 relative m-0 "
                            src="/asset/images/iPhone14.png"
                            height={654}
                            width={402}
                            alt="Poho"
                        />
                    </div>
                    <div className="w-1/3 flex flex-col justify-between">
                        <AppFunction
                            // className=""
                            name="Mua sắm"
                            content="Tính năng mua sắm trên ứng dụng chat đa năng cho phép người dùng mua hàng và thanh toán trực tuyến trong khung chat, tiết kiệm thời gian và tối ưu hóa trải nghiệm mua sắm."
                            icon={<Shopping_Bag_Smile_24 />}
                        />
                        <AppFunction
                            // className="w-1/3"
                            name="Mua sắm"
                            content="Tính năng mua sắm trên ứng dụng chat đa năng cho phép người dùng mua hàng và thanh toán trực tuyến trong khung chat, tiết kiệm thời gian và tối ưu hóa trải nghiệm mua sắm."
                            icon={<Shopping_Bag_Smile_24 />}
                        />
                    </div>
                </div>
            </div>
            {/*LandingPage 2 */}

            <div className="py-[84px] w-full">
                <h2 className="text-center">POHO CHAT - KẾT NỐI VÀ GIAO TIẾP KHÔNG BIÊN GIỚI </h2>
                <div className="relative flex items-center justify-between">
                    {/* <div className="absolute w-[452px] h-[452px] bg-brand z-1 rounded-[100%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div> */}
                    <div className="w-1/2">
                        <Image
                            className="z-2 relative m-0 "
                            src="/asset/images/HomeImage_2.png"
                            height={654}
                            width={402}
                            alt="Poho"
                        />
                    </div>
                    <div className="w-1/2 max-[417px]">
                        <div className="flex flex-col">
                            <div>1</div>
                            <div className="flex flex-col ml-[16px]">
                                <h3>Thao tác Mua hàng và thanh toán chỉ sau vài cú chạm</h3>
                                <span>Mua hàng và thanh toán chỉ sau vài cú chạm</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div>2</div>
                            <div className="flex flex-col ml-[16px]">
                                <h3>Thao tác Mua hàng và thanh toán chỉ sau vài cú chạm</h3>
                                <span>Mua hàng và thanh toán chỉ sau vài cú chạm</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div>3</div>
                            <div className="flex flex-col ml-[16px]">
                                <h3>Thao tác Mua hàng và thanh toán chỉ sau vài cú chạm</h3>
                                <span>Mua hàng và thanh toán chỉ sau vài cú chạm</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div>4</div>
                            <div className="flex flex-col ml-[16px]">
                                <h3>Thao tác Mua hàng và thanh toán chỉ sau vài cú chạm</h3>
                                <span>Mua hàng và thanh toán chỉ sau vài cú chạm</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
