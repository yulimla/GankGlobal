# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.





## The new page is Gallery on profile

I am constrained by what I have to make, so I try to look at some of the competitors. I think the gallery page is quite an important page, even though I wanted to make it like a youtube short.

This gallery page displays posts that have images or videos. My gallery is made using the grid concept. with several types of grids:

wide : image (landspace),
tall : portrait pictures.
big : for large images
if null or no type the default image is small. 

you can check the data gallery with gallery.json on folder data.

Technology that I use:

- tailwind css
- nuxt js 3 rc 13
- headlessui
- Poppins for fonts