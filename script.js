@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
:root {
    --bg: #050816;
    --panel: #101a35;
    --purple: #a855f7;
    --blue: #38bdf8;
    --text: #f5f3ff;
    --muted: #a5b4d4;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}
body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    min-height: 100vh;
}
body::before {
    content: "";
    position: fixed;
    width: 450px;
    height: 450px;
    top: 10%;
    left: -180px;
    background: #7028e4;
    filter: blur(170px);
    opacity: 0.18;
    z-index: -1;
    pointer-events: none;
}

a {
    text-decoration: none;
    color: inherit;
}

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #050816e8;
    backdrop-filter: blur(18px);
    border-bottom: 1px solid #ffffff12;
    z-index: 100;
}

.logo {
    font-size: 23px;
    font-weight: 800;
    white-space: nowrap;
}

.logo span {
    color: var(--blue);
}

nav {
    display: flex;
    gap: 24px;
}

nav a {
    color: var(--muted);
    font-size: 13px;
    transition: color 0.3s;
}

nav a:hover {
    color: var(--blue);
}

.hero {
    min-height: 100vh;
    padding: 130px 8% 70px;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    align-items: center;
    gap: 35px;
}

.eyebrow {
    color: var(--blue);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 3px;
    margin-bottom: 18px;
}

h1 {
    font-size: clamp(38px, 5vw, 66px);
    line-height: 1.2;
}

.gradient {
    background: linear-gradient(100deg, #c084fc, #38bdf8);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.hero h2 {
    font-size: clamp(20px, 2.5vw, 30px);
    margin: 15px 0;
}

p {
    color: var(--muted);
    line-height: 1.9;
}

.description {
    max-width: 550px;
}

.buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin: 28px 0;
}

.center {
    justify-content: center;
}

.btn {
    display: inline-block;
    padding: 12px 23px;
    border-radius: 30px;
    font-size: 13px;
    font-weight: 600;
    transition: 0.3s;
}

.primary {
    background: linear-gradient(100deg, #9333ea, #0891b2);
    color: white;
}

.secondary {
    border: 1px solid var(--purple);
}

.btn:hover {
    transform: translateY(-4px);
    box-shadow: 0 0 25px #9333ea55;
}

.status {
    font-size: 12px;
    color: #a78bfa;
}

.visual {
    min-height: 400px;
    position: relative;
    display: grid;
    place-items: center;
    perspective: 1000px;
}

.planet-scene {
    position: relative;
    width: 300px;
    height: 300px;
    display: grid;
    place-items: center;
    transform-style: preserve-3d;
    transition: transform 0.2s ease-out;
}

.planet {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background:
        radial-gradient(circle at 30% 25%, #ddd6fe, transparent 20%),
        radial-gradient(circle at 70% 70%, #2563eb, transparent 35%),
        linear-gradient(135deg, #312e81, #9333ea, #0891b2);
    box-shadow:
        inset -25px -20px 45px #020617,
        0 0 35px #7c3aed,
        0 0 90px #2563eb55;
    animation:
        planetFloat 4s ease-in-out infinite,
        planetGlow 5s linear infinite;
}

.orbit {
    position: absolute;
    width: 300px;
    height: 100px;
    border: 3px solid var(--blue);
    border-left-color: #c084fc;
    border-right-color: #c084fc;
    border-radius: 50%;
    pointer-events: none;
}

.orbit-one {
    transform: rotate(-25deg);
    animation: orbitPulse 3s ease-in-out infinite alternate;
}

.orbit-two {
    width: 260px;
    height: 85px;
    border-color: var(--purple);
    opacity: 0.6;
    transform: rotate(55deg);
    animation: orbitPulse 3s ease-in-out infinite alternate-reverse;
}

.float-card {
    position: absolute;
    padding: 12px 16px;
    border: 1px solid #8b5cf6;
    border-radius: 12px;
    background: #111b38e8;
    box-shadow: 0 0 25px #7c3aed35;
    font-size: 13px;
    animation: cardFloat 3s ease-in-out infinite;
}

.card-left {
    top: 45px;
    left: 0;
}

.card-right {
    bottom: 45px;
    right: 0;
    animation-delay: 1s;
}

.section {
    padding: 100px 8%;
    scroll-margin-top: 85px;
}

.section-title {
    text-align: center;
    font-size: clamp(30px, 4vw, 43px);
    margin-bottom: 35px;
}

.section > .eyebrow {
    text-align: center;
}

.glass {
    background: linear-gradient(135deg, #101a35dd, #0b1128dd);
    border: 1px solid #ffffff12;
    border-radius: 20px;
    backdrop-filter: blur(12px);
    transition: 0.35s;
}

.about-card {
    max-width: 850px;
    margin: auto;
    padding: 32px;
}

.about-card h3 {
    margin-bottom: 12px;
}

.facts {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
    margin-top: 25px;
}

.facts div {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.facts strong {
    font-size: 13px;
    color: #c4b5fd;
}

.facts span {
    color: var(--muted);
    font-size: 13px;
}

.skills-grid,
.projects-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 22px;
}

.skill-card {
    padding: 25px;
    text-align: center;
}

.skill-icon {
    font-size: 36px;
    display: block;
    margin-bottom: 12px;
}

.skill-card h3,
.project-card h3 {
    margin-bottom: 10px;
}

.skill-card p,
.project-card p {
    font-size: 13px;
}

.skill-card:hover,
.project-card:hover,
.about-card:hover {
    transform: translateY(-7px);
    border-color: var(--purple);
    box-shadow: 0 15px 40px #7c3aed20;
}

.project-card {
    padding: 25px;
}

.project-number {
    display: inline-block;
    font-size: 35px;
    font-weight: 800;
    color: var(--purple);
    margin-bottom: 12px;
}

.tech {
    display: inline-block;
    margin-top: 18px;
    padding: 6px 10px;
    color: #c4b5fd;
    background: #8b5cf620;
    border-radius: 20px;
    font-size: 11px;
}

.project-card a {
    display: block;
    margin-top: 15px;
    color: var(--blue);
    font-size: 13px;
}

.note {
    font-size: 12px;
    text-align: center;
    margin-top: 25px;
}

.contact-card {
    max-width: 800px;
    padding: 45px 25px;
    margin: auto;
    text-align: center;
}

.contact-card .section-title {
    margin-bottom: 15px;
}

footer {
    text-align: center;
    padding: 25px;
    border-top: 1px solid #ffffff12;
}

footer p {
    font-size: 12px;
}

/* Reveal animation */
.reveal {
    opacity: 1;
    visibility: visible;
    transform: none;
}

/* Animate elements */
.js-enabled .reveal {
    opacity: 0;
    transform: translateY(25px);
    transition: opacity 0.7s ease, transform 0.7s ease;
}

.js-enabled .reveal.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

@keyframes planetFloat {
    0%, 100% {
        transform: translateY(0) rotate(0deg);
    }
    50% {
        transform: translateY(-12px) rotate(5deg);
    }
}

@keyframes planetGlow {
    0%, 100% {
        filter: hue-rotate(0deg);
    }
    50% {
        filter: hue-rotate(25deg);
    }
}

@keyframes orbitPulse {
    from {
        box-shadow: 0 0 8px #38bdf840;
    }
    to {
        box-shadow: 0 0 25px #a855f780;
    }
}

@keyframes cardFloat {
    0%, 100% {
        translate: 0 0;
    }
    50% {
        translate: 0 -12px;
    }
}

@media (max-width: 800px) {
    .navbar {
        padding: 15px 5%;
    }

    nav {
        gap: 12px;
    }

    nav a {
        font-size: 11px;
    }

    .logo {
        font-size: 18px;
    }

    .hero {
        grid-template-columns: 1fr;
        text-align: center;
        padding-left: 6%;
        padding-right: 6%;
    }

    .description {
        margin: auto;
    }

    .buttons {
        justify-content: center;
    }

    .visual {
        min-height: 340px;
    }

    .section {
        padding: 75px 6%;
    }

    .skills-grid,
    .projects-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 520px) {
    .navbar {
        flex-direction: column;
        gap: 12px;
    }

    nav {
        flex-wrap: wrap;
        justify-content: center;
    }

    .skills-grid,
    .projects-grid {
        grid-template-columns: 1fr;
    }

    .planet {
        width: 165px;
        height: 165px;
    }

    .planet-scene {
        width: 260px;
        height: 260px;
    }

    .orbit {
        width: 260px;
        height: 85px;
    }

    .orbit-two {
        width: 235px;
        height: 75px;
    }

    .float-card {
        font-size: 11px;
        padding: 8px;
    }

    .card-left {
        left: -10px;
    }

    .card-right {
        right: -10px;
    }

    .facts {
        grid-template-columns: 1fr;
    }

    .about-card {
        padding: 22px;
    }
}

@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        scroll-behavior: auto !important;
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
