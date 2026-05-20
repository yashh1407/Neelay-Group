# Neelay Group Content Verification Report

Audit date: 2026-05-19  
Scope: Home, About, Capabilities, Projects, Materials, News, Contact  
Reference URLs reviewed:
- https://neelaygroup.com/
- https://neelaygroup.com/about
- https://neelaygroup.com/capabilities
- https://neelaygroup.com/projects
- https://neelaygroup.com/materials
- https://neelaygroup.com/news
- https://neelaygroup.com/contact

Note: The live URLs render as a client-side site shell when fetched, so the detailed content audit was performed against the local Next.js source files and existing project content.

## Overall Content Quality Score

Score after edits: 78 / 100

The site now has clearer B2B manufacturing copy, page-specific SEO metadata, safer CTA language, and fewer unsupported marketing claims. Remaining risk is mainly factual verification: company numbers, plant years, machine/process claims, contact details, and news announcements need owner-supplied proof before launch.

## Page-by-Page Findings

### Home

Status: Improved.

What was fixed:
- Removed unsupported "world-class" language.
- Rewrote the hero subheadline so the first screen clearly states what Neelay Group manufactures.
- Updated the CTA from "Download Capabilities" to "View Capabilities" because no downloadable file exists in the current implementation.
- Added page-specific SEO metadata.

Needs owner verification:
- "Since 1995"
- 970+ projects completed
- 6 manufacturing facilities
- 500+ team members
- 5 OEM partners

### About

Status: Improved.

What was fixed:
- Added page-specific SEO metadata.
- Added descriptive hero image alt text through the shared PageHero component.
- Replaced static inline stats with the shared counter component.
- Removed internal redesign-style copy and replaced it with buyer-facing manufacturing copy.

Needs owner verification:
- "Neelay Group" versus "Neelay Group of Companies" legal usage.
- Founded/established year 1995.
- "25+ years" claim.
- Nashik, Amravati, Satpur MIDC and Karban Naka facility references.
- Plant names and establishment years.
- Company/facility descriptions in `lib/site-data.ts`.

### Capabilities

Status: Improved.

What was fixed:
- Added page-specific SEO metadata.
- Added descriptive hero image alt text.
- Changed "Technical Catalog" CTA to "View Project Lines" because no technical catalog file exists.

Needs owner verification:
- Control panel, RMU, bus duct and CNC capability descriptions.
- 11kV and 33kV RMU assembly references.
- GIS bus duct assembly references.
- Copper and aluminum busbar references.
- Pump impellers, transmission parts and circuit breaker mechanism claims.

### Projects

Status: Improved.

What was fixed:
- Added page-specific SEO metadata.
- Changed "Project Portfolio" to "Project Lines" because the current content describes manufacturing categories, not verified client projects.
- Changed "Download Capabilities Deck" CTA to "View Capabilities" because no deck/download file exists.

Needs owner verification:
- Whether these are actual completed projects, project categories, or capability examples.
- Image-to-project matching for control panels, switchgear, bus duct and CNC components.
- Haas and Amada production workflow references.
- 11/33kV, Cu/Al and CNC KPI labels.

### Materials

Status: Improved.

What was fixed:
- Added page-specific SEO metadata.
- Added descriptive hero image alt text.
- Rewrote the hero copy for clearer industrial buyer language.
- Replaced risky material/process claims such as "ASTM Compliance", "NDT Inspection" and "100% Traceability" with safer labels: Traceability Records, Compliance Review, Inspection Records and Material Documentation.
- Rewrote the material process steps to avoid unsupported supplier/certification/process claims.

Needs owner verification:
- CRCA sheet metal use cases.
- Copper and aluminum busbar/conductive assembly references.
- Machined engineering metal references.
- Material documentation availability.
- Any standards, test methods, inspections or traceability programs before they are named publicly.

### News

Status: Needs owner verification before launch.

What was fixed:
- Added page-specific SEO metadata.
- Existing styling fixes from earlier work improved image visibility and card hierarchy.

Needs owner verification:
- January 2026 WEF Davos / Young Industrialist claim.
- July 15, 2025 622 kWp solar power system claim.
- March 20, 2025 first container export to Europe and Middle East claim.
- February 10, 2025 manufacturing expansion claim.
- January 5, 2026 Nashik industrial investment claim.
- November 18, 2024 cold storage and packhouse infrastructure claim.
- Publication date format. Current list mixes full dates, month-only dates and numeric dates such as "02.10".
- Source URLs, press releases or media references should be added if these are public announcements.

### Contact

Status: Improved.

What was fixed:
- Added page-specific SEO metadata.
- Replaced a fake-looking sample name placeholder with "Your full name".
- Changed "Transmit Inquiry" to "Send Inquiry".
- Removed pseudo response-time values such as "2.4 HR", "1.8 HR" and "4.0 HR".
- Changed a suspicious coordinate block to a safer location label.
- Changed "Global Operations" to "Manufacturing Locations".
- Improved map image alt text.

Needs owner verification:
- Full registered address.
- Phone number `0253-2350767`.
- Email address `info@neelaygroup.com`.
- Whether "Regional Headquarters" is the correct term.
- Business hours are missing.
- GST/company registration/legal entity details are missing.
- Form submission behavior and recipient/routing are not verified.

## Grammar and Language Issues Fixed

- Removed exaggerated claim: "world-class".
- Removed internal redesign language.
- Replaced awkward CTA labels that implied missing downloads/catalogs.
- Rewrote materials copy for clarity.
- Rewrote contact button copy for standard B2B language.
- Removed pseudo operational timing values from the contact page.
- Standardized more copy around sheet metal fabrication, switchgear assemblies, bus duct systems, CNC components and industrial manufacturing.

## SEO Issues Found and Fixed

Fixed:
- Added page-specific metadata titles and descriptions for all seven routes.
- Improved keyword relevance naturally across titles and meta descriptions.
- Added descriptive PageHero alt text support and supplied alt text on About, Capabilities and Materials.
- Improved Contact map alt text.
- Improved CTA labels to match actual routes.

Remaining recommendations:
- Add canonical URLs and Open Graph/Twitter metadata.
- Add structured data for Organization, LocalBusiness and BreadcrumbList after legal/company facts are verified.
- Add source links or detail pages for News items if they are public announcements.
- Add unique image alt text for any future non-decorative image.

## Factual Claims That Need Owner Verification

- Legal brand name: "Neelay Group" vs "Neelay Group of Companies".
- Establishment year 1995 and footer/header "EST. 1995".
- 25+ years experience.
- 970+ projects completed.
- 6 manufacturing facilities.
- 500+ team members.
- 5 OEM partners.
- All plant names, plant years and facility descriptions in `lib/site-data.ts`.
- Nashik, Satpur MIDC, Karban Naka and Amravati operating locations.
- Capabilities: punching, bending, CNC, VMC, CMV, Trob, drilling, milling, tapping, busbar, assembly, powder coating and silver coating.
- Machinery references: Haas, Amada and Finn Power.
- Product claims: LV/MV panels, MCC/PCC cabinets, 11kV/33kV RMUs, GIS bus duct assemblies, copper/aluminum busbars, pump impellers, transmission parts and circuit breaker mechanisms.
- Material claims: CRCA sheet metal, IP-rated assemblies, IP65-rated enclosures, material documentation and traceability.
- News claims and dates listed on the News page.
- Contact details and business location labels.

## Placeholder or Dummy Content Found

No Lorem ipsum or dummy project names were found.

Fixed:
- Removed fake-looking person placeholder "E.g. Johnathan Steel".
- Removed pseudo response-time table values.
- Removed internal "redesign/site" copy from visible page content.

Potential placeholder/risk still present:
- News content may be real, but it needs source verification.
- "Recent company notes" currently repeats three News items without linking to detail pages.
- Contact form has no visible validation/success/error states in the audited page content.

## Recommended Missing Content

- Verified legal company name and registration details.
- Complete office/factory addresses.
- Business hours.
- Certifications and quality standards, only if verified.
- Industries served.
- Approved client/project examples or anonymized case studies.
- Downloadable capability brochure if CTAs should mention downloads.
- News source links, press release links, or detail pages.
- Privacy/contact form consent language.
- Clear file upload or drawing submission workflow if technical inquiries require drawings.

## Files Changed

- `app/page.tsx`
- `app/about/page.tsx`
- `app/capabilities/page.tsx`
- `app/projects/page.tsx`
- `app/materials/page.tsx`
- `app/news/page.tsx`
- `app/contact/page.tsx`
- `components/PageHero.tsx`
- `components/SiteFooter.tsx`
- `CONTENT_VERIFICATION_REPORT.md`

## Remaining Owner Action Items

1. Confirm all company numbers, years, plant details, locations and contact information.
2. Confirm whether project page content represents real projects, production categories or sample capability examples.
3. Provide source proof for every News item, especially WEF Davos, the 622 kWp solar system and the first container export announcement.
4. Confirm certification/quality wording before adding ISO, ASTM, NDT or other formal standards.
5. Provide official business hours, legal entity details and complete addresses.
6. Decide whether to add downloadable brochures, technical catalogs or project case studies.
