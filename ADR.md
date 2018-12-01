# Assumptions

- Almost all projects created with starter-kit will have a lifespan of days or months (but not years).
- There will be large gaps between different projects created with starter-kit. To a certain degree, users of starter-kit will need to re-learn the libraries, frameworks, and tools.

# Decisions

# 001: Use the Hyperapp framework

React/Redux has a great paradigm, but feels too heavy. hyperapp is like a minimalist version of React/Redux with an incredibly short learning curve. It might make sense to use React w/ React Native for a mobile app starter kit.

https://medium.com/hyperapp/hyperapp-for-redux-refugees-2507c9dd1ddc

# 002: Use Tailwind CSS with PostCSS

Tailwind is a nice compromise between pure CSS (too much work) and a full-fledged framework like Bootstrap (not flexible enough). PostCSS is the easiest way to add Tailwind to the build chain.

# 003. Use Parcel for code transpilation and bundling

Parcel is zero-config and has native support for a ton of things out of the box. Much easier than using Webpack.

# 004: Use Prettier with husky to enforce coding style

[Coding style matters](https://www.smashingmagazine.com/2012/10/why-coding-style-matters/) and Prettier makes it very easy to enforce. huksy will prevent commiting code with invalid formatting.
