Based on the HTML source code provided for the **Consulting** page, here is the structural analysis and the JSON mapping.

### 📄 Page Structure Analysis: `Consulting`

This page uses a very similar layout to the Upstream page, relying heavily on stacked bands of content.

1.  **Global Header** (`NewHeader.astro`)
2.  **Hero Section** (`HeroMultiTemplate.astro`)
    *   **Visuals:** White background (`bg-white`), image on the right (solar/power grid).
    *   **Content:** Title "Energy & Natural Resources Consulting", subtitle, and a "Contact us" CTA (Form Modal).
3.  **Intro Section** (`BodyCopyImage.astro`)
    *   **Layout:** Text on Left, Image on Right.
    *   **Content:** "Consulting Services".
4.  **Services Overview** (`TextOnlySection.astro` + `CardGrid`)
    *   **Structure:** A split header (Title left, Text right) followed by a grid of 4 cards.
    *   **Content:** Industries, Services, Case Studies, People.
    *   *Note:* The original HTML splits the title and description. We will combine them into a `TextOnlySection` or use `CardGrid`'s heading prop.
5.  **Value Proposition Text** (`TextOnlySection.astro`)
    *   **Layout:** Centered/Wide text block with a light grey background.
    *   **Content:** "Positioning you for success..."
6.  **Benefits Grid (Spotlight Bar)** (`CardGrid`)
    *   **Visuals:** Two rows of 4 items. Small cards with text on the left and an icon on the right.
    *   **Content:** "Design new business models", "Gain confidence", etc.
7.  **Closing Feature** (`BodyCopyImage.astro`)
    *   **Layout:** Text on Left, Image on Right.
    *   **Content:** "Designed to meet your goals" (includes bullet points) + "Contact us" CTA.
8.  **Global Footer** (`NewFooter.astro`)

---

### ⚠️ Missing / New Component Requirements

To perfectly replicate this page, you need to address these gaps in your current inventory:

1.  **`IconCard.astro` (New Component):**
    *   **Context:** The "Spotlight Bar" (Section 6) displays a grid of 8 items. Each item is simple text with an icon on the right.
    *   **Current Solution:** You can use `Card.astro` inside a `CardGrid`, but standard Cards usually expect an image at the top. You may need to create a variant `type="icon-side"` for your Card component.
2.  **Complex Form Handling:**
    *   The Hero and the Footer Feature both use "Contact Us" buttons that trigger a modal/pop-up form.
    *   **Action:** Ensure `HeroMultiTemplate` and `BodyCopyImage` accept a `ctaAction` prop (e.g., `ctaType: 'modal'`) instead of just a URL link.

---

### 🛠️ JSON Data Structure

Here is the JSON file content for `src/content/pages/consulting.json`:

```json
{
  "title": "Natural Resources & Energy Consulting Services | Wood Mackenzie",
  "description": "Our experienced consultants understand your business and the wider competitive landscape, turning complex challenges into profitable opportunities.",
  "slug": "consulting",
  "sections": [
    {
      "component": "HeroMultiTemplate",
      "props": {
        "title": "Energy & Natural Resources Consulting",
        "subtitle": "Providing bespoke, independent advice that helps our clients navigate critical challenges to make and execute energy & natural resources investment decisions with confidence.",
        "theme": "white",
        "backgroundImage": "https://www.woodmac.com/siteassets/frontify_media_download/photography/solar/micro_solar/micro_power_gettyimages-123318228.jpg"
      }
    },
    {
      "component": "BodyCopyImage",
      "props": {
        "heading": "Consulting Services",
        "text_content": "The energy transition is unstoppable, and it’s changing the game. Increased technological, commercial, financial and regulatory innovation and the unprecedented availability of capital are reshaping new and traditional energy and natural resources value chains. Wood Mackenzie’s independent strategic analysis will help you to shape your business on a path to decarbonisation.",
        "imageSrc": "https://www.woodmac.com/siteassets/frontify_media_download/photography/people/_micro/micro_people_gettyimages-1325134720.jpg",
        "imagePosition": "right"
      }
    },
    {
      "component": "TextOnlySection",
      "props": {
        "title": "Learn more about our solutions",
        "content": "Find out more information on how we can help by reviewing more information about our consultancy services.",
        "alignment": "left"
      }
    },
    {
      "component": "CardGrid",
      "props": {
        "heading": null,
        "items": [
          {
            "title": "Industries",
            "description": "Our consulting teams work across every part of the energy, chemicals, metals & mining value chain.",
            "icon_or_image": "https://www.woodmac.com/siteassets/frontify_media_download/icons/128-px-icons/icon-factory-building-128px.png",
            "link": "/products/consulting/industry/"
          },
          {
            "title": "Services",
            "description": "We provide bespoke strategic, market, and operational improvement consulting services.",
            "icon_or_image": "https://www.woodmac.com/siteassets/frontify_media_download/icons/128-px-icons/icon-rating-star-winner-128px.png",
            "link": "/products/consulting/solutions/"
          },
          {
            "title": "Case Studies",
            "description": "Our detailed case studies examine specific business challenges and successes.",
            "icon_or_image": "https://www.woodmac.com/siteassets/frontify_media_download/icons/128-px-icons/icon-products-briefcase-128px.png",
            "link": "/products/consulting/case-studies/"
          },
          {
            "title": "People",
            "description": "We understand the challenges our customers face because we are deeply embedded in the industries we serve.",
            "icon_or_image": "https://www.woodmac.com/siteassets/frontify_media_download/icons/128-px-icons/icon-multiple-users-1-128px.png",
            "link": "/products/consulting/people/"
          }
        ]
      }
    },
    {
      "component": "TextOnlySection",
      "props": {
        "title": "Positioning you for success in today's complex marketplace",
        "content": "Our consultants are integral parts of the industries they advise, giving them a specific understanding of the competitive landscape in which your business functions. Supported by a global network of research professionals, our team covers every significant asset, company and market in the energy & natural resource sectors.",
        "alignment": "center"
      }
    },
    {
      "component": "CardGrid",
      "props": {
        "heading": "Key Benefits",
        "items": [
          {
            "title": "Business Models",
            "description": "Design new business models for the Energy Transition",
            "icon_or_image": "https://www.woodmac.com/siteassets/frontify_media_download/icons/128-px-icons/icon-ecology-leaf-settings-128px.png",
            "link": "#"
          },
          {
            "title": "Investment Confidence",
            "description": "Gain confidence to invest in energy and natural resources",
            "icon_or_image": "https://www.woodmac.com/siteassets/frontify_media_download/icons/128-px-icons/icon-accounting-coins-128px.png",
            "link": "#"
          },
          {
            "title": "Better Decisions",
            "description": "Make better decisions based on independent primary research",
            "icon_or_image": "https://www.woodmac.com/siteassets/frontify_media_download/icons/128-px-icons/icon-study-light-idea-128px.png",
            "link": "#"
          },
          {
            "title": "Carbon Neutrality",
            "description": "Chart your short-term and long-term pathway to carbon neutrality",
            "icon_or_image": "https://www.woodmac.com/siteassets/frontify_media_download/icons/128-px-icons/icon-air-polution-co2-down-128px.png",
            "link": "#"
          },
          {
            "title": "Evaluate Strategies",
            "description": "Evaluate and test your strategies and plans",
            "icon_or_image": "https://www.woodmac.com/siteassets/frontify_media_download/icons/128-px-icons/icon-idea-strategy-128px.png",
            "link": "#"
          },
          {
            "title": "Competitive Advantage",
            "description": "Gain competitive advantage based on leading fundamental market analysis",
            "icon_or_image": "https://www.woodmac.com/siteassets/frontify_media_download/icons/128-px-icons/icon-analytics-graph-128px.png",
            "link": "#"
          },
          {
            "title": "Improve Performance",
            "description": "Improve cost and risk performance on projects and with third-party costs",
            "icon_or_image": "https://www.woodmac.com/siteassets/frontify_media_download/icons/128-px-icons/icon-ecology-leaf-settings-128px.png",
            "link": "#"
          },
          {
            "title": "Valuations",
            "description": "Independent and trusted valuations and transactional support",
            "icon_or_image": "https://www.woodmac.com/siteassets/frontify_media_download/icons/128-px-icons/icon-acounting-coin-stacks-128px.png",
            "link": "#"
          }
        ]
      }
    },
    {
      "component": "BodyCopyImage",
      "props": {
        "heading": "Designed to meet your goals",
        "text_content": "Solving new challenges, keeping your strategy fresh and executing energy programmes cost effectively requires innovative thinking.\n\nOur consultancy solutions can provide:\n- Tailored advice based on proprietary research, data and senior advisory experience\n- Robust conclusions and recommendations\n- Actionable strategies that leverage our global insights",
        "imageSrc": "https://www.woodmac.com/siteassets/frontify_media_download/photography/people/_micro/micro_people_gettyimages-591478749.jpg",
        "imagePosition": "right"
      }
    }
  ]
}
```
