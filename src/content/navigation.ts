
export const navigation = [
  {
    name: 'About Us',
    url: '/about/overview',
    mobileOnly: false,
    sections: [
      {
        name: 'About Us',
        url: '/about/overview',
        links: [
          { name: 'Our Story', url: '/about/our-story' },
          { name: 'Our People', url: '/about/our-people' },
          { name: 'Our Values', url: '/about/our-values' },
          { name: 'Our Customers', url: '/about/our-customers' },
          { name: 'Our Locations', url: '/about/our-locations' },
          { name: 'Contact us', url: '/about/contact-us' },
          { name: 'WoodMac Lab - Share your feedback', url: '/about/woodmac-lab' },
        ],
      },
      {
        name: 'Working At WoodMac',
        url: '/careers/overview',
        links: [
          { name: 'Your Career', url: '/careers/your-career' },
          { name: 'Life at WoodMac', url: '/careers/life-at-woodmac' },
          { name: 'Our Teams', url: '/careers/our-teams' },
          { name: 'Our Culture', url: '/about/our-culture' },
          { name: 'Early Careers', url: '/careers/early-careers' },
        ],
      },
    ],
  },
  {
    name: 'Industries & Services',
    url: '/product-portfolio',
    mobileOnly: false,
    sections: [
        {
            name: 'Explore our portfolio',
            url: '/product-portfolio',
            links: [
                { name: 'Upstream', url: '/industry/upstream' },
                { name: 'Emissions & Carbon Management', url: '/industry/emissions-and-carbon-management' },
                { name: 'Energy Transition Scenarios & Technologies', url: '/industry/energy-transition-scenarios-and-technologies' },
                { name: 'Power & Renewables', url: '/industry/power-and-renewables' },
                { name: 'Gas & LNG', url: '/industry/gas-and-lng' },
                { name: 'Metals & Mining', url: '/industry/metals-and-mining' },
                { name: 'Oils & Chemicals', url: '/industry/oils-chemicals' },
                { name: 'Commodity Trading Analytics', url: '/industry/commodity-trading-analytics' },
                { name: 'Supply Chain Analytics', url: '/products/supply-chain-analytics' },
                { name: 'Consulting', url: '/products/consulting' },
            ]
        }
    ],
  },
  {
    name: 'Market Insights',
    url: '/market-insights',
    mobileOnly: false,
    sections: [
        {
            name: 'Market Insights, Blogs, podcasts & newsletters',
            links: [
                { name: 'Market Insights', url: '/market-insights' },
                { name: 'Horizons', url: '/horizons' },
                { name: 'Blogs', url: '/blogs' },
                { name: 'Podcasts', url: '/podcasts' },
                { name: 'The Inside Track', url: '/market-insights/sign-up' },
                { name: 'Book - Connected', url: '/connected-book' },
            ]
        },
        {
            name: 'Guides and featured insights',
            links: [
                { name: 'Energy Transition', url: '/market-insights/topics/energy-transition' },
                { name: 'CCUS', url: '/market-insights/topics/ccus' },
                { name: 'Electric vehicles', url: '/market-insights/topics/electric-vehicles' },
                { name: 'US trade policies and tariffs', url: '/market-insights/topics/us-trade-policy-and-tariffs' },
                { name: 'Material Transition', url: '/news/feature/the-materials-transition/full-report' },
            ]
        }
    ]
  },
  {
    name: 'Events',
    url: '/events',
    mobileOnly: false,
    sections: [
        {
            name: 'Browse Events',
            url: '/events',
            links: [
                { name: 'Wood Mackenzie Events', url: '/worldwide-events' },
                { name: 'Industry', url: '/events/industries' },
                { name: 'Global events', url: '/events/global' },
                { name: 'Asia', url: '/events/asia' },
                { name: 'Africa', url: '/events/africa' },
                { name: 'Europe', url: '/events/europe' },
                { name: 'North America', url: '/events/north-america' },
            ]
        }
    ]
  },
  {
    name: 'Online Reports',
    url: '/store',
    mobileOnly: false,
    sections: [
        {
            name: 'Browse All Reports',
            url: '/store',
            links: [
                { name: 'Power and renewables', url: '/store/industry-sector/power-and-renewables' },
                { name: 'Upstream oil and gas', url: '/store/industry-sector/upstream-oil-and-gas' },
                { name: 'Macroeconomics, risk and global trends', url: '/store/industry-sector/macroeconomics-risk-and-global-trends' },
                { name: 'Oil and gas markets', url: '/store/industry-sector/oil-and-gas-markets' },
                { name: 'Midstream oil and gas', url: '/store/industry-sector/midstream-oil-and-gas' },
                { name: 'LNG', url: '/store/industry-sector/lng-reports' },
                { name: 'Downstream oil refining', url: '/store/industry-sector/downstream-oil-refining' },
                { name: 'Coal', url: '/store/industry-sector/coal' },
                { name: 'Metals markets', url: '/store/industry-sector/metals-markets' },
                { name: 'Metals costs', url: '/store/industry-sector/metals-costs' },
                { name: 'Chemicals', url: '/store/industry-sector/petrochemicals' },
                { name: 'Wallmaps for sale', url: '/store/wallmaps' },
            ]
        }
    ]
  },
  {
    name: 'Lens Platform',
    url: 'https://identity.woodmac.com/sign-in',
    mobileOnly: false,
    sections: [
        {
            name: 'Already a customer? Log-in to access Lens',
            url: 'https://identity.woodmac.com/sign-in',
            links: [
                { name: 'Power & Renewables', url: '/lens/power-and-renewables' },
                { name: 'Hydrogen', url: '/lens/hydrogen' },
                { name: 'Upstream', url: '/lens/upstream' },
                { name: 'Subsurface', url: '/lens/subsurface' },
                { name: 'Gas & LNG', url: '/lens/gas-lng' },
                { name: 'Metals & Mining', url: '/lens/metals-and-mining' },
                { name: 'Carbon', url: '/lens/carbon' },
                { name: 'Emissions', url: '/lens/emissions' },
                { name: 'Energy Transition', url: '/lens/lens-energy-transition-scenarios' },
                { name: 'Lens Direct - API', url: '/lens/direct' },
            ]
        }
    ]
  },
];
