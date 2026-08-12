# Simplify the navbar to Home and Services

## What changes

The navbar currently lists five items — Home, Services, The six pillars, Who we work with, Our approach — where the last three are anchor jumps into sections of the home page. That makes the site look like it has five pages. Reduce it to just two links so the structure reads as intended: one home page plus the new Services page.

## Scope

- Desktop nav: Home, Services only.
- Mobile hamburger menu: Home, Services only.
- Keep the "Get in touch" link as-is.
- No changes to the home page content, the Services page, or any other file.

## Technical detail

Edit `src/components/Navbar.tsx` only: trim the `navLinks` array to the `/` and `/services` entries. Both the desktop nav and the mobile menu render from that array, so one edit covers both.
