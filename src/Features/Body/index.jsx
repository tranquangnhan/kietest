import React from 'react';
import VersionContent from './Components/VersionContent';
import VersionItem from './Components/VersionItem';
import "./style.scss";
import { useTranslation } from 'react-i18next';

Body.propTypes = {
    
};

function Body(props) {
    const { t } = useTranslation();
    return (
        <div>
            <div className="container p-0 body">
                <div className="row mt-5">
                
                    <div className="col-lg-8">
                        <h3 className="text-left  body__heading">3 {t('version')}</h3>
                            <VersionContent/>
                    </div>

                    <div className="col-lg-4">
                        <h3 className="text-left pl-2 body__heading">{t('jumpto')}</h3>
                        <div className="body__main mt-5">
                            <div className="body__left">
                            <VersionItem version={t('version')+" 1.3"} link="1.3" date={t('august2021')}/>
                            <VersionItem version={t('version')+" 1.2"} link="1.2" date={t('april2021')}/>
                            <VersionItem version={t('version')+" 1.1"} link="1.1" date={t('march2021')}/>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
}

export default Body;