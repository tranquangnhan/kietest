import React from 'react';
import "./style.scss";
import { useTranslation } from 'react-i18next';
Footer.propTypes = {
    
};


function Footer(props) {
    const { t } = useTranslation();
    return (
        <div className="footer">
            <div className="footer__text">
                <div>© 2021 WordsMine</div>
                <div><a href="https://wordsmine.com/policy">{t('polycy')}</a></div>
                <div><a href="https://kie.io/">{t('aboutus')}</a></div>
            </div>
            <div className="footer__logo">
                <h1>WordsMine!</h1>
            </div>
        </div>
    );
}

export default Footer;