# Assignment 6 — jQuery Selectors Effects and Animations

Sabyr Aslan · SE-2528

Twelve separate responsive pages demonstrate jQuery selectors, effects, DOM manipulation, form interaction, and animations. A shared navbar links every task.

**Repository:** https://github.com/asikxz008/Assigment6-web1-Aslan

**Live site:** https://asikxz008.github.io/Assigment6-web1-Aslan/

## Run locally

Open `index.html` in a modern browser, or serve this folder with a static server. No package installation or build step is required.

An internet connection is required to load full jQuery 3.7.1 from the official CDN. The slim build is not used because the assignment needs effects and animations. If the CDN is unavailable, a visible error explains how to retry.

Open F12 → Console on Task 0 to see `jQuery is ready!`. All task scripts use `$(document).ready(function () { ... });`.

## Tasks and requirement coverage

| Page | Requirements |
| --- | --- |
| `index.html` | Task 0: CDN, document ready handler, console ready message |
| `task1.html` | Task 1: ID, class, tag selectors; `.text()`, `.html()`, `.css()` |
| `task2.html` | Task 2: paragraph, Hide/Show/Toggle buttons; `.hide()`, `.show()`, `.toggle()` |
| `task3.html` | Task 3: image with `.fadeIn()`, `.fadeOut()`, `.fadeToggle()` |
| `task4.html` | Task 4: collapsible panel with `.slideUp()`, `.slideDown()`, `.slideToggle()` |
| `task5.html` | Task 5: Add Item, Prepend Item, Remove Item; `.append()`, `.prepend()`, `.remove()` |
| `task6.html` | Task 6: buttons change image `src` and link `href` using `.attr()` |
| `task7.html` | Task 7: Name/Email form; live preview using `.val()` and `.text()` |
| `task8.html` | Task 8: square grows and moves through `.animate()` |
| `task9.html` | Task 9: right → down → shrink → return to original size and position |
| `task10.html` | Task 10: opacity, size, movement combined in one `.animate()` call |
| `task11.html` | Task 11: image gallery; thumbnails fade in/out and enlarge on click |

## Files and behavior

- `index.html`, `task1.html`–`task11.html`: twelve task pages.
- `styles.css`: shared responsive styles, animation areas, gallery dialog.
- `scripts/common.js`: CDN error notice and reduced-motion preference.
- `scripts/task0.js`–`scripts/task11.js`: separate task implementations.
- `assets/`: four original SVG illustrations inspired by Kazakhstan.

User-entered list labels and form values use `.text()`. The `.html()` demonstration uses a fixed string. The form preview sends no data and stores no entries.

Reset stops active animations and clears pending steps. Repeated effect clicks clear the previous queue. Animation distances adapt to the available stage width. Reduced-motion visitors receive the final states without animated transitions.

Gallery thumbnails are keyboard-operable buttons. Enlarged images open in a native modal dialog with a Close button and Escape support.

## Quick checks

1. Task 0: check the ready message in the browser console.
2. Task 1: test all selectors, confirm both class matches change, reset.
3. Tasks 2–4: try each effect in both directions; click repeatedly.
4. Task 5: append, prepend, remove all items, add again. Confirm `<b>test</b>` stays plain text.
5. Task 6: switch image and link twice; check the attributes and readouts.
6. Task 7: type, paste, delete, reset; check a valid form without navigation.
7. Tasks 8–10: run and reset during/after animations; check the sequence returns to the start.
8. Task 11: show/hide/toggle thumbnails; open all enlarged images; close with the button and Escape.
9. At a narrow phone width, check navigation, form layout, gallery, and animation boundaries.

## Publish

In GitHub Pages, select the `main` branch and `/ (root)` folder. The project is static and requires no build step or backend.

## References

- [Official jQuery CDN](https://releases.jquery.com/jquery/)
- [jQuery API](https://api.jquery.com/)
- [Document ready](https://api.jquery.com/ready/)
- [Custom animations](https://api.jquery.com/animate/)
