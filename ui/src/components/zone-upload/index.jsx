import React from 'react';
import styles from './styles.module.scss'

const ZoneUpload = () => {
    return (
        <div className={styles.dropZone}>
            <span>Drop file here or click to upload</span>
            <input type="file" />
        </div>
    )
}

export default ZoneUpload;