The site uses bun and vite to run. Npm/pnpm should also work, but I've not tested it. To run the site in dev mode, clone it and run
```
bun install
bun run dev
```
(replace `bun` with `npm` or `pnpm` as required).

This should start a local version of the site.

The live site should automatically rebuild at 3am nightly from the latest commit. If you want to manually rebuild the live site, you need to ssh in to the server and run `girtonjcr/.daily.sh`.

Since we're now using Vite instead of create-react-app it should run much faster and have less weird issues with all of the extra packages create-react-app wants. We also get faster builds and better dev startup times (a few hundred milliseconds instead of 10-20s). Currently any 'server' style tasks that would need to pull from a public api are done by scripts (currently just the live calendar) - ideally this could be done via a proper server like express, but for now the scripts are simpler and get the job done.
