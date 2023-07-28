import React from 'react';
import { useEffect, useState } from "react";
//@ts-ignore
import SmartBanner from "react-smartbanner";
import "react-smartbanner/dist/main.css";

const CustomSmartBanner = () => {
    const [showCustomBanner, setShowCustomBanner] = useState(true)

    useEffect(() => {
        const init =  () => {
            //@ts-ignore
            var iOS = !window.MSStream && /iPad|iPhone|iPod/.test(navigator.userAgent); // fails on iPad iOS 13
  
            if (iOS) {
                //@ts-ignore   
                if (window.indexedDB || window.SpeechSynthesisUtterance || window.webkitAudioContext) {
                    setShowCustomBanner(false)
                }
 
            }
        }
        init()

    }, [])
    alert(showCustomBanner);
    return (
        showCustomBanner &&   <SmartBanner
            title={"playground"}
            force="android"
            daysReminder={0}
          />
    );
};

export default React.memo(CustomSmartBanner);