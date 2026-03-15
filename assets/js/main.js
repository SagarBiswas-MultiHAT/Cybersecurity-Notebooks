const menuBtn = document.getElementById("menuBtn");
const navList = document.getElementById("navList");

if (menuBtn && navList) {
    menuBtn.addEventListener("click", () => {
        navList.classList.toggle("open");
    });
}

const typedLine = document.getElementById("typedLine");
const commands = [
    "$ init --domain cybersecurity",
    "$ scan --surface notebooks projects blogs",
    "$ harden --mode defensive",
    "$ simulate --threat phishing",
    "$ deploy --target github-pages"
];

let cmdIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
    if (!typedLine) {
        return;
    }

    const current = commands[cmdIndex];

    if (!deleting) {
        typedLine.textContent = current.slice(0, charIndex + 1);
        charIndex += 1;

        if (charIndex === current.length) {
            deleting = true;
            setTimeout(typeLoop, 1300);
            return;
        }
    } else {
        typedLine.textContent = current.slice(0, charIndex - 1);
        charIndex -= 1;

        if (charIndex === 0) {
            deleting = false;
            cmdIndex = (cmdIndex + 1) % commands.length;
        }
    }

    setTimeout(typeLoop, deleting ? 36 : 58);
}

typeLoop();

const counterValues = document.querySelectorAll(".metric-value[data-count]");

function animateCounter(entry) {
    const element = entry.target;
    const target = Number(element.getAttribute("data-count") || 0);
    const duration = 1150;
    const start = performance.now();

    function frame(now) {
        const progress = Math.min((now - start) / duration, 1);
        element.textContent = Math.floor(progress * target).toString();

        if (progress < 1) {
            requestAnimationFrame(frame);
        }
    }

    requestAnimationFrame(frame);
}

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, io) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateCounter(entry);
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counterValues.forEach((item) => observer.observe(item));
}
