/*
  Author: Rina Chua
  Date: 13 Oct 2021
*/

import React, {useState, useEffect, useCallback}  from 'react';
import {useDropzone} from 'react-dropzone';
import styles from './styles.module.scss';

const ZoneUpload = ({image, onDrop}) => {
  const {getRootProps, getInputProps} = useDropzone({onDrop});
  return (
    <section className={styles.container}>
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        {(image === null || image === undefined) && ( 
          <p>Drag and drop some files here, or click to select files</p>
        )}
        {(image !== null || image !== undefined) && ( 
          <img className={styles.imageWrapper} src={image} alt='Product Image'/>
        )}
      </div>
    </section>
  );
}

export default ZoneUpload;
