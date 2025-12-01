Based on the HTML source code provided for the Wood Mackenzie "Emissions & Carbon Management" page, here is the structural analysis and the JSON mapping.

### 📄 Page Structure Analysis: Emissions & Carbon Management

**Page Type:** Service / Industry Landing Page
**Idea:** A resource-heavy landing page designed to funnel users into specific data products (Lens) or consulting services. It uses a problem/solution flow: identifying the market complexity, offering specific data tools, and providing human expertise.

1.  **Global Header (NewHeader.astro)**
    *   **State:** Sticky desktop, includes mega menu.
2.  **Hero Section (HeroMultiTemplate.astro)**
    *   **Visuals:** Background image (nuclear/industrial shape), text aligned left/center.
    *   **Content:** Title "Emissions & carbon management", Introduction text, and a "Get in touch" CTA (triggers a Form Modal).
3.  **Intro Section (BodyCopyImage.astro)**
    *   **Layout:** Text on Left, Image on Right.
    *   **Content:** Title "Make smarter carbon management decisions", paragraph text describing market volatility.
4.  **Value Proposition (CardGrid)**
    *   **Visuals:** A row of 3 uniform cards with white backgrounds and colored text.
    *   **Content:** "Unrivalled market coverage", "Expertly shaped strategies", "An interconnected view".
5.  **Product/Services Selector (TextOnlySection.astro + CardGrid)**
    *   **Structure:** Headline "Find the right product for your needs" followed by a grid of 4 cards.
    *   **Content:** Cards for "Lens Carbon", "Lens Emissions", "Emissions Benchmarking Tool", etc. Each has a title, description, and "Learn more" link.
    *   **Mobile Behavior:** The HTML shows this collapses into an Accordion on mobile.
6.  **Consulting Promotion (BodyCopyImage.astro)**
    *   **Layout:** Text on Left, Image on Right.
    *   **Content:** "Make smarter decisions... with our bespoke consulting services", bullet points, and CTA "Find out more".
7.  **Expert Contact (BodyCopyImage.astro)**
    *   **Layout:** Text on Left, Image on Right.
    *   **Content:** "Contact an expert" + Description + "Contact an Expert" button (Expands an inline form).
8.  **Video Feature (BodyCopyImage.astro - *Variant*)**
    *   **Visuals:** Split layout. Image/Video thumbnail on Left, Dark background text on Right.
    *   **Content:** "Carbon Capture... Conference", description, and "Register now" CTA.
9.  **Latest Thinking (TextOnlySection.astro + CardGrid)**
    *   **Structure:** Headline "Explore some of our latest thinking" followed by a grid of 3 article cards.
    *   **Content:** Uses `BlogPostCard` structure (Image top, Badge, Date, Title).
10. **Global Footer (NewFooter.astro)**

---

### ⚠️ Missing / New Component Requirements

To perfectly replicate this page using your compliant inventory, you need to address these gaps:

1.  **AccordionList.astro (New Component)**
    *   **Purpose:** The "Services" section (`#services-block`) transforms into an accordion on mobile devices in the source HTML.
    *   **Requirement:** A component that accepts a list of items and renders as a grid on desktop but an accordion on mobile.

2.  **ModalForm.astro / InlineForm.astro**
    *   **Purpose:** The Hero uses a pop-up modal for the contact form, and the "Contact an Expert" section uses an expandable inline form.
    *   **Gap:** We currently have no standard form component in the inventory.

3.  **VideoSplitSection.astro** (or update `BodyCopyImage.astro`)
    *   **Purpose:** The "Carbon Capture Conference" section (`#video`) is a split layout similar to `BodyCopyImage`, but it specifically houses a video/thumbnail interaction and has a specific dark theme (`bg--medium`) distinct from the standard light sections.

4.  **FilterBar.astro**
    *   **Purpose:** The "Latest Thinking" section includes a complex filtering system (Commodity, Industry Sector, Location) hidden behind dropdowns.
    *   **Gap:** `CardGrid` displays items, but does not currently support the filtering logic present in the HTML source.:
