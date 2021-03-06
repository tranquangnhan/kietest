import { Select } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18nextConf';
import './style.scss';

Header.propTypes = {

};
const { Option } = Select;

function Header() {
    const { t } = useTranslation();
    
    function changeLanguage(value){
        i18n.changeLanguage(value);
    }

    return (
        <div>
            <div className="container-fluid bg-menu position-fixed">
                <div className="row ">
                    <div className="col-lg-2 col-7">
                        <div className="logo">
                             <h1>WordsMine!</h1>
                        </div>
                    </div>
                    <div className="col-lg-10 col-5 mt-2 pt-1">
                         <div className="row menuDesktop">
                             <div className="col-lg-7 pl-5 pr-0">
                                <nav className="nav justify-content-end w-100">
                                  <a className="nav-link active" href="https://wordsmine.com/#tryme">{t('trial')}</a>
                                  <a className="nav-link" href="https://wordsmine.com/#overview">{t('whatis')}</a>
                                  <a className="nav-link" href="https://wordsmine.com/#newfeature">{t('newfeatures')}</a>
                                  <a className="nav-link" href="https://wordsmine.com/#testimonial">{t('review')}</a>
                                 
                                </nav>
                             </div>
                             <div className="col-lg-5">
                                <div className="row btnheader">
                                    <div className="col-lg-4 p-0">
                                        <a className="btn w-100  btnheader__try" href="https://app.wordsmine.com/" >{t('webapp')}</a>
                                    </div>
                                    <div className="col-lg-4 pr-0">
                                        <a className="btn  btnheader__login " href="https://app.wordsmine.com/" >{t('login')}</a>
                                       
                                    </div>
                                    <div className="col-lg-4 d-flex align-items-center justify-content-center">
                                         <Select defaultValue={i18n.language} style={{ width: 120 }} onChange={changeLanguage}>
                                            <Option value="en">English</Option>
                                            <Option value="vi">Ti???ng Vi???t</Option>
                                        </Select>
                                    </div>
                                </div>
                             </div>
                         </div>
                         <div className="row menudeMobile">
                            <nav role="navigation">
                                <div id="menuToggle">
                                
                                    <input type="checkbox" />
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    
                                    <ul id="menu">
                                    <a className="nav-link active" href="https://wordsmine.com/#tryme">{t('trial')}</a>
                                    <a className="nav-link" href="https://wordsmine.com/#overview">{t('whatis')}</a>
                                    <a className="nav-link" href="https://wordsmine.com/#newfeature">{t('newfeatures')}</a>
                                    <a className="nav-link" href="https://wordsmine.com/#testimonial">{t('review')}</a>
                                    <div className="row btnheader">
                                        <div className="col-lg-2 col-6 ">
                                            <a  className="btn w-100  btnheader__try" href="https://app.wordsmine.com/" role="button">{t('login')}</a>
                                        </div>
                                        <div className="col-lg-2 col-6 ">
                                            <a  className="btn  btnheader__login " href="https://app.wordsmine.com/" role="button">{t('joinnow')}</a>
                                        </div>
                                    </div>
                                    </ul>
                                </div>
                            </nav>
                         </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;