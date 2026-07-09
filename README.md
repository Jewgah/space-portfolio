# Jordan Perez — Space Portfolio

A portfolio you don't read — you fly through it. Scroll and a rocket launches
from Earth, threads past the planets, orbits a ring of my projects, and
kamikazes into the sun. Real NASA + Solar System Scope textures, a procedural
nebula and HUD, and a full scroll-driven camera rig at 60fps in the browser.

Live: **[space.jordanperez.dev](https://space.jordanperez.dev)** · Main site:
[jordanperez.dev](https://jordanperez.dev)

## Stack

- **Next.js 16** (App Router) + **React 19**
- **React Three Fiber** / **drei** / **postprocessing** (Three.js)
- **Lenis** smooth scroll · **Motion** · **Zustand**
- Deployed on **Vercel**

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

All site content (bio, experience, skills, projects) lives in
[`src/lib/data.ts`](src/lib/data.ts). The 3D journey (camera + rocket paths,
section ranges) is in [`src/lib/journey.ts`](src/lib/journey.ts).

## Credits

Adapted from the open-source [rocket portfolio concept by Abhishek Badar](https://github.com/AbhishekBadar/portfolio),
rebuilt with my own content and identity.

- **Planet textures** — [Solar System Scope](https://www.solarsystemscope.com/textures/) (CC BY 4.0)
- **HDRI lighting** — "Dikhololo Night", [Poly Haven](https://polyhaven.com) (CC0)
- **3D models** (astronaut, spaceship) — [Quaternius](https://quaternius.com) (CC0)
- **ISS model** — [NASA 3D Resources](https://github.com/nasa/NASA-3D-Resources) (public domain)
- Rocket, nebula, rings, and HUD are generated procedurally in code.
