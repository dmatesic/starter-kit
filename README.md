# starter-kit

Fork this repo as a starting point for side projects, hackathons, etc. Decisions are documented in [ADR.md](ADR.md).

## What’s Included?

### Client

- [Hyperapp](https://github.com/jorgebucaran/hyperapp): 1 kB JavaScript micro-framework for building declarative web applications
- [Tailwind CSS](https://tailwindcss.com): utility-first CSS framework for rapidly building custom user interfaces


### Database

- [Google Sheets](https://www.google.com/sheets/about/): spreadsheet program included as part of a free, web-based software office suite offered by Google within its Google Drive service
- [tabletop](https://github.com/jsoma/tabletop): takes a Google Spreadsheet and makes it easily accessible through JavaScript

### Tooling

- [Docker](https://www.docker.com/): computer program that performs operating-system-level virtualization, also known as "containerization"
- [nginx](https://www.nginx.com/): web server which can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache
- [Parcel](https://parceljs.org/): blazing fast, zero configuration web application bundler
- [PostCSS](https://github.com/postcss/postcss): tool for transforming styles with JS plugins
- [Prettier](https://prettier.io/): opinionated code formatter
- [huksy](https://github.com/typicode/husky): git hooks made easy

## How do I use it?

### Install

1. Fork this repo, change the name, and pull it locally
2. Install packages: `npm i`
3. (optional) Create a new Google Sheet, add some data, make it public, and set the `DOC_ID` in [data-access](src/lib/data-access)

### Setup VS Code

1. Install extensions:
  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
  - [Prettier Now](https://marketplace.visualstudio.com/items?itemName=remimarsal.prettier-now)
2. Update configuration:
  - Set `editor.formatOnSave` to true in settings to automatically format files (with prettier) on save.

### Build and Run

#### Local Development w/ LiveReload

```
npm start
```

Navigate to http://localhost:1234

### Docker

```
npm run build
npm run docker:build
npm run docker:run
```

Navigate to http://localhost:8080

## License

starter-kit is open source software licensed as [MIT](LICENSE)
