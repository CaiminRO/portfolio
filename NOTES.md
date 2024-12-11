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

---
# ESLint and Prettier Debugging
## Prettier
- `pnpm exec prettier --check .`
- `pnpm exec prettier --check frontend`
- `pnpm exec prettier --check cms`

## ESLint
- `pnpm exec eslint . --debug`
- `pnpm exec eslint frontend --debug`
- `pnpm exec eslint cms --debug`
- `pnpm exec eslint --inspect-config`