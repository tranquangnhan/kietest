import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {isMobile,isTablet} from 'react-device-detect';
import "./style.scss";


VersionItem.propTypes = {
    version: PropTypes.string,
    date: PropTypes.string
};


function VersionItem({version,date,link}) {
    
    // function custom scroll navbar right version
    useEffect(()=>{
        const a =  document.querySelectorAll('a[href^="#"]');   
        a.forEach(index=>{
            index.addEventListener('click',(e)=>{
                e.preventDefault()
                const val = index.getAttribute('href');
                const [symbol,...refElement] =val;
                const element = document.getElementById(refElement.join(""));
                let valueScroll = 420;
                if(isMobile){
                    valueScroll = 820;
                }else if(isTablet){
                    valueScroll = 650;
                }
                window.scrollTo({ top: element.offsetTop + valueScroll, behavior: 'smooth' });
            })
        })
    },[]);

   
    return (
        <>
          <a href={'#'+link}>
            <div className="row version">
                    <div className="col-lg-6 col-6">
                    {version}
                    </div>
                    <div className="col-lg-6 col-6">
                    {date}
                    </div>
            </div>
            </a>
        </>
    );
}

export default VersionItem;