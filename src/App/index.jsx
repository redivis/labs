import React, { useEffect  } from 'react';
import { withRouter } from 'react-router-dom';

import LabThumbnail from '../LabThumbnail';
import Header from '../Header';

import config from '../config';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typeography from '@mui/material/Typography';

import * as styles from './styles.css';

const theme = createTheme({
	palette: {
		primary: {
			light: '#a88bc9',
			main: '#7f3b97',
			dark: '#5e1e75',
			contrastText: '#ffffff',
		},
		secondary: {
			light: '#d4d3db',
			main: '#4d4c54',
			dark: '#353538',
			contrastText: '#ffffff',
		},
	},
	shape: {
		borderRadius: 2,
	},
	typography: {
		fontFamily: 'Nunito Sans, sans-serif',
		fontSize: 14 * (14/16),
		fontWeightLight: 600,
		fontWeightRegular: 600,
		fontWeightMedium: 600,
		fontWeighthBold: 700,
		fontHeight: 'unset',
	}
});

function App({ history }) {
	useEffect(() => {
		const path = localStorage.getItem('path');
		if (path) {
			localStorage.removeItem('path');
			history.replace(`/${path}`);
		}
	}, []);

	const renderBody = () => {
		return (
			<div className={styles.scrollWrapper}>
				<div className={styles.bodyWrapper}>
					<div className={styles.titleWrapper}>
						<Typeography component={'span'}>{`These projects are built using the `}</Typeography>
						<Typeography component={'a'} href={'https://apidocs.redivis.com'} target={'_blank'}>{'Redivis API'}</Typeography>
						<Typeography component={'span'}>{` and its client libraries, and utilize data stored on the `}</Typeography>
						<Typeography component={'a'} href={'https://redivis.com'} target={'_blank'}>{'Redivis platform'}</Typeography>
					</div>
					{config.sections.map(({ id, name, description, labItems }) => (
						<div key={id} className={styles.sectionWrapper}>
							<Typeography component={'h3'} sx={{ fontSize: 20 }}>{name}</Typeography>
							<Typeography sx={{ color: '#817f8a' }}>{description}</Typeography>
							<div className={styles.labItemsWrapper}>
								{labItems.map((labItem, i) => (
									<LabThumbnail key={i} {...labItem} />
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		);
	};

	return (
		<ThemeProvider theme={theme}>
			<div className={styles.appWrapper}>
				<Header />
				{renderBody()}
			</div>
		</ThemeProvider>
	);
}
export default withRouter(App);
