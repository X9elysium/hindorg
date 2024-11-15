'use client';
import { useState } from 'react'
import Styles from './Card.module.css'


export default function Card({datasr}) {
  const [descview, setDescview] = useState(false)
  function opendesc(){
    if(descview == false){
      setDescview(true);
    }
    
  }
  function closethmu(){
    if(descview == true){
      setDescview(false);
    }
  }
  

  return (
    <>
    <div onClick={opendesc} className={Styles.cardwrapper}>
        <span>{datasr.name}</span>
        
    </div>
    {descview && <div onClick={closethmu} className={Styles.fullback}>
    <div className={Styles.close}>
    <span>click anywhere to close</span>
    </div>
    <div className={Styles.content}>
      <div className={Styles.titlewsvg}>
        <svg xmlns="http://www.w3.org/2000/svg" width="278.442" height="251.404" viewBox="0 0 278.442 251.404"><g id="_5926_Converted_" data-name="5926 [Converted]" transform="translate(-131.568 -144.84)"><g id="Object" transform="translate(131.568 144.84)"><g id="Group_1" data-name="Group 1"><path id="Path_1" data-name="Path 1" d="M761.031,414.567c-.034,9.086-2.623,21.88-8.483,35.875-8.242,19.7-15.774,40.721-7.822,53.6,4.726,7.653,11,11.81,17.052,12.36a25.248,25.248,0,0,0,30.956-19.642h0a18.711,18.711,0,0,0,.145-9.008,25.312,25.312,0,0,0-1.244-4.736c-3.819-11.892-12.9-27.406-15.562-52.04-.646-12.056-.993-18.866-6.766-25.882a28.608,28.608,0,0,0-5.411-5.358,26.223,26.223,0,0,0-2.493-1.543l3.573,3.569a6.281,6.281,0,0,1,0,8.878Zm6.317,93.4c-.352,1.119-2.874,1.837-3.979,1.495-6.043-1.842-10.132-5.2-12.563-9.071a22.291,22.291,0,0,1-3.294-11.955,24.448,24.448,0,0,1,.926-6.761,2.116,2.116,0,0,1,4.061,1.191,19.621,19.621,0,0,0-.757,5.575c-.01,3.178.921,5.155,2.85,8.179s6.308,5.647,11.511,7.263C767.209,504.217,767.686,506.851,767.349,507.969Z" transform="translate(-515.403 -351.002)" fill="#efffef" stroke="#1b3e1c" strokeWidth="1"/><path id="Path_2" data-name="Path 2" d="M288.537,401.517c-16.927,3.448-21.224,24.6-7.74,38.083l52.078,52.088,52.093,52.083c13.479,13.484,34.64,9.182,38.074-7.745l22.521-110.749,52.064-52.064,1.321,1.317a6.281,6.281,0,0,0,8.878,0l10.624-10.624,3.94-3.935a6.281,6.281,0,0,0,0-8.878l-3.573-3.569L497.93,326.638l-24.455-24.455a6.288,6.288,0,0,0-8.888,0l-14.554,14.559a6.281,6.281,0,0,0,0,8.878l1.321,1.321L399.291,379Zm183.028-14.656a4.754,4.754,0,1,1,0-6.727A4.753,4.753,0,0,1,471.566,386.861Zm-20.308-64.785a2.329,2.329,0,0,1,0-3.274l.039-.034a2.305,2.305,0,0,1,3.27,0L480.2,344.394,505.8,370a2.311,2.311,0,0,1,0,3.274l-.029.029a2.311,2.311,0,0,1-3.274,0l-25.6-25.6ZM412.485,517.435c-2.691,13.257-19.256,16.623-29.818,6.062L342.1,482.921l-41.025-41.015c-10.561-10.566-7.2-27.136,6.067-29.827l30.7-6.245c-.9,15.075,7.431,29.832,28.776,33.126a170.658,170.658,0,0,0,17.332,2.1c13.281,1.2,21.412,2.84,39.062,24.648Zm23.5-145.249a7.018,7.018,0,0,1,9.925,9.925,7.018,7.018,0,1,1-9.925-9.925Zm-29.61,46.04a10.628,10.628,0,1,1,2.971,9.028A10.58,10.58,0,0,1,406.38,418.227Z" transform="translate(-272.821 -300.341)" fill="#1b3e1c"/><path id="Path_3" data-name="Path 3" d="M330.752,525.35c-13.262,2.691-16.623,19.261-6.067,29.827l41.025,41.015,40.572,40.576c10.561,10.561,27.127,7.2,29.818-6.062l10.518-51.721c-17.65-21.8-25.781-23.447-39.062-24.648a170.507,170.507,0,0,1-17.332-2.1c-21.34-3.289-29.673-18.051-28.776-33.126Z" transform="translate(-296.441 -413.609)" fill="#efffef"/><path id="Path_4" data-name="Path 4" d="M558.672,525.954a10.637,10.637,0,1,0,9.042,2.985A10.6,10.6,0,0,0,558.672,525.954Z" transform="translate(-416.095 -417.096)" fill="#efffef"/><path id="Path_5" data-name="Path 5" d="M608.956,447.11a6.98,6.98,0,1,0,9.93,0A7.007,7.007,0,0,0,608.956,447.11Z" transform="translate(-445.787 -375.265)" fill="#efffef"/><path id="Path_6" data-name="Path 6" d="M669.491,464.31a4.754,4.754,0,1,0,6.723,0A4.744,4.744,0,0,0,669.491,464.31Z" transform="translate(-477.474 -384.513)" fill="#efffef"/><path id="Path_7" data-name="Path 7" d="M645.416,337.83a2.305,2.305,0,0,0-3.27,0l-.039.034a2.329,2.329,0,0,0,0,3.274l25.632,25.627,25.6,25.6a2.311,2.311,0,0,0,3.274,0l.029-.029a2.311,2.311,0,0,0,0-3.274l-25.6-25.6Z" transform="translate(-463.671 -319.399)" fill="#efffef"/><path id="Path_8" data-name="Path 8" d="M757.675,568.228a2.112,2.112,0,0,0-2.619,1.432,24.448,24.448,0,0,0-.926,6.761,22.291,22.291,0,0,0,3.294,11.955c2.431,3.872,6.52,7.229,12.563,9.071,1.109.342,3.631-.376,3.979-1.495s-.14-3.747-1.249-4.089c-5.2-1.616-9.587-4.239-11.511-7.263s-2.86-5-2.85-8.179a19.8,19.8,0,0,1,.757-5.575A2.1,2.1,0,0,0,757.675,568.228Z" transform="translate(-522.019 -438.995)" fill="#fff"/></g></g></g></svg>
        <span>{datasr.name}</span>
      </div>
      <div className={Styles.uline}></div>
      <div className={Styles.descinner}>{ datasr.description.map(item => <p key={item}>• {item}</p> ) }</div>
    </div> 
    
    </div>
    }
    </>
  )
}
