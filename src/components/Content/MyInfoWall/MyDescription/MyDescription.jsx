import React from 'react';
import './MyDescription.css';

const MyDescription =(props)=>{
 return(
<div className="description">
<div>About me : {props.profile.aboutMe}</div>
<div>Full name : {props.profile.fullName}</div>
<div>Work or Study</div>
<div>Interesting</div>
</div>
 )
};
export default MyDescription;