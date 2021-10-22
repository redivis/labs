import PropTypes from 'prop-types';
import React from 'react';

import Typeography from '@mui/material/Typography';

import * as styles from './styles.css';


export default function LabThumbnail({ title, description, link, thumbnail }){
	return (
		<a className={styles.labThumbnailWrapper} href={link}>
			<img className={styles.imageWrapper} src={thumbnail} />
			<Typeography className={styles.title} sx={{ color: '#4d4c54', marginTop: '10px', fontSize: 16 }}>{title}</Typeography>
			<Typeography sx={{ color: '#817f8a' }} title={description}>{description}</Typeography>
		</a>
	)
}

LabThumbnail.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	link: PropTypes.string,
	thumbnail: PropTypes.string,
};
