# personal-portfolio
Personal portfolio showcasing my work in data science, machine learning, AI systems, MLOps, and self-hosted infrastructure. Built with Astro, Docker, and deployed on my homelab.

## Updating portfolio content

All user-facing content is stored as Markdown under `src/content/`:

```text
src/content/
├── pages/
│   ├── site.md         # name, links, navigation and footer
│   ├── home.md         # homepage text, metrics and skills
│   ├── about.md
│   ├── contact.md
│   ├── experience.md
│   ├── homelab.md
│   ├── projects.md
│   └── stack.md
├── experience/         # one Markdown file per job
└── projects/           # one Markdown file per project
```

Edit and save these files while `npm run dev` is running; the browser refreshes
automatically. Files in `src/pages/`, `src/components/`, and `src/styles/` are
design templates and normally do not need to be edited.

### Add experience

Copy an existing file in `src/content/experience/`, give it a new filename, and
edit its fields. Jobs are sorted using the `order` field.

### Add a new project

Every Markdown file in `src/content/projects/` automatically becomes a project
card and a full project page. Copy the template:

```bash
cp templates/new-project.md src/content/projects/my-new-project.md
```

Rename `my-new-project.md` to the URL you want, then edit the file and save it.
For example, `fraud-detector.md` automatically becomes:

```text
http://localhost:4321/projects/fraud-detector/
```

Use normal Markdown below the second `---`: headings begin with `##`, bullets
begin with `-`, and paragraphs need no special code. Set `featured: true` to
allow the project to appear on the homepage. Lower `order` numbers appear first.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

## Deploy on a homelab

The included multi-stage Docker image builds the Astro site and serves the
static result with Nginx. On a machine with Docker and Docker Compose installed:

```bash
git clone YOUR_REPOSITORY_URL personal-portfolio
cd personal-portfolio
docker compose up -d --build
```

Open `http://YOUR_SERVER_IP:8080`. To use another host port:

```bash
PORT=8090 docker compose up -d --build
```

Useful management commands:

```bash
docker compose logs -f
docker compose ps
docker compose down
```

### Reverse proxy

For Caddy running directly on the homelab host, proxy your domain to the
published port:

```caddyfile
portfolio.example.com {
    reverse_proxy 127.0.0.1:8080
}
```

Replace the example domain with your real domain. If Caddy itself runs in a
container, either proxy to the Docker host address and port `8080`, or attach
both containers to the same Docker network and proxy to `portfolio:80`.

After changing Markdown content on the server, rebuild the image:

```bash
docker compose up -d --build
```
