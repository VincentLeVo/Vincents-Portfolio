## Getting started

```bash
npm install
```

Next, create a new Sanity project to power the projects within this template:

```bash
npm create sanity@latest -- --env=.env.local --create-project "Vincent Vo - Software Portfolio" --dataset production
```

This will prompt you to create a new Sanity account if you don't have one already. When asked "Would you like to add configuration files for a Sanity project in this Next.js folder?", choose "n".

Next, optionally import the demo seed data for the projects:

```bash
npx sanity@latest dataset import seed.tar.gz
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

To manage your projects content, visit the embedded Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio).
