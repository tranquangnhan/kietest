import React from 'react';
import "./style.scss";
import { IoIosCheckmarkCircleOutline,IoMdColorFilter } from "react-icons/io";
import { IoBugOutline } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

VersionContent.propTypes = {
    version: PropTypes.array,
};

function VersionContent({version}) {
    
    const { t,i18n  } = useTranslation();

    let newFeatures ;
    let improvements;
    let bugFixes;

    if(i18n.language === "vi"){
        newFeatures     = "newFeaturesVN";
        improvements    = "improvementsVN";
        bugFixes        = "bugFixesVN";
    }else{
        newFeatures     = "newFeatures";
        improvements    = "improvements";
        bugFixes        = "bugFixes";
    }

    return (
        <div>
                {
                    version.map((value,index)=>(
                        <div className="versioncontent" id={value.versionNumber} key={index}>
                            <h3 className="versioncontent__version">{t('versions')} {value.versionNumber}</h3>

                           <div className="versioncontent__heading">
                                {(value[newFeatures]?.length> 0) && t('newfeatures')}
                            </div>
                         
                            <ul>
                                {(value[newFeatures]?.length >0 )  && value[newFeatures]?.map((value,index)=>(
                                    <li key={index}>
                                        <div className="versioncontent__icon">
                                            <IoIosCheckmarkCircleOutline/>
                                        </div>
                                        <div className="versioncontent__text">
                                            {value}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="versioncontent__heading">
                                {(value[improvements]?.length >0) && t('improvements')}
                            </div>
                            <ul>
                                {(value[improvements]?.length >0) && value[improvements]?.map((value,index)=>(
                                    <li key={index}>
                                        <div className="versioncontent__icon">
                                            <IoMdColorFilter/>
                                        </div>
                                        <div className="versioncontent__text">
                                            {value}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="versioncontent__heading">
                                {(value[bugFixes]?.length >0) && t('bugfixes')}
                            </div>
                            <ul>
                                {(value[bugFixes]?.length >0) && value[bugFixes]?.map((value,index)=>(
                                    <li key={index}>
                                        <div className="versioncontent__icon">
                                            <IoBugOutline/>
                                        </div>
                                        <div className="versioncontent__text">
                                            {value}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                }
        </div>
    );
}

export default VersionContent;