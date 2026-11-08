# Hanzi Rail

A free Mandarin learning game. Drag colored word blocks onto a rail to build sentences in the right order, and see how Chinese sentence structure works by doing it.

No ads. No accounts. Completely offline after your first visit.

Live site: https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/

## What's in it

- **Sentence builder.** Nine levels, each adding one new rule: subject-verb-object, time and place, tense particles, negation, questions, adjectives, measure words, possession, and a final mixed level with the labels hidden. Every level draws from a bank of generated sentences, so replays stay fresh.
- **Color-coded blocks.** Each kind of word (subject, verb, object, time, place and so on) has its own color, so you learn the pattern before you can name it.
- **Know the Character.** A quick mini game: a character and its pinyin appear, and you pick the meaning. Seven word sets, ten characters a round.
- **Relaxed or Timed.** Play with no clock, or race a level clock and beat your saved best time.
- **Pinyin and English toggles** to show as much or as little help as you want.
- **Night train backdrop.** A wireframe train runs behind the page. The Scene control lets you slow it down, stop it, or dim it.
- **Progress is saved** in your own browser. Nothing is sent anywhere.

## Run it on your computer

Open a terminal in the project folder and run:

```
python3 -m http.server 8000
```

Then visit http://localhost:8000. A local server is needed (not just double-clicking the file) because the offline feature only works over http or https.

## Put it on GitHub Pages

1. Upload `index.html`, `sw.js`, `LICENSE` and this `README.md` to the top level of a repo.
2. In the repo, open Settings, then Pages, and set the source to your main branch.
3. After a minute or two the site is live. Load it once while online, and it will work offline from then on.

## Files

| File | What it does |
| --- | --- |
| `index.html` | The whole game: page, styles, word list and logic |
| `sw.js` | The offline worker. It saves the page and fonts on the first visit |
| `LICENSE` | MIT license |

## Updating

After you change `index.html`, players see the new version on their second visit. To push a change to everyone sooner, bump the version number at the top of `sw.js` (for example `hanzirail-v2`).

## Support and feedback

- [Buy Me a Coffee](https://buymeacoffee.com/inventing223)
- [Ko-fi](https://ko-fi.com/inventing)
- [Feedback form](https://docs.google.com/forms/d/e/1FAIpQLSd4C2rcApPQMrYZ52bCpdpFqm0BYhfygufhETmiOnCZt6LeeQ/viewform?usp=publish-editor)

Tips are optional. The game stays free either way.

## About

Built by Inventing. I believe practice develops skill, and I'm building toward a future of people who understand many aspects of life, from language to building contraptions from the mind. I hope you enjoy my little contribution.

## License

MIT, see `LICENSE`. The license covers the code only. The Buy Me a Coffee and Ko-fi logos belong to those companies, and the fonts (Bricolage Grotesque, IBM Plex Mono, Noto Sans SC) load from Google Fonts under their own open licenses.
