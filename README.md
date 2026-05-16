# Greece Tourism Website

A responsive, single-page website showcasing destinations, tour packages, and contact information for Greece. Built with plain HTML, CSS, and JavaScript—no frameworks or build step required.

## Features

- Fixed navigation with smooth scroll to page sections
- Mobile-friendly menu (toggle via flag icon on smaller screens)
- Hero section with call-to-action
- Destination highlights with image grid layout (Elafonissi Beach, Athens, Village of Lindos)
- Three-tier pricing comparison (Classic, Discovery, Exception)
- Contact form (first name, last name, message)
- Dynamic copyright year in the footer

## Technologies

- HTML5
- CSS3 (Grid, Flexbox, media queries)
- JavaScript (ES6+)

## Page sections

| Section | ID | Description |
|---------|-----|-------------|
| Home | `#home` | Hero banner, title, and “Learn More” link |
| What to do? | `#to-do` | Three destination cards with images |
| Prices | `#price` | Classic ($100), Discovery ($250), Exception ($500) |
| Contact | `#contact` | Inquiry form |

## Getting started

1. Clone the repository and open the project folder:

   ```bash
   git clone <repository-url>
   cd Greece-Website
   ```

2. Open `index.html` in a web browser.

   For local development with live reload, you can use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code (port `5502` is configured in `.vscode/settings.json`).

## Project structure

```
Greece-Website/
├── index.html          # Main page markup
├── style.css           # Layout and responsive styles
├── app.js              # Mobile nav toggle and footer year
├── images/
│   ├── greece-flag-round-circle-icon.svg
│   ├── logo.png
│   ├── home.png
│   ├── Elafonissi-Beach.png
│   ├── Athens.png
│   └── Village-of-Lindos.png
├── .vscode/
│   └── settings.json   # Live Server port (optional)
└── README.md
```

## Notes

- The contact form is front-end only; submitting does not send data to a server. Hook it up to a backend or form service if you need real submissions.
- “Learn More” and “Book a guide” buttons link to in-page sections or placeholders—they can be wired to external URLs as needed.

## Author

Tai Odunaiya

## Acknowledgments

- Images are for demonstration purposes.
- Inspired by the beauty and culture of Greece.
