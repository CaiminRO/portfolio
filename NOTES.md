# Adding
Using ``pnpm`` instead of ``npm``

## Adding a new package
Add from the root when possible, to save overlapping packages

``pnpm i <package> -w``

OR

``pnpm i <package> [--filter <project>] [-D]``

where
- `<project>` is a `name` in the `package.json` file for Sanity CMS or Next frontend
- `-D` is the devDependencies flag
