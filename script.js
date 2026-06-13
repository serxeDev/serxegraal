window.currentFilename = '';

window.showToast = function(message) {
    const existing = document.querySelector('.custom-toast');
    if (existing) {
        existing.classList.add('hide');
        setTimeout(() => existing.remove(), 200);
    }
    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    toast.innerHTML = `
        <div class="toast-icon"><i class="fas fa-check"></i></div>
        <div class="toast-body">
            <span class="toast-label">Copied!</span>
            <span class="toast-value">${message}</span>
        </div>
    `;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 2500);
};

window.copyFilename = function(filename) {
    navigator.clipboard.writeText(filename).then(() => {
        window.showToast(filename);
    }).catch(() => {
        const ta = document.createElement('textarea');
        ta.value = filename;
        ta.style.cssText = 'position:fixed;opacity:0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        window.showToast(filename);
    });
};

window.copyModalFilename = function() {
    const filename = document.getElementById('modalFilename').textContent;
    if (filename) {
        const ta = document.createElement('textarea');
        ta.value = filename;
        ta.style.cssText = 'position:fixed;opacity:0;left:-9999px;top:0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        window.showToast(filename);
    }
};

window.openModal = function(title, desc, imgSrc, filename) {
    window.currentFilename = filename;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDesc').textContent = desc;
    document.getElementById('modalFilename').textContent = filename;
    const modalImg = document.getElementById('modalImg');
    modalImg.src = '';
    modalImg.classList.remove('loaded');
    modalImg.onload  = () => modalImg.classList.add('loaded');
    modalImg.onerror = () => { modalImg.src = 'https://via.placeholder.com/600x400/111/81eb38?text=NOT+FOUND'; };
    modalImg.src = imgSrc;
    
    const modal = new bootstrap.Modal(document.getElementById('artModal'));
    modal.show();
};

document.addEventListener("DOMContentLoaded", function () {

    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    const projectsData = [
        { id: 1,  title: "Referee Chair V2",   description: "serxe-referee-chair-v2-shield.png",             category: "PNG", images: ["./assets/img/serxe (1).jpg"],  filename: "setshield serxe-referee-chair-v2-shield.png" },
        { id: 2,  title: "X-ray Machine",           description: "serxe-xray-machine-shield.png",                category: "PNG", images: ["./assets/img/serxe (2).jpg"],  filename: "setshield serxe-xray-machine-shield.png" },
        { id: 3,  title: "Graal Truck",             description: "serxe-graal-truck-shield.png",                 category: "PNG", images: ["./assets/img/serxe (3).jpg"],  filename: "setshield serxe-graal-truck-shield.png" },
        { id: 4,  title: "RPS Table V1",            description: "serxerps-shield.png",                          category: "PNG", images: ["./assets/img/serxe (4).jpg"],  filename: "setshield serxerps-shield.png" },
        { id: 5,  title: "Enter House Sign 2",      description: "serxe-enterhouse-controller-shield.png",       category: "PNG", images: ["./assets/img/serxe (5).jpg"],  filename: "setshield serxe-enterhouse-controller-shield.png" },
        { id: 6,  title: "Fire Truck",              description: "serxe-firetruck1-shield.png",                  category: "PNG", images: ["./assets/img/serxe (6).jpg"],  filename: "setshield serxe-firetruck1-shield.png" },
        { id: 7,  title: "Coffee Shop Cart",        description: "graal-coffee-shop-shield.png",                 category: "PNG", images: ["./assets/img/serxe (7).jpg"],  filename: "setshield graal-coffee-shop-shield.png" },
        { id: 8,  title: "Pit Hole",                description: "serxe-pitv2-shield.png",                       category: "PNG", images: ["./assets/img/serxe (8).jpg"],  filename: "setshield serxe-pitv2-shield.png" },
        { id: 9,  title: "Enter House Sign 4",      description: "serxe-enterhouse4-shield.png",                 category: "PNG", images: ["./assets/img/serxe (9).jpg"],  filename: "serxe-enterhouse4-shield.png" },
        { id: 10, title: "Biometric Shield",        description: "serxe-biometric-v2-shield.png",                category: "GIF", images: ["./assets/img/serxe (10).jpg"], filename: "setshield serxe-biometric-v2-shield.png" },
        { id: 11, title: "RPS Table V2",            description: "serxerps2-shield.png",                         category: "PNG", images: ["./assets/img/serxe (11).jpg"], filename: "setshield serxerps2-sheild.png" },
        { id: 12, title: "Gray Shield",             description: "serxe-gray-shield.png",                        category: "PNG", images: ["./assets/img/serxe (12).jpg"], filename: "setshield serxe-gray-shield.png" },
        { id: 13, title: "Boxes",                   description: "serxe-box-shield.png",                         category: "PNG", images: ["./assets/img/serxe (13).jpg"], filename: "setshield serxe-box-shield.png" },
        { id: 14, title: "TukTuk / Taxi",           description: "serxe-galaxa-tuktuk-shield.png",               category: "PNG", images: ["./assets/img/serxe (14).jpg"], filename: "setshield serxe-galaxa-tuktuk-shield.png" },
        { id: 15, title: "Clipboard",               description: "serxe-clipboard-shield.png",                   category: "PNG", images: ["./assets/img/serxe (15).jpg"], filename: "setshield serxe-clipboard-shield.png" },
        { id: 16, title: "Black Shield",            description: "serxe-shield.png",                             category: "PNG", images: ["./assets/img/serxe (16).jpg"], filename: "setshield serxe-shield.png" },
        { id: 17, title: "Enter House Sign 3",      description: "serxe-modern-enter-house-sign-shield.gif",     category: "GIF", images: ["./assets/img/serxe (17).jpg"], filename: "setshield serxe-modern-enter-house-sign-shield.gif" },
        { id: 18, title: "Wagon",                   description: "serxe-wagon-shield.png",                       category: "PNG", images: ["./assets/img/serxe (18).jpg"], filename: "setshield serxe-wagon-shield.png" },
        { id: 19, title: "License / Permit",        description: "serxe-license-shield.png",                     category: "PNG", images: ["./assets/img/serxe (19).jpg"], filename: "setshield serxe-license-shield.png" },
        { id: 20, title: "Stop And Go Sign",        description: "serxe-stopngo-sign-shield.png",                category: "GIF", images: ["./assets/img/serxe (20).jpg"], filename: "setshield serxe-stopngo-sign-shield.png" },
        { id: 21, title: "Philippines Shield",      description: "philippines-shield.png",                       category: "PNG", images: ["./assets/img/serxe (21).jpg"], filename: "setshield philippines-shield.png" },
        { id: 22, title: "Referee Chair V1",        description: "serxe-referee-chair-shield.png",               category: "PNG", images: ["./assets/img/serxe (23).jpg"], filename: "setshield serxe-referee-chair-shield.png" }
    ];

    const toolsData = [
        {
            name: "Gani Previewer",
            type: "Asset Tool",
            description: "Preview Graal uploads — hats, heads, bodies, swords, and more.",
            logo: "./assets/img/tool_upload_tester.png",
            link: "https://dustyshouri.github.io/"
        },
        {
            name: "KDAssist",
            type: "Treasure Tool",
            description: "Treasure map solutions and tools for Graal Classic.",
            logo: "./assets/img/tool_mapfinder.png",
            link: "https://kdassist.org/"
        },
        {
            name: "Graal Bank",
            type: "Database",
            description: "Browse shields, swords, and status codes from Graal Classic.",
            logo: "./assets/img/tool_graalbank.png",
            link: "https://www.graalbank.com/"
        },
        {
            name: "EggDex",
            type: "Tracker",
            description: "Track all the eggs you've collected in Graal Online Classic.",
            logo: "./assets/img/tool_eggdex.png",
            link: "https://eggdex.vercel.app/"
        }
    ];

    function renderProjects(filter) {
        filter = filter || '';
        const container = document.getElementById('projects-container');
        if (!container) return;

        const filtered = projectsData.filter(p =>
            p.filename.toLowerCase().includes(filter.toLowerCase()) ||
            p.title.toLowerCase().includes(filter.toLowerCase())
        );

        if (filtered.length === 0) {
            container.innerHTML = `<div class="col-12 text-center"><p class="no-results">No shields found matching "<em>${filter}</em>"</p></div>`;
            return;
        }

        container.innerHTML = filtered.map(project => `
            <div class="col-md-6 col-lg-3 col-sm-12 reveal">
                <div class="art-card" onclick="openModal('${project.title}', '${project.description}', '${project.images[0]}', '${project.filename}')">
                    <div class="art-img-container">
                        <img src="${project.images[0]}" alt="${project.title}"
                             onerror="this.src='https://via.placeholder.com/400x400/111/81eb38?text=SHIELD'">
                        <div class="art-overlay-top">
                            <span class="art-category-badge ${project.category === 'GIF' ? 'badge-gif' : ''}">
                                <i class="fas fa-shield-alt"></i> ${project.category}
                            </span>
                        </div>
                        <div class="art-card-hover-overlay"></div>
                    </div>
                    <div class="art-info">
                        <h3 class="art-title">${project.title}</h3>
                        <div class="art-card-filename-row">
                            <div class="art-card-scroll-wrapper">
                                <code class="art-card-filename">${project.filename} &nbsp;&nbsp;&nbsp; ${project.filename}</code>
                            </div>
                            <button class="art-card-copy-btn-small" onclick="event.stopPropagation(); copyFilename('${project.filename}')">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        container.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    }

    function renderTools() {
        const container = document.getElementById('supporters-container');
        if (!container) return;

        container.innerHTML = toolsData.map(t => `
            <div class="col-12 col-md-6 reveal">
                <a href="${t.link}" class="tool-card" target="_blank">
                    <div class="tool-logo-wrap">
                        <img src="${t.logo}" alt="${t.name}" class="tool-logo">
                    </div>
                    <div class="tool-info">
                        <h4 class="tool-name">${t.name}</h4>
                        <p class="tool-type"><i class="fas fa-tag"></i> ${t.type}</p>
                        <p class="tool-desc">${t.description}</p>
                    </div>
                    <div class="tool-arrow">
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </a>
            </div>
        `).join('');

        container.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    }

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', e => renderProjects(e.target.value));
    }

    const artModal = document.getElementById('artModal');
    if (artModal) {
        artModal.addEventListener('click', function(e) {
            const modalContent = artModal.querySelector('.art-modal');
            if (modalContent && modalContent.contains(e.target)) {
                e.stopPropagation();
            }
        });
    }

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    function activateNavLink() {
        const scrollY = window.scrollY + 150;
        sections.forEach(section => {
            if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === '#' + section.id);
                });
            }
        });
    }
    window.addEventListener('scroll', activateNavLink);
    activateNavLink();

    renderProjects();
    renderTools();
});
