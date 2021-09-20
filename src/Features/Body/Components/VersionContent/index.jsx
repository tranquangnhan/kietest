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
    const { t } = useTranslation();
    
    return (
        <div>
                {
                    version.map((value,index)=>(
                        <div className="versioncontent" id={value.version} key={index}>
                            <h3 className="versioncontent__version">{t('versions')} {value.version}</h3>

                            <div className="versioncontent__heading">
                                {(value.newfeatues.length >0) && t('newfeatures')}
                            </div>
                            <ul>
                                {(value.newfeatues.length >0) && value.newfeatues.map((value,index)=>(
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
                                {(value.improvements.length >0) && t('improvements')}
                            </div>
                            <ul>
                                {(value.improvements.length >0) && value.improvements.map((value,index)=>(
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
                                {(value.bugfixes.length >0) && t('bugfixes')}
                            </div>
                            <ul>
                                {(value.bugfixes.length >0) && value.bugfixes.map((value,index)=>(
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