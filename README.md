# starter-kit

Fork this repo as a starting point for side projects, hackathons, etc. Decisions are documented in [ADR.md](ADR.md).

## What’s Included?

### Client

- [Hyperapp](https://github.com/jorgebucaran/hyperapp): 1 kB JavaScript micro-framework for building declarative web applications
- [Tailwind CSS](https://tailwindcss.com): utility-first CSS framework for rapidly building custom user interfaces

### Server

- [Node.js](https://nodejs.org): Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine
- [Restify](http://restify.com): A Node.js web service framework optimized for building semantically correct RESTful web services ready for production use at scale.

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

### Testing

- [cypress](https://www.cypress.io/): Fast, easy and reliable testing for anything that runs in a browser. Install Cypress in seconds and take the pain out of front-end testing.

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
npm run local-dev
```

Navigate to http://localhost:3000

#### Docker

```
npm run build
npm run docker:build
npm run docker:run
```

Navigate to http://localhost:8080

### Test

Open cypress GUI: `npx cypress open`  
Run end-to-end suite: `npm run test:e2e`

### Deploy

#### With Hyper

> As a serverless container hosting service, [Hyper](https://www.hyper.sh/) allows you to run containers without having to manage VMs or clusters

```diff
+ Very easy to setup and deploy
+ Reasonable pricing
- No free tier
- Not as popular as Heroku or Digital Ocean
```

Create an account:

1. Sign up for an account
1. Add a credit card to file
1. Go through the 3 step setup process

Setup: `npm run hyper:setup`  
Deploy: `npm run deploy`

## License

starter-kit is open source software licensed as [MIT](LICENSE)
