/*
  Author: Rina Chua
  Date: 31 Oct 2021
*/

import React from 'react';
import {MdAdd, MdRemove} from 'react-icons/md';
import styles from './styles.module.scss';

const QtyField = ({itemQty, setItemQty}) => {
    const onMinusClick = () => setItemQty(itemQty-1);
    const onAddClick = () => setItemQty(itemQty+1);
    
    return (
        <div className={styles.inputWrapper}>
            <li>
                <button type='button' className={styles.buttonWrapper} onClick={onMinusClick}><MdRemove size={20}/></button>
            </li>
            <li>
                <input className={styles.textInputWrapper} type='text' value={itemQty} />  
            </li>
            <li>
                <button type='button' className={styles.buttonWrapper} onClick={onAddClick}><MdAdd size={20}/></button>
            </li>
        </div>
    );
}

export default QtyField;