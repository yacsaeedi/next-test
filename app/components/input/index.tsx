import React from 'react';

import styles from './styles.module.scss';

const Input = ({ placeholder, disabled, formHook, errors, type, onBlur, value, label }: any) =>
{

    return (
        <div className={styles.container}>
            <div className='flex flex-row items-center justify-between'>
                <h5 className='mb-2 flex flex-1 text-xl text-white ltr:text-left rtl:text-right'>{label}</h5>
            </div>
            <div className={`h-[3.2rem] border ${ errors ? 'border-danger' : 'border-gray-light-3' } placeholder:text-gray-light flex w-full flex-row rounded-xl px-2 outline-none`}>
                <input
                    className={styles.input}
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    value={value}
                    onBlur={onBlur}
                    {...formHook}
                />
            </div>
            { errors ? <span className='mt-2 text-danger md:text-sm h-[1rem]'>{errors}</span> : <span className='mt-2 text-transparent md:text-sm h-[1rem]'></span>}
        </div>
    );
};

export default Input;
