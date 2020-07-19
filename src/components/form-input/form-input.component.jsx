import React from 'react'

import './form-input.style.scss';

const FormInput = ({handleOnChange, label, ...otherProps}) => (
    <div className ='group'>
        <input className='form-input' onChange={handleOnChange}{...otherProps}/>
        {label ?
        (<label className={`${otherProps.value.lenght ? 'shrink'  : ''} form-input-label`}>
        {label}
        </label>) :
        null}
    </div>
)

export default FormInput;