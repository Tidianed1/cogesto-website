Based on the HTML source code provided and the **Component Inventory** you shared earlier, here is the structural analysis of the page.

I have mapped each HTML section to the corresponding **Astro Component** from your specific protocol.

### 📄 Page Structure Analysis: `Upstream`

The page follows a standard "Stacked Band" layout. Here is the sequence from top to bottom:

1.  **Global Header** (`NewHeader.astro`)
    *   Contains the main navigation, search, and "Sign in" functionality.
2.  **Hero Section** (`HeroMultiTemplate.astro`)
    *   **Visuals:** Blue background with a diagonal crop image on the right.
    *   **Content:** Title "Upstream", subtitle text, and a "Get in touch" CTA button.
3.  **Feature Content** (`BodyCopyImage.astro`)
    *   **Layout:** Text on Left, Image on Right.
    *   **Content:** "Balancing demand with decarbonisation".
4.  **Value Props Grid** (`CardGrid` containing `Card.astro`)
    *   **Visuals:** A row of 3 cards with a blue background.
    *   **Content:** "Thousands of valuations", "Expertise for every decision", "Assess risk".
5.  **Product Finder** (Mapped to `TextOnlySection.astro` + `CardGrid`)
    *   *Note:* The original site uses a complex AJAX filter here. For your migration, this maps to a section title followed by a grid of **`ServicesCard.astro`** or **`HeroProduct.astro`**.
6.  **Consulting Feature** (`BodyCopyImage.astro`)
    *   **Layout:** Text on Left, Image on Right.
    *   **Content:** "Make smarter decisions...".
7.  **Contact Feature** (`BodyCopyImage.astro`)
    *   **Layout:** Text on Left, Image on Right.
    *   **Content:** "Contact an expert" (Contains an embedded form).
8.  **Latest Insights** (`CardGrid` containing `NewsCard.astro` or `ArticleCard.astro`)
    *   **Content:** "Explore some of our latest thinking". Displays 3 articles with images and "Opinion" badges.
9.  **Global Footer** (`NewFooter.astro`)

---

### 🛠️ JSON Data Structure

Here is the exact JSON file content you can drop into `src/content/pages/upstream.json`. This strictly follows your **Component Protocol**.

```json
{
  "title": "Upstream | Wood Mackenzie",
  "description": "Discover how our data-driven solutions and expert insights can transform your understanding of the upstream oil and gas industry.",
  "slug": "upstream",
  "sections": [
    {
      "component": "HeroMultiTemplate",
      "props": {
        "title": "Upstream",
        "subtitle": "Shape your oil and gas strategies with unrivalled data, immediate insights and trusted fiscal coverage.",
        "theme": "blue",
        "backgroundImage": "https://www.woodmac.com/siteassets/frontify_media_download/photography/upstream/micro/micro_upstream_gettyimages-1210141189.jpg"
      }
    },
    {
      "component": "BodyCopyImage",
      "props": {
        "heading": "Balancing demand with decarbonisation",
        "text_content": "Upstream oil and gas still dominate the energy mix. But ongoing global conflicts and decarbonisation targets raise huge questions about the industry’s future. How can you balance the energy transition with shareholder returns? Can advantaged resources be identified and developed fast enough?",
        "imageSrc": "https://www.woodmac.com/siteassets/frontify_media_download/photography/upstream/micro/micro_upstream_gettyimages-487829113.jpg",
        "imagePosition": "right"
      }
    },
    {
      "component": "CardGrid",
      "props": {
        "heading": null,
        "items": [
          {
            "title": "Thousands of valuations. One platform.",
            "description": "Benchmark your portfolio and evaluate the competition with unrivalled coverage of more than 5,600 upstream assets and 11,000 companies.",
            "link": "#"
          },
          {
            "title": "Expertise for every decision",
            "description": "Add context to your data with detailed insights into the trends, companies and projects transforming the oil and gas sector.",
            "link": "#"
          },
          {
            "title": "Assess risk and reward across the value chain",
            "description": "Compare investment candidates to find the best strategic fit, generate valuations under different price scenarios, and run ‘what if?’ analysis.",
            "link": "#"
          }
        ]
      }
    },
    {
      "component": "TextOnlySection",
      "props": {
        "title": "Find the right product for your needs",
        "content": "Our solutions cover every aspect of the industry – from insights into each commodity suite to our Lens data analytics platform.",
        "alignment": "center"
      }
    },
    {
      "component": "CardGrid",
      "props": {
        "heading": "Key Products",
        "items": [
          {
            "title": "Lens Upstream",
            "description": "Industry intelligence that enables you to minimise risk, identify upside, and optimise resources faster than anyone one else.",
            "link": "/lens/upstream/"
          },
          {
            "title": "Upstream Service",
            "description": "In-depth insight and forward-looking analysis of the upstream oil and gas sector at the asset and country level.",
            "link": "/industry/oil-and-gas/upstream/"
          },
          {
            "title": "Lens Subsurface",
            "description": "Integrated commercial and technical upstream data for key portfolio insights.",
            "link": "/lens/subsurface/"
          }
        ]
      }
    },
    {
      "component": "BodyCopyImage",
      "props": {
        "heading": "Make smarter decisions in a volatile market",
        "text_content": "Expert advisory services with a global team of consultants, leveraging the industry standard – our data and research. We support customers to find and develop opportunities and manage risks.",
        "imageSrc": "https://www.woodmac.com/siteassets/frontify_media_download/photography/people/_micro/micro_people_gettyimages-1346145497.jpg",
        "imagePosition": "right"
      }
    },
    {
      "component": "BodyCopyImage",
      "props": {
        "heading": "Contact an expert",
        "text_content": "Discover how our data-driven solutions and expert insights can transform your understanding of the upstream oil and gas industry. Get in touch today.",
        "imageSrc": "https://www.woodmac.com/siteassets/frontify_media_download/photography/people/_micro/micro_people_gettyimages-104821183.jpg",
        "imagePosition": "right"
      }
    },
    {
      "component": "CardGrid",
      "props": {
        "heading": "Explore some of our latest thinking in upstream",
        "items": [
          {
            "title": "Breakthrough oil finds in the North Sea",
            "description": "What do the discovery of Norway’s ‘missing’ oil barrels and a 200 million barrel find in Polish waters mean for the European upstream sector?",
            "link": "/news/opinion/breakthrough-oil-finds/"
          },
          {
            "title": "Gulf of America upstream: rig rates",
            "description": "Day rates have held firm despite significant softening in oil prices since 2022, but can high prices prevail much longer?",
            "link": "/news/opinion/gulf-of-america/"
          },
          {
            "title": "Thailand’s gas crisis crunch",
            "description": "As the region attracts new interest from explorers, Thailand hopes licencing can unlock new resources.",
            "link": "/news/opinion/thailand-gas-crisis/"
          }
        ]
      }
    }
  ]
}
```
