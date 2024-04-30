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
                {
                    title: 'GHCN Weather data dashboard',
                    description: 'An Observable Framework static site with simple dashboard visualizations, using Python and JS client libraries to connect to data on Redivis',
                    // link: `https://5068d6bd8cd0119e.observablehq.cloud/redivis-on-observable/`, // observable (manual) deployment
                    link: `https://labs.redivis.com/observable`,
                    thumbnail: '/assets/observable.png',
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
                {
                    title: 'Item Response Warehouse',
                    description: 'A Stanford GSE/Psychology effort which allows exploration and analysis of open, harmonized item response datasets',
                    link: `https://datapages.github.io/irw/`,
                    thumbnail: '/assets/irw.png',
                }
            ],
        },
    ]
};

export default config;