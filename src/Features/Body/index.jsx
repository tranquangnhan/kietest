import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import VersionContent from './Components/VersionContent';
import VersionItem from './Components/VersionItem';
import "./style.scss";


Body.propTypes = {
    dataVersion: PropTypes.array,
};

function Body({dataVersion}) {

    const { t,i18n } = useTranslation();
   
    
    let releaseDate;

    if(i18n.language === "vi"){
        releaseDate     = "releaseDateVN";
    }else{
        releaseDate     = "releaseDate";
    }


    return (
        <div>
            <div className="container body">
                <div className="row mt-5">
                
                    <div className="col-lg-8 order-lg-1 order-2">
                        <h3 className="text-left body__heading">{dataVersion.length} {t('version')}</h3>
                            <VersionContent version={dataVersion}/>
                    </div>
                    <div className="col-lg-4 order-lg-2 order-1">
                        <h3 className="text-left pl-2 body__heading ">{t('jumpto')}</h3>
                        <div className="body__version mt-4">
                            <div className="body__versionleft">
                            {
                                dataVersion.map(value=>(
                                    <div key={value.versionNumber}>
                                        <VersionItem version={t('version')+" "+ value.versionNumber} link={value.versionNumber} date={value[releaseDate]}/>
                                    </div>
                                ))
                            }
                            </div>
                        </div>
                    </div>

                </div>
               
            </div>
        </div>
    );
}

export default Body;