import { send } from 'emailjs-com';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import "./style.scss";
import PropTypes from 'prop-types';

Banner.propTypes = {
    dataVersion: PropTypes.array,
};


function Banner({dataVersion}) {
    const lastestVersion = dataVersion[0]?.versionNumber;
    
    const [toEmail,setToEmail] = useState("");

    const MySwal = withReactContent(Swal);

    const { t } = useTranslation();

    function sendEmail(e){
        e.preventDefault();
        const serviceYanID = 'service_dti88nb';
        const serviceGmailID = 'service_jdtikj8';
        const templateID = 'template_a5l7f77';
        const userID = 'user_IjKdREgbghHCSpo400w6c';

        const templateParams = {
            to: toEmail,
        };

        send(serviceYanID,templateID,templateParams,userID).then(res=>{
             MySwal.fire({
                title: <strong>{t('success')}</strong>,
                html: <i>{t('sent')}</i>,
                icon: 'success'
              })
        }).catch(err=>{
            console.error('error: ',err);
             MySwal.fire({
                title: <strong>{t('error')}</strong>,
                icon: 'error'
              })
            send(serviceGmailID,templateID,templateParams,userID).then(res=>{
            }).catch(err=>{
                console.error('error: ',err);
            })
        })
    }
    return (
        <div>
           <div className="container-fluid banner">
               <div className="row justify-content-center">
                   <div className="col-lg-7 mt-5">
                       <p className="banner__heading mt-3">{t('hasbeenupgraded')}</p>
                       <p className="banner__subheading">v{lastestVersion}</p>
                    </div>
               </div>
               <div className="row justify-content-center blog">
                    <div className="col-lg-7 ">
                        <p>{t('wordsmineis')} <a href="https://chrome.google.com/webstore/detail/wordsmine-one-stop-soluti/pfjninionlecmhganagpckidcmhgjlhd">{t('installextension')}</a> </p> 
                    </div>
               </div>
               <div className="row justify-content-center subscribe mt-3">
                   <div className="col-lg-7">
                       <div className="row">
                           <div className="col-lg-4">
                                <p className="subscribe__text">{t('subscribe')}</p> 
                           </div>
                           <div className="col-lg-8">
                               <div className="form-group ">
                                   <form action="" onSubmit={sendEmail} method="POST" className="subscribe__form">
                                        <svg className="subscribe__icon" viewBox="0 0 512 512"><path d="M464 4.3L16 262.7C-7 276-4.7 309.9 19.8 320L160 378v102c0 30.2 37.8 43.3 56.7 20.3l60.7-73.8 126.4 52.2c19.1 7.9 40.7-4.2 43.8-24.7l64-417.1C515.7 10.2 487-9 464 4.3zM192 480v-88.8l54.5 22.5L192 480zm224-30.9l-206.2-85.2 199.5-235.8c4.8-5.6-2.9-13.2-8.5-8.4L145.5 337.3 32 290.5 480 32l-64 417.1z"></path></svg>
                                        <input className="form-control subscribe__input" onChange={(e)=>setToEmail(e.target.value)} type="email" placeholder={t('emailaddress')} name="email" />
                                        <button type="submit" className="btn subscribe__btnsubmit">{t('submit')}</button>
                                   </form>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    );
}

export default Banner;