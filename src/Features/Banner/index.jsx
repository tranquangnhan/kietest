import Axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useTranslation } from 'react-i18next';
import "./style.scss";

Banner.propTypes = {
    
};


function Banner(props) {
    const [toEmail,setToEmail] = useState("");

    const MySwal = withReactContent(Swal);

    const { t } = useTranslation();

    function sendEmail(e){
        e.preventDefault();

        Axios.post('http://localhost:3001/sendemail',
        {toemail:toEmail}).then((res)=>{
            if (res.data.msg === 'success'){
               MySwal.fire({
                    title: <p>Gửi Mail Thành Công</p>,
                    icon: "success",
                })
            }else if(res.data.msg === 'fail'){
                MySwal.fire({
                    title: <p>Gửi Mail Thất Bại</p>,
                    icon: "error",
                })
            }
        })
    }
    return (
        <div>
           <div className="container-fluid banner">
               <div className="row justify-content-center">
                   <div className="col-lg-7 mt-5">
                       <p className="banner__heading mt-3">{t('hasbeenupgraded')}</p>
                        <p className="banner__subheading">v1.3</p>
                        <p>{t('fastestway')} <a href="" className="banner__link">{t('getstated')}</a> </p>
                    </div>
               </div>
               <hr />
               <div className="row justify-content-center subscribe">
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