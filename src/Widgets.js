import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widgets() {
  const newsArticle=(heading,subTitle)=>{
    return(
  <div className='widgets_article'>
   <div className="widgets_articleLeft">
    <FiberManualRecordIcon/>
   </div>
   <div className="widgets_articleRight">
    <h4>{heading}</h4>
    <p>{subTitle}</p>
   </div>

  </div>
    );
  };
  return (
    <div className='widgets'>
      <div className="widgets_header">
        <h2>Linkedin News</h2>
        <InfoIcon/>
      </div>
      {newsArticle("Hashim Khan","Top News - First Bilionaire of Pakistan")}
      {newsArticle("Tesla hit new high","Tesla shares rise to all high")}
      {newsArticle("Crypto market is down","Bitcoin is at its lowest in the history")}
    </div>
  )
}

export default Widgets