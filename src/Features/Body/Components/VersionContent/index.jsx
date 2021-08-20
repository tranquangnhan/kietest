import React from 'react';
import "./style.scss";
import { IoIosCheckmarkCircleOutline,IoMdColorFilter } from "react-icons/io";
import { IoBugOutline } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

VersionContent.propTypes = {
    
};

function VersionContent(props) {
    const { t } = useTranslation();
    return (
        <div>
                <div className="versioncontent" id="1.3">
                    <h3 className="versioncontent__version">{t('versions')} 1.3</h3>
                    <div className="versioncontent__heading">
                        {t('newfeatures')}
                    </div>
                    <ul>
                        <li>
                            <div className="versioncontent__icon">
                                <IoIosCheckmarkCircleOutline/>
                            </div>
                            <div className="versioncontent__text">
                                {t('youcantailoryourlearning')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoIosCheckmarkCircleOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('youcanusefeedbackfeature')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoIosCheckmarkCircleOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('youcanput')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoIosCheckmarkCircleOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('youcanseetheoriginal')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoIosCheckmarkCircleOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('newfeaturesarenow')}

                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoIosCheckmarkCircleOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('weaddeduseronboarding')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoIosCheckmarkCircleOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('optimizingperformance')}
                            </div>
                        </li>
                    </ul>
                    
                    <div className="versioncontent__heading">
                    {t('improvements')}
                    </div>
                    <ul>
                    <li>
                            <div className="versioncontent__icon">
                                <IoMdColorFilter/>
                            </div>
                            <div className="versioncontent__text">
                            {t('optimizingperformance')}
                            </div>
                        </li>
                    </ul>
                  
                </div>


                <div className="versioncontent " id="1.2">
                    <h3 className="versioncontent__version">{t('version')} 1.2</h3>
                    <div className="versioncontent__heading">
                    {t('newfeatures')}
                    </div>
                    <ul>
                        <li>
                            <div className="versioncontent__icon">
                                <IoIosCheckmarkCircleOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('youcanquicklyadd')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoIosCheckmarkCircleOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('wehavejustupgradedthedefinition')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoIosCheckmarkCircleOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('youcanknowhowtheword')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoIosCheckmarkCircleOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('besidesaddingawordtermvia')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoIosCheckmarkCircleOutline/>
                            </div>
                            <div className="versioncontent__text">
                           
                            {t('youcancreateafolder')}

                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoIosCheckmarkCircleOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('youcanviewword')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoIosCheckmarkCircleOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('weintroducetheflipmode')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoIosCheckmarkCircleOutline/>
                            </div>
                            <div className="versioncontent__text">
                                
                            {t('youcanconfigurewhich')}
                            </div>
                        </li>
                    </ul>
                    
                    <div className="versioncontent__heading">
                    {t('improvements')}
                    </div>
                    <ul>
                        <li>
                            <div className="versioncontent__icon">
                                <IoMdColorFilter/>
                            </div>
                            <div className="versioncontent__text">
                            {t('showawarningmessage')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoMdColorFilter/>
                            </div>
                            <div className="versioncontent__text">
                            {t('showaloginbuttonwhen')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoMdColorFilter/>
                            </div>
                            <div className="versioncontent__text">
                            {t('movevietnamesedefinitionto')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoMdColorFilter/>
                            </div>
                            <div className="versioncontent__text">
                            {t('showthecurrentselection')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoMdColorFilter/>
                            </div>
                            <div className="versioncontent__text">
                            {t('loginbyeitherusernameoremail')}
                            </div>
                        </li>
                    </ul>

                    <div className="versioncontent__heading">
                    {t('bugfixes')}
                    </div>
                    <ul>
                        <li>
                            <div className="versioncontent__icon">
                                <IoBugOutline/>
                            </div>
                            <div className="versioncontent__text">
                                {t('inconsistentwordsstatus')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoBugOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('linksindropdownmenu')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoBugOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('validateusernamebeforeregistration')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoBugOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('validateusernamebeforeupdatingpersonal')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoBugOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('reloadpagewhenchanging')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoBugOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('sortbytime')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoBugOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('incorrectwordsshowed')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoBugOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('deleteword')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoBugOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('wordsarenotmatchingbetween')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoBugOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('fixerrormessage')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoBugOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('fixfeedbackposition')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoBugOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('cannotgetwordpronunciation')}
                            </div>
                        </li>
                     
                    </ul>
                </div>

                
                <div className="versioncontent " id="1.1">
                    <h3 className="versioncontent__version"> {t('version')} 1.1</h3>
                    <div className="versioncontent__heading">
                    {t('newfeatures')}
                    </div>
                    <ul>
                        <li>
                            <div className="versioncontent__icon">
                                <IoIosCheckmarkCircleOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('youcansavewordsdirectly')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoIosCheckmarkCircleOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('onthewordsminehomepage')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoIosCheckmarkCircleOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('youcanleverage')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoIosCheckmarkCircleOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('youcanchecknew')}
                            </div>
                        </li>

                    </ul>
                    
                    <div className="versioncontent__heading">
                    {t('improvements')}
                    </div>
                    <ul>
                        <li>
                            <div className="versioncontent__icon">
                                <IoMdColorFilter/>
                            </div>
                            <div className="versioncontent__text">
                            {t('updateapplayout')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoMdColorFilter/>
                            </div>
                            <div className="versioncontent__text">
                            {t('addtooltipfor')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoMdColorFilter/>
                            </div>
                            <div className="versioncontent__text">
                            {t('showselectedvalue')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoMdColorFilter/>
                            </div>
                            <div className="versioncontent__text">
                            {t('movethefeedback')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoMdColorFilter/>
                            </div>
                            <div className="versioncontent__text">
                            {t('beabletosearch')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoMdColorFilter/>
                            </div>
                            <div className="versioncontent__text">
                            {t('showextensionnotification')}
                            </div>
                        </li>
                        
                    </ul>
                    <div className="versioncontent__heading">
                    {t('bugfixes')}
                    </div>
                    <ul>
                        <li>
                            <div className="versioncontent__icon">
                                <IoBugOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('incorrectworddefinition')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoBugOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('cardcontentdoesn')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoBugOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('cannotgetpronunciation')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoBugOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('showhuman-friendlyerror')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoBugOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('fixbugincorrectnumbersshowed')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoBugOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('changefontwhich')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoBugOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('wordsarenotsorted')}
                            </div>
                        </li>
                        <li>
                            <div className="versioncontent__icon">
                                <IoBugOutline/>
                            </div>
                            <div className="versioncontent__text">
                            {t('themodalcontent')}
                            </div>
                        </li>
                        
                    </ul>
                </div>
               
        </div>
    );
}

export default VersionContent;