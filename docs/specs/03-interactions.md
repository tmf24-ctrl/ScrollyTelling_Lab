# Interactions

## Homepage Scrolly Behavior

- Each `.step` section owns state for stage tag/title/text using `data-*` attributes.
- `IntersectionObserver` activates the most visible step and updates sticky stage copy.
- Optional hash navigation (`#slide-x`) scrolls to the target step on load.

## Content Page Behavior

- Parse `returnTo` query param.
- Update return link target to preserve user context.
