import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import i18n from '../../i18nextConf';

import './style.scss';
Header.propTypes = {

};


function Header(props) {
    const { t } = useTranslation();

    function changeLanguage(e){
        e.preventDefault();
        i18n.changeLanguage(e.target.value);
    }

    return (
        <div>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="logo">
                             <h1>WordsMine!</h1>
                        </div>
                    </div>
                    <div className="col-lg-10 mt-3">
                         <div className="row menu">
                             <div className="col-lg-7 pl-5 pr-0">
                                <nav className="nav justify-content-center w-100">
                                  <a className="nav-link active" href="https://wordsmine.com/#tryme">{t('trial')}</a>
                                  <a className="nav-link" href="https://wordsmine.com/#overview">{t('whatis')}</a>
                                  <a className="nav-link" href="#">{t('newfeatures')}</a>
                                  <a className="nav-link" href="#">{t('review')}</a>
                                </nav>
                             </div>
                             <div className="col-lg-5">
                                <div className="row btnheader">
                                    <div className="col-lg-4 p-0">
                                        <a name="" id="" className="btn w-100 btnheader__try" href="#" role="button">{t('webapp')}</a>
                                    </div>
                                    <div className="col-lg-4 pr-0">
                                        <a name="" id="" className="btn w-100 btnheader__login " href="#" role="button">{t('logout')}</a>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                          <select className="form-control btnheader__select"  name="language"  onChange={changeLanguage}  id="">
                                            <option selected value="vi">Tiếng Việt</option>
                                            <option value="en">English</option>
                                          </select>
                                          
                                        </div>
                                    </div>
                                </div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;