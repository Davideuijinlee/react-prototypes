import React from 'react';
 
export default props => {
    console.log(props.info)
    const {info} = props;
    const img = 'im:image'
    return (
        <div>
            <img src={info['im:image'][2]}/>,
            <h3>{info['im:name'].label}</h3>
        </div>
    );
}