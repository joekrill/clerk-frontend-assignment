# My Clerks

## Running

1. (optional) `nvm use` to ensure running a compatable node version.
1. `npm install` to install dependencies.
1. `npm run dev` to start the development server.
1. Open http://localhost:5173/ in your browser.

## About / Nodes

- The commit history shows an accurate, step-by-step progress of how I went about building the application.
- I bootstrapped the project with Vite, since I'm most familiar with that and provides me the simplest starting point without a lot of unneeded extras (no need to worry about server-side rendering, SEO, etc.)
- Prettier and eslint are used to keep code consistent and to ensure I'm following "best practices" as much as possible.
- Vitest for testing makes things quick, works great alongside Vite, and shares the same API as jest.
- I opted to for Tailwinds CSS to keep things simple and get things moving as quickly as possible.
- I prefer to avoid default exports, so all exports are named. This way it's clear at the `import` site if renaming a component, and finding usage of components is more clear. The trade-off is slighty more verbose import statements.
- Using the virtualization feature of SwiperJS helps a lot with performance. But all profiles are still stored in-memory (in addition to the fetch responses). Plus the flattened array of all profiles is recreated on every page fetch. So those aspects could certainly be improved if need by.
- I reached out to Jeff via Slack for clarification on the color the selector. I kept it to a simple color picker to reduce complexity, but some enhancements could be:
  - Allow entering a color manually into a text input
  - Showing/accepting named colors, when known.
  - Using the `HexAlphaColorPicker`, which allows adjusting the opactiy (this may complicate selecting a contrasting font color?).

## Project Structure

The project is structured using a simple "by-function" structure for a starter project:

- `/components` contains all of the application components. I opted to put each component in a separate directory because I think it helps to see the status of each component (does it have tests? are there sub-components? does it use CSS?). The trade-off is slightly more verbosity when importing components.
- `/hooks` contains any hooks, in separate directories for similar reasons as `/components`

I only use this structure for very small, one-off projects, proof-of-concepts, or similar. Larger projects I would organize by feature (then typically by type).

## Components used

- [`SwiperJS`](https://swiperjs.com) - I tried to find a simple, up-to-date, existing carousel component that supports mobile (swipping), desktop, virtualization, and accessibility. Comparing a handful of available options, SwiperJS stood out as ticking all of the box and was simple to use.
- [`React Colorful`](https://omgovich.github.io/react-colorful/) - This seemed like a good fit for a simple color picker that works universally.
- [`tinycolor2`](https://www.npmjs.com/package/tinycolor2) - Used to find a good contrasting text color given a background color.
- [`Reactjs-popup`](https://react-popup.elazizi.com/) - Used to show the color picker in a popup.
- [`@tanstack/react-query`](https://tanstack.com/query/latest) - If I'm not using Redux, I typically reach for React Query to handle making requests. It handles all the necessary states, provides caching, and is straight-forward to use.

## Additional things I'd implement/change in a real-world project

- Validation of the response from the API. I'd likely using something like `zod` to ensure the response I'm getting from the server is what I expect. Currently the code just trusts the response is what we expect it to be.
- Handling API request errors. This would require adding some additional UX to notify the user, let them retry, and some additional logic to make sure our memoized, combined profiles array stays in the correct order.
- Additional test coverage.
