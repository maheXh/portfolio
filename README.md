# Portfolio

This site is a static, single HTML file. Image galleries populate automatically from `gallery/**` using either:

1. A local `images.json` manifest file inside each folder (preferred), or
2. A fallback pattern-based probe for names like `image1.jpg`, `img1.png`, `1.webp`, etc.

## Update images

- Drop images into the appropriate folder, e.g. `gallery/main/` or `gallery/projects/ddpm/`.
- For immediate control over ordering, create an `images.json` file in that folder with an array of filenames, e.g.:

```
[
  "teaserPic.png",
  "Screenshot 2025-03-22 121527.png",
  "Screenshot 2025-03-22 063320.png"
]
```

- If no `images.json` is present, the page will try common names (`image1.jpg`, `img2.png`, `1.webp`, etc.).

## Optional: Regenerate manifests automatically

If you have Node.js installed, you can generate `images.json` files for all folders:

```powershell
# From the project root
node .\scripts\generate-manifests.js
```

This writes an `images.json` with all images for each `gallery/**` folder, sorted logically by name.

## Local preview

Open `index.html` directly in your browser. No build is required.
