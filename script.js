/* =========================================================
   CORE UI LOGIC - SERXE PORTFOLIO
========================================================= */

// Global variable (accessible from onclick)
window.currentFilename = '';

// Toast notification function
window.showToast = function(message) {
    const existing = document.querySelector('.custom-toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    toast.innerHTML = '<i class="fas fa-check"></i><span>' + message + '</span>';
    document.body.appendChild(toast);
    setTimeout(function() {
        toast.classList.add('hide');
        setTimeout(function() { toast.remove(); }, 300);
    }, 2000);
};

// Copy function
window.copyFilename = function(filename) {
    navigator.clipboard.writeText(filename).then(function() {
        window.showToast('Copied: ' + filename);
    }).catch(function() {
        var textArea = document.createElement('textarea');
        textArea.value = filename;
        textArea.style.cssText = 'position:fixed;opacity:0';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        window.showToast('Copied: ' + filename);
    });
};

// Open modal function
window.openModal = function(title, desc, imgSrc, filename) {
    window.currentFilename = filename;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDesc').textContent = desc;
    var modalImg = document.getElementById('modalImg');
    modalImg.src = imgSrc;
    modalImg.onerror = function() {
        this.src = 'https://via.placeholder.com/600x400/111/81eb38?text=NOT+FOUND';
    };
    var modalEl = document.getElementById('artModal');
    var modal = new bootstrap.Modal(modalEl);
    modal.show();
};

document.addEventListener("DOMContentLoaded", function() {
    
    // REVEAL ON SCROLL
    var revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.15 });
    document.querySelectorAll(".reveal").forEach(function(el) { revealObserver.observe(el); });

    // PROJECT DATA - All 22 Shields
    var projectsData = [
        { id: 1, title: "Referee Chair Version 2", description: "serxe-referee-chair-v2-shield.png", category: "PNG", images: ["./assets/img/serxe (1).jpg"], filename: "setshield serxe-referee-chair-v2-shield.png" },
        { id: 2, title: "X-ray Machine", description: "serxe-xray-machine-shield.png", category: "PNG", images: ["./assets/img/serxe (2).jpg"], filename: "setshield serxe-xray-machine-shield.png" },
        { id: 3, title: "Graal Truck", description: "serxe-graal-truck-shield.png", category: "PNG", images: ["./assets/img/serxe (3).jpg"], filename: "setshield serxe-graal-truck-shield.png" },
        { id: 4, title: "RPS Table Version 1", description: "serxerps-shield.png", category: "PNG", images: ["./assets/img/serxe (4).jpg"], filename: "setshield serxerps-shield.png" },
        { id: 5, title: "Enter House Sign 2", description: "serxe-enterhouse-controller-shield.png", category: "PNG", images: ["./assets/img/serxe (5).jpg"], filename: "setshield serxe-enterhouse-controller-shield.png" },
        { id: 6, title: "Fire Truck", description: "serxe-firetruck1-shield.png", category: "PNG", images: ["./assets/img/serxe (6).jpg"], filename: "setshield serxe-firetruck1-shield.png" },
        { id: 7, title: "Coffee Shop Cart", description: "graal-coffee-shop-shield.png", category: "PNG", images: ["./assets/img/serxe (7).jpg"], filename: "setshield graal-coffee-shop-shield.png" },
        { id: 8, title: "Pit hole", description: "serxe-pitv2-shield.png", category: "PNG", images: ["./assets/img/serxe (8).jpg"], filename: "setshield serxe-pitv2-shield.png" },
        { id: 9, title: "Enter House Sign 4", description: "serxe-enterhouse4-shield.png", category: "PNG", images: ["./assets/img/serxe (9).jpg"], filename: "serxe-enterhouse4-shield.png" },
        { id: 10, title: "Biometric Shield", description: "serxe-biometric-v2-shield.png", category: "GIF", images: ["./assets/img/serxe (10).jpg"], filename: "setshield serxe-biometric-v2-shield.png" },
        { id: 11, title: "RPS Table Version 2", description: "serxerps2-shield.png", category: "PNG", images: ["./assets/img/serxe (11).jpg"], filename: "setshield serxerps2-sheild.png" },
        { id: 12, title: "Gray Shield", description: "serxe-gray-shield.png", category: "PNG", images: ["./assets/img/serxe (12).jpg"], filename: "setshield serxe-gray-shield.png" },
        { id: 13, title: "Boxes", description: "serxe-box-shield.png", category: "PNG", images: ["./assets/img/serxe (13).jpg"], filename: "setshield serxe-box-shield.png" },
        { id: 14, title: "TukTuk / Taxi", description: "serxe-galaxa-tuktuk-shield.png", category: "PNG", images: ["./assets/img/serxe (14).jpg"], filename: "setshield serxe-galaxa-tuktuk-shield.png" },
        { id: 15, title: "Clipboard", description: "serxe-clipboard-shield.png", category: "PNG", images: ["./assets/img/serxe (15).jpg"], filename:"setshield serxe-clipboard-shield.png" },
        { id: 16, title: "Black Shield", description: "serxe-shield.png", category: "PNG", images: ["./assets/img/serxe (16).jpg"], filename: "setshield serxe-shield.png" },
        { id: 17, title: "Enter House Sign 3", description: "serxe-modern-enter-house-sign-shield.gif", category: "GIF", images: ["./assets/img/serxe (17).jpg"], filename: "setshield serxe-modern-enter-house-sign-shield.gif" },
        { id: 18, title: "Wagon", description: "serxe-wagon-shield.png", category: "PNG", images: ["./assets/img/serxe (18).jpg"], filename: "setshield serxe-wagon-shield.png" },
        { id: 19, title: "License / Permit", description: "serxe-license-shield.png", category: "PNG", images: ["./assets/img/serxe (19).jpg"], filename: "setshield serxe-license-shield.png" },
        { id: 20, title: "Stop And Go Sign", description: "serxe-stopngo-sign-shield.png", category: "GIF", images: ["./assets/img/serxe (20).jpg"], filename: "setshield serxe-stopngo-sign-shield.png" },
        { id: 21, title: "Philippines Shield", description: "philippines-shield.png", category: "PNG", images: ["./assets/img/serxe (21).jpg"], filename: "setshield philippines-shield.png" },
        { id: 22, title: "Referee Chair Version 1", description: "serxe-referee-chair-shield.png", category: "PNG", images: ["./assets/img/serxe (23).jpg"], filename: "setshield serxe-referee-chair-shield.png" }

    ];

    // RENDER PROJECTS
    function renderProjects(filter) {
        filter = filter || '';
        var container = document.getElementById("projects-container");
        if (!container) return;

        var filteredData = projectsData.filter(function(project) {
            return project.filename.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
        });

        if (filteredData.length === 0) {
            container.innerHTML = '<div class="col-12 text-center"><p class="no-results">No files found matching "' + filter + '"</p></div>';
            return;
        }

        var html = '';
        filteredData.forEach(function(project) {
            html += '<div class="col-md-6 col-lg-3 col-sm-12 reveal">' +
                '<div class="art-card" onclick="openModal(\'' + project.title + '\', \'' + project.description + '\', \'' + project.images[0] + '\', \'' + project.filename + '\')">' +
                '<div class="art-img-container">' +
                '<img src="' + project.images[0] + '" alt="' + project.title + '" onerror="this.src=\'https://via.placeholder.com/400x400/111/81eb38?text=IMAGE\'">' +
                '<div class="art-overlay-top"><span class="art-category"><i class="fas fa-shield-alt"></i> ' + project.category + '</span></div>' +
                '<div class="art-overlay-bottom"><button class="art-copy-btn" onclick="event.stopPropagation(); copyFilename(\'' + project.filename + '\')"><i class="fas fa-copy"></i></button></div>' +
                '</div>' +
                '<div class="art-info"><h3 class="art-title">' + project.title + '</h3><p class="art-desc">' + project.description + '</p></div>' +
                '</div></div>';
        });
        container.innerHTML = html;

        document.querySelectorAll(".reveal").forEach(function(el) { revealObserver.observe(el); });
    }

    // SEARCH FUNCTIONALITY
    var searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            renderProjects(e.target.value);
        });
    }

    // NAVIGATION SCROLL SPY
    var sections = document.querySelectorAll("section[id]");
    var navLinks = document.querySelectorAll(".nav-link");
    function activateNavLink() {
        var scrollY = window.scrollY + 150;
        sections.forEach(function(section) {
            var sectionTop = section.offsetTop;
            var sectionHeight = section.offsetHeight;
            var sectionId = section.getAttribute("id");
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(function(link) {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === "#" + sectionId) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }
    window.addEventListener("scroll", activateNavLink);
    activateNavLink();

    // SMOOTH SCROLL FOR HERO CTA
    var heroCta = document.querySelector('.hero-cta');
    if (heroCta) {
        heroCta.addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // MODAL COPY BUTTON
    var modalCopyBtn = document.getElementById('modalCopyBtn');
    if (modalCopyBtn) {
        modalCopyBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (window.currentFilename) {
                copyFilename(window.currentFilename);
            }
        });
    }

    renderProjects();
});