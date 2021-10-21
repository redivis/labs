const config = {
    sections: [
        {
            id: 'redivis',
            name: 'Redivis team',
            description: `Open-source projects created by Redivis`,
            labItems: [
                {
                    title: 'Geospatial coverage analyzer',
                    description: 'Compute a geographic area within a particular travel time from the nearest facility, utilizing information from OpenStreetMap',
                    link: `https://labs.redivis.com/geo-coverage`,
                    thumbnail: '/assets/geo-coverage.png',
                },
                {
                    title: 'Re-identification risk assessment',
                    description: 'Compute k-anonymity values to understand the probability of re-identification of entities within Redivis tables',
                    link: `https://labs.redivis.com/k-anonymity`,
                    thumbnail: '/assets/k-anonymity.png',
                },
            ],
        },
        {
            id: 'community',
            name: 'Community',
            description: `Featured applications from the Redivis community`,
            labItems: [
                {
                    title: 'Energy for Productive Use',
                    description: 'A Columbia World Projects effort which aims to increase access to energy in targeted areas of Uganda, unlocking economic opportunity across the region exploring',
                    link: `https://qsel.columbia.edu/cwp-epu-data-platform/`,
                    thumbnail: '/assets/qsel.png',
                },
            ],
        },
    ]
};

export default config;