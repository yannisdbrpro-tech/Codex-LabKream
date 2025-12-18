# KREAM Theme — Setup

## Requirements
- Shopify store with Online Store 2.0 enabled.
- Git access to push theme files or Shopify CLI.

## Installation
1. Clone this repository.
2. From the `kream-theme` directory run `shopify theme push` (Shopify CLI) or upload via Admin > Online Store > Themes.
3. In the theme editor, set templates:
   - Home: `index`
   - Collections: `collection`
   - Products: `product`
   - About: create a page using `page.about` template.
4. Assign collections to match the KREAM taxonomy (Ice Hustle Everyday, Signature Editions, Angel Hustle, Royal Drip, Tesser-Lightning, Headwear, Outerwear, Essentials).
5. Map products to their collections (see `docs/CONTENT.md`).

## Assets
- `assets/base.css` holds core system variables and layout primitives.
- `assets/theme.css` contains focused embellishments.
- `assets/theme.js` handles variant id sync and accordion behavior.

## Notes
- Color palette and typography are driven by CSS variables; adjust in `base.css` to maintain global consistency.
- Keep the slogan formatting exact: `Dr3am It ? Hu2tle It ? Mater!al!ze!`.
