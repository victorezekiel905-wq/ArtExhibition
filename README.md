# Christarman Art Syndicate

Website for Christarman Art Syndicate: painting, charcoal drawing, commissioned portraiture and sculpture.

A static site with no build step. Open `index.html` in a browser, or host it on GitHub Pages
(Settings → Pages → Deploy from branch → `main` / root).

## Structure

- `index.html` holds the page content and section copy
- `assets/css/style.css` holds the design tokens (colours, type scale, spacing) and layout
- `assets/js/main.js` holds the artwork list, gallery filters, lightbox, menu and enquiry form
- `assets/img/full/` holds the artwork images at up to 1800px on the long edge (used in the viewer)
- `assets/img/thumb/` holds the gallery images at up to 900px on the long edge

## Editing

- **Contact email:** change `CONTACT_EMAIL` at the top of `assets/js/main.js`.
- **Artwork titles and media:** edit the `WORKS` list in `assets/js/main.js`.
  Each entry is `[image id, title, medium, categories, width, height]`.
- **Adding a work:** add `NNN.jpg` to both `assets/img/full/` and `assets/img/thumb/`, then add an entry to `WORKS`.
