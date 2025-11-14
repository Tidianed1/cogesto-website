// src/content/footer.ts
// Data for the NewFooter component

interface LinkItem {
  text: string;
  href: string;
  title?: string;
  target?: string;
}

interface SocialLinkItem extends LinkItem {
  svgPath: string;
  viewBox: string;
}

export const footerData = {
  tagline: "Inspiring natural resources decisions.",
  newsletterTitle: "Get valuable updates from our team of experts right into your inbox.",
  newsletterCtaText: "Sign up for weekly insights",
  newsletterCtaHref: "/market-insights/sign-up/",
  discoverLinks: {
    title: "DISCOVER",
    items: [
      { text: "Power & Renewables", href: "/industry/power-and-renewables/", title: "Power & Renewables" },
      { text: "Energy Transition", href: "/market-insights/topics/energy-transition/", title: "Energy Transition" },
      { text: "Consulting", href: "/products/consulting/", title: "Consulting" },
      { text: "Events", href: "/events/", title: "Events" },
      { text: "Reports", href: "/store/", title: "Reports" },
    ],
  },
  resourcesLinks: {
    title: "RESOURCES",
    items: [
      { text: "News & Opinion", href: "/market-insights/", title: "News & Opinion" },
      { text: "Horizons", href: "/horizons/", title: "Horizons" },
      { text: "Podcasts", href: "/market-insights/types/podcasts/", title: "Podcasts" },
      { text: "Customer support", href: "https://support.woodmac.com/en/", title: "Customer support", target: "_blank" },
    ],
  },
  aboutLinks: {
    title: "ABOUT WOODMAC",
    items: [
      { text: "About us", href: "/about/overview/", title: "About us" },
      { text: "Media centre", href: "/media-centre/", title: "Media centre" },
      { text: "Careers", href: "/careers/", title: "Careers" },
      { text: "Our locations", href: "/about/our-locations/", title: "Our locations", target: "_top" },
    ],
  },
  legalLinks: [
    { text: "Terms of use", href: "/conditions-of-use/" },
    { text: "Privacy", href: "/privacy-policy-centre/" },
    { text: "Policies", href: "/privacy-policy-centre/compliance/" },
    { text: "Cookie policy", href: "/cookie-policy/" },
  ],
  socialLinks: [
    {
      text: "X",
      href: "https://x.com/WoodMackenzie",
      svgPath: "M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z",
      viewBox: "0 0 1200 1227",
    },
    {
      text: "LinkedIn",
      href: "http://www.linkedin.com/company/wood-mackenzie",
      svgPath: "M22.223 0H1.772C.792 0 0 .773 0 1.73v20.536C0 23.222.792 24 1.772 24h20.451c.98 0 1.777-.778 1.777-1.73V1.73C24 .773 23.203 0 22.223 0ZM7.12 20.452H3.558V8.995H7.12v11.457ZM5.34 7.434a2.064 2.064 0 1 1 0-4.125 2.063 2.063 0 0 1 0 4.125Zm15.112 13.018h-3.558v-5.57c0-1.326-.024-3.037-1.852-3.037-1.851 0-2.133 1.449-2.133 2.944v5.663H9.356V8.995h3.413v1.566h.047c.473-.9 1.636-1.852 3.365-1.852 3.605 0 4.27 2.372 4.27 5.457v6.286Z",
      viewBox: "0 0 24 24",
    },
    {
      text: "Bluesky",
      href: "https://bsky.app/profile/woodmac.com",
      svgPath: "M123.121 33.6637C188.241 82.5526 258.281 181.681 284 234.873C309.719 181.681 379.759 82.5526 444.879 33.6637C491.866 -1.61183 568 -28.9064 568 57.9464C568 75.2916 558.055 203.659 552.222 224.501C531.947 296.954 458.067 315.434 392.347 304.249C507.222 323.8 536.444 388.56 473.333 453.32C353.473 576.312 301.061 422.461 287.631 383.039C285.169 375.812 284.017 372.431 284 375.306C283.983 372.431 282.831 375.812 280.369 383.039C266.939 422.461 214.527 576.312 94.6667 453.32C31.5556 388.56 60.7778 323.8 175.653 304.249C109.933 315.434 36.0535 296.954 15.7778 224.501C9.94525 203.659 0 75.2916 0 57.9464C0 -28.9064 76.1345 -1.61183 123.121 33.6637Z",
      viewBox: "0 0 568 501",
    },
    {
      text: "Youtube",
      href: "https://www.youtube.com/woodmackenziechannel",
      svgPath: "M23.76 7.2s-.233-1.655-.955-2.381c-.914-.956-1.936-.961-2.405-1.017-3.356-.244-8.395-.244-8.395-.244h-.01s-5.039 0-8.395.244c-.469.056-1.49.06-2.405 1.017C.473 5.545.244 7.2.244 7.2S0 9.145 0 11.086v1.819c0 1.94.24 3.886.24 3.886s.233 1.654.95 2.38c.915.957 2.115.924 2.65 1.027 1.92.183 8.16.24 8.16.24s5.044-.01 8.4-.249c.469-.056 1.49-.06 2.405-1.017.722-.727.956-2.381.956-2.381S24 14.85 24 12.905v-1.819c0-1.94-.24-3.886-.24-3.886ZM9.52 15.113V8.367l6.483 3.385-6.483 3.36Z",
      viewBox: "0 0 24 24",
    },
  ],
};
