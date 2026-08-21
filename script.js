/* =========================================================
   FAKO TIAKO ALEX - PORTFOLIO
   JAVASCRIPT PRINCIPAL
========================================================= */


/* =========================================================
   1. ANNÉE AUTOMATIQUE DU FOOTER
========================================================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* =========================================================
   2. MENU MOBILE
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (icon) {

            if (navMenu.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }

    });


    /* Fermer le menu lorsqu'on clique sur un lien */

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    });

}


/* =========================================================
   3. CERTIFICATIONS
========================================================= */

/*
   POUR AJOUTER UNE CERTIFICATION :

   1. Mets ton fichier dans :

      certifications/

   Exemple :

      certifications/certificat-dahua.pdf

   2. Ajoute ensuite une entrée ci-dessous.

*/

const certifications = [

    {
        title: "Certification en automatisation Excel",
        description: "Certification en automatisation et utilisation avancée d'Excel.",
        file: "certifications/Certificat automatisation excel.pdf"
    },

    {
        title: "Excel Power Query",
        description: "Certification Excel Power Query for Beginners.",
        file: "certifications/certificat Excel Power Query in excel for beginners.pdf"
    },

    {
        title: "Certification Microsoft Excel",
        description: "Certification de compétences en Microsoft Excel.",
        file: "certifications/Certificat ms excel.pdf"
    },

    {
        title: "Présentations efficaces",
        description: "Certification sur les techniques de présentation efficace.",
        file: "certifications/Certification sur des présentations efficaces.pdf"
    },

    {
        title: "Upgrade Windows",
        description: "Certification relative à la mise à niveau et à l'utilisation de Windows.",
        file: "certifications/Certification upgrate windows.pdf"
    },

    {
        title: "Dahua ACSEN",
        description: "Certification Dahua ACSEN.",
        file: "certifications/DHCA-ACSEN202605097987_1783353620597.pdf"
    },

    {
        title: "Dahua ACSEN — Company",
        description: "Certification Dahua ACSEN — version entreprise.",
        file: "certifications/DHCA-ACSEN202605097987_company_1783353621844.pdf"
    },

    {
        title: "Dahua IPVSS",
        description: "Certification Dahua IPVSS.",
        file: "certifications/DHCA-IPVSSEN202601312904_1783353618131.pdf"
    },

    {
        title: "Dahua IPVSS — Company",
        description: "Certification Dahua IPVSS — version entreprise.",
        file: "certifications/DHCA-IPVSSEN202601312904_company_1783353619483.pdf"
    },

    {
        title: "Gestion du temps et productivité",
        description: "Certification sur la gestion du temps et l'amélioration de la productivité.",
        file: "certifications/Gérer son temps et être plus productif.pdf"
    }

];

/* Génération automatique des certifications */

const certificationsContainer =
    document.getElementById("certificationsContainer");


function afficherCertifications() {

    if (!certificationsContainer) {
        return;
    }


    /* Si aucune certification */

    if (certifications.length === 0) {

        certificationsContainer.innerHTML = `

            <div class="document-card">

                <div class="document-icon">

                    <i class="fas fa-certificate"></i>

                </div>

                <h3>Certifications à venir</h3>

                <p>
                    De nouvelles certifications seront ajoutées
                    prochainement.
                </p>

            </div>

        `;

        return;
    }


    certificationsContainer.innerHTML = "";


    certifications.forEach(function (certification) {

        const card = document.createElement("article");

        card.className = "document-card";


        card.innerHTML = `

            <div class="document-icon">

                <i class="fas fa-certificate"></i>

            </div>


            <h3>
                ${certification.title}
            </h3>


            <p>
                ${certification.description}
            </p>


            <div class="document-actions">

                <a
                    href="${certification.file}"
                    target="_blank"
                    class="document-view"
                >

                    <i class="fas fa-eye"></i>

                    Voir

                </a>


                <a
                    href="${certification.file}"
                    download
                    class="document-download"
                >

                    <i class="fas fa-download"></i>

                    Télécharger

                </a>

            </div>

        `;


        certificationsContainer.appendChild(card);

    });

}


afficherCertifications();


/* =========================================================
   4. E-BOOKS
========================================================= */

/*
   POUR AJOUTER UN E-BOOK :

   1. Mets ton PDF dans :

      ebooks/

   Exemple :

      ebooks/gerer-son-argent.pdf

   2. Ajoute une entrée dans la liste ci-dessous.

*/


const ebooks = [

    {
        title: "Devenir la meilleure version de soi en 21 jours",
        description:
            "Un guide pratique pour améliorer ses habitudes, sa discipline, son organisation et progresser vers une meilleure version de soi-même.",
        file:
            "ebooks/Devenir_la_meilleure_version_de_soi_21_en_jours.pdf"
    },

    {
        title: "Devenir le plus riche",
        description:
            "Un e-book consacré au développement personnel et à l'amélioration de sa relation avec l'argent et la réussite.",
        file:
            "ebooks/Devenir_le_plus_riches.pdf"
    },

    {
        title: "Gérer son argent",
        description:
            "Un guide pratique pour apprendre à mieux gérer son argent, organiser ses finances et développer de bonnes habitudes financières.",
        file:
            "ebooks/Gérer son argent.pdf"
    },

    {
        title: "Informatique pour tous",
        description:
            "Un guide destiné à faciliter la découverte et l'utilisation de l'informatique au quotidien.",
        file:
            "ebooks/informatique_pour_tous.pdf"
    },

    {
        title: "Les raccourcis Excel",
        description:
            "Un guide pratique regroupant des raccourcis Excel utiles pour travailler plus rapidement et efficacement.",
        file:
            "ebooks/Les_raccourcis_excels.pdf"
    }

];


/* Génération automatique des e-books */

const ebooksContainer =
    document.getElementById("ebooksContainer");


function afficherEbooks() {

    if (!ebooksContainer) {
        return;
    }


    /* Aucun e-book */

    if (ebooks.length === 0) {

        ebooksContainer.innerHTML = `

            <div class="document-card">

                <div class="document-icon">

                    <i class="fas fa-book"></i>

                </div>

                <h3>E-books à venir</h3>

                <p>
                    De nouveaux e-books seront ajoutés
                    prochainement.
                </p>

            </div>

        `;

        return;
    }


    ebooksContainer.innerHTML = "";


    ebooks.forEach(function (ebook) {

        const card = document.createElement("article");

        card.className = "document-card";


        card.innerHTML = `

            <div class="document-icon">

                <i class="fas fa-book-open"></i>

            </div>


            <h3>
                ${ebook.title}
            </h3>


            <p>
                ${ebook.description}
            </p>


            <div class="document-actions">

                <a
                    href="${ebook.file}"
                    target="_blank"
                    class="document-view"
                >

                    <i class="fas fa-book-open"></i>

                    Lire

                </a>


                <a
                    href="${ebook.file}"
                    download
                    class="document-download"
                >

                    <i class="fas fa-download"></i>

                    Télécharger

                </a>

            </div>

        `;


        ebooksContainer.appendChild(card);

    });

}


afficherEbooks();


/* =========================================================
   5. VIDÉOS
========================================================= */

/*
   POUR AJOUTER UNE VIDÉO :

   1. Mets ta vidéo dans :

      videos/

   Exemple :

      videos/installation-dahua.mp4

   2. Ajoute une entrée dans la liste ci-dessous.

*/


const videos = [

    {
        title: "Installation et configuration d'une pointeuse Dahua",

        description:
            "Démonstration de l'installation, de la configuration et de la mise en service d'une solution de gestion du temps de travail Dahua.",

        file:
            "videos/video installation GFA 1.mp4"
    },
    {
        title: "Installation et configuration d'une pointeuse Dahua partie 2",

        description:
            "Démonstration de l'installation, de la configuration et de la mise en service d'une solution de gestion du temps de travail Dahua.",

        file:
            "videos/video installation GFA 2.mp4"
    },
    {
        title: "Installation et configuration d'une pointeuse Dahua partie 3",

        description:
            "Démonstration de l'installation, de la configuration et de la mise en service d'une solution de gestion du temps de travail Dahua.",

        file:
            "videos/video installation GFA 3.mp4"
    },
    {
        title: "Installation et configuration d'une pointeuse Dahua",

        description:
            "Démonstration de l'installation, de la configuration et de la mise en service d'une solution de gestion du temps de travail Dahua.",

        file:
            "videos/video installation GFA 4.mp4"
    }
];


const videosContainer =
    document.getElementById("videosContainer");


function afficherVideos() {

    if (!videosContainer) {
        return;
    }


    /* Aucune vidéo */

    if (videos.length === 0) {

        videosContainer.innerHTML = `

            <div class="video-card">

                <div class="video-content">

                    <h3>
                        Vidéos à venir
                    </h3>

                    <p>
                        Mes démonstrations et réalisations
                        seront ajoutées prochainement.
                    </p>

                </div>

            </div>

        `;

        return;
    }


    videosContainer.innerHTML = "";


    videos.forEach(function (video, index) {

        const card = document.createElement("article");

        card.className = "video-card";


        card.innerHTML = `

            <div class="video-preview">

                <video
                    src="${video.file}"
                    preload="metadata"
                    muted
                    playsinline
                ></video>


                <div class="video-overlay">

                    <div class="video-play-icon">

                        <i class="fas fa-play"></i>

                    </div>

                </div>

            </div>


            <div class="video-content">

                <h3>
                    ${video.title}
                </h3>


                <p>
                    ${video.description}
                </p>


                <button
                    class="video-button"
                    data-video-index="${index}"
                >

                    <i class="fas fa-play"></i>

                    Regarder la vidéo

                </button>

            </div>

        `;


        videosContainer.appendChild(card);

    });


    /* Boutons regarder */

    const videoButtons =
        videosContainer.querySelectorAll(".video-button");


    videoButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const index =
                parseInt(
                    button.getAttribute("data-video-index")
                );


            ouvrirVideo(videos[index]);

        });

    });


    /* Cliquer directement sur l'aperçu */

    const videoPreviews =
        videosContainer.querySelectorAll(".video-preview");


    videoPreviews.forEach(function (preview, index) {

        preview.style.cursor = "pointer";


        preview.addEventListener("click", function () {

            ouvrirVideo(videos[index]);

        });

    });

}


afficherVideos();


/* =========================================================
   6. LECTEUR VIDÉO / MODAL
========================================================= */

function ouvrirVideo(video) {

    /* Supprimer un ancien lecteur */

    const ancienModal =
        document.querySelector(".video-modal");

    if (ancienModal) {
        ancienModal.remove();
    }


    /* Création du lecteur */

    const modal =
        document.createElement("div");

    modal.className = "video-modal";


    modal.innerHTML = `

        <div class="video-modal-content">

            <button
                class="video-modal-close"
                aria-label="Fermer"
            >

                <i class="fas fa-xmark"></i>

            </button>


            <video
                controls
                autoplay
                playsinline
            >

                <source
                    src="${video.file}"
                    type="video/mp4"
                >

                Votre navigateur ne supporte pas
                la lecture vidéo.

            </video>

        </div>

    `;


    document.body.appendChild(modal);


    /* Afficher */

    setTimeout(function () {

        modal.classList.add("active");

    }, 10);


    /* Bouton fermer */

    const closeButton =
        modal.querySelector(".video-modal-close");


    closeButton.addEventListener("click", function () {

        fermerVideo(modal);

    });


    /* Cliquer sur l'arrière-plan */

    modal.addEventListener("click", function (event) {

        if (event.target === modal) {

            fermerVideo(modal);

        }

    });


    /* Échap */

    document.addEventListener(
        "keydown",
        function fermerAvecEscape(event) {

            if (event.key === "Escape") {

                fermerVideo(modal);

                document.removeEventListener(
                    "keydown",
                    fermerAvecEscape
                );

            }

        }
    );

}


/* Fermer le lecteur vidéo */

function fermerVideo(modal) {

    const video =
        modal.querySelector("video");


    if (video) {

        video.pause();

        video.currentTime = 0;

    }


    modal.classList.remove("active");


    setTimeout(function () {

        modal.remove();

    }, 300);

}


/* =========================================================
   7. ANIMATION AU SCROLL
========================================================= */

const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.1
        }
    );


const animatedElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .document-card, .timeline-item, .contact-card"
    );


animatedElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform = "translateY(25px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});


/* =========================================================
   8. MESSAGE CONSOLE
========================================================= */

console.log(
    "Portfolio de FAKO TIAKO Alex chargé avec succès."
);

/* =========================================================
   DÉTAILS DES PROJETS
========================================================= */

const projetsDetails = [

    {
        categorie: "Gestion du temps de travail",
        titre: "Gestionnaire de Temps de Travail Dahua — TRYAM",

        localisation: "Libreville & Ndjolé",

        description:
            "Installation et mise en service d'une solution Dahua de gestion du temps de travail sur les différents sites de TRYAM.",

        travaux: [
            "Installation des équipements",
            "Configuration du système",
            "Configuration réseau",
            "Paramétrage des utilisateurs",
            "Tests de fonctionnement",
            "Mise en service de la solution"
        ],

        technologies: [
            "Dahua",
            "Biométrie",
            "Gestion du temps",
            "Réseau"
        ],

        photos: [
            // "projects/tryam/photo-1.jpg",
            // "projects/tryam/photo-2.jpg"
        ],

        videos: [
            // "projects/tryam/demonstration.mp4"
        ]
    },


    {
        categorie: "Gestion du temps de travail",
        titre: "Gestionnaire de Temps de Travail HIKVISION",

        localisation: "Gabon",

        description:
            "Mise en place et configuration d'une solution HIKVISION destinée à la gestion du temps de travail et au suivi des présences des employés.",

        travaux: [
            "Installation des équipements",
            "Configuration du système",
            "Paramétrage des utilisateurs",
            "Configuration réseau",
            "Tests de fonctionnement",
            "Mise en service"
        ],

        technologies: [
            "HIKVISION",
            "Biométrie",
            "Pointage",
            "Réseau"
        ],

        photos: [
            // "projects/hikvision/photo-1.jpg"
        ],

        videos: [
            // "projects/hikvision/demonstration.mp4"
        ]
    },


    {
        categorie: "Contrôle d'accès",
        titre: "Installation du Contrôle d'Accès — Deloitte",

        localisation: "Gabon",

        description:
            "Installation, configuration et mise en service d'une solution de contrôle d'accès sur le site de Deloitte.",

        travaux: [
            "Installation des équipements",
            "Configuration du système",
            "Paramétrage des accès",
            "Tests de fonctionnement",
            "Mise en service"
        ],

        technologies: [
            "Contrôle d'accès",
            "Sécurité électronique",
            "Réseau"
        ],

        photos: [
            // "projects/deloitte/photo-1.jpg"
        ],

        videos: [
            // "projects/deloitte/demonstration.mp4"
        ]
    },


    {
        categorie: "Contrôle d'accès",
        titre: "Installation du Contrôle d'Accès — BCEG",

        localisation: "Gabon",

        description:
            "Installation et configuration d'une solution de contrôle d'accès destinée à sécuriser et gérer les accès au site de BCEG.",

        travaux: [
            "Installation des équipements",
            "Configuration du système",
            "Paramétrage des utilisateurs",
            "Gestion des droits d'accès",
            "Tests",
            "Mise en service"
        ],

        technologies: [
            "Contrôle d'accès",
            "Sécurité",
            "Installation"
        ],

        photos: [
            // "projects/bceg/photo-1.jpg"
        ],

        videos: [
            // "projects/bceg/demonstration.mp4"
        ]
    },


    {
        categorie: "Contrôle d'accès",
        titre: "Installation du Contrôle d'Accès — AGADEV",

        localisation: "Gabon",

        description:
            "Installation et configuration d'une solution de contrôle d'accès sur le site d'AGADEV.",

        travaux: [
            "Installation des équipements",
            "Configuration du système",
            "Paramétrage des accès",
            "Vérification du fonctionnement",
            "Tests",
            "Mise en service"
        ],

        technologies: [
            "Contrôle d'accès",
            "Sécurité électronique",
            "Configuration"
        ],

        photos: [
            // "projects/agadev/photo-1.jpg"
        ],

        videos: [
            // "projects/agadev/demonstration.mp4"
        ]
    },


    {
        categorie: "Gestion du temps de travail",
        titre: "Gestionnaire de Temps de Travail Dahua — West Alliance",

        localisation: "Derrière Air France",

        description:
            "Installation et mise en service d'une solution Dahua de gestion du temps de travail pour West Alliance.",

        travaux: [
            "Installation de la pointeuse",
            "Configuration du système",
            "Configuration réseau",
            "Gestion des employés",
            "Gestion des pointages",
            "Tests et mise en service"
        ],

        technologies: [
            "Dahua",
            "Gestion du temps",
            "Biométrie",
            "Réseau"
        ],

        photos: [
            "projects/west-alliance/image 1.jpeg",
            "projects/west-alliance/image 2.jpeg",
            "projects/west-alliance/image 3.jpeg",
            "projects/west-alliance/image 4.jpeg",
            "projects/west-alliance/image 5.jpeg",
            "projects/west-alliance/image 6.jpeg",
            "projects/west-alliance/image 7.jpeg",
            "projects/west-alliance/image 8.jpeg",
            "projects/west-alliance/image 9.jpeg",
            "projects/west-alliance/image 10.jpeg"
        ],

        videos: [
            "projects/west-alliance/video installation GFA 1.mp4",
            "projects/west-alliance/video installation GFA 2.mp4"
        ]
    }

];

/* =========================================================
   POPUP DÉTAILS PROJET
========================================================= */

function ouvrirProjet(index) {

    const projet = projetsDetails[index];

    if (!projet) {
        return;
    }


    /* Supprimer une ancienne fenêtre */

    const ancienneModal =
        document.querySelector(".project-modal");

    if (ancienneModal) {
        ancienneModal.remove();
    }


    /* =====================================================
       TECHNOLOGIES
    ====================================================== */

    const technologiesHTML =
        projet.technologies
            .map(function (technologie) {

                return `
                    <span>${technologie}</span>
                `;

            })
            .join("");


    /* =====================================================
       TRAVAUX
    ====================================================== */

    const travauxHTML =
        projet.travaux
            .map(function (travail) {

                return `
                    <li>
                        <i class="fas fa-check"></i>
                        ${travail}
                    </li>
                `;

            })
            .join("");


    /* =====================================================
       PHOTOS
    ====================================================== */

    let photosHTML = "";


    if (projet.photos && projet.photos.length > 0) {

        photosHTML = `

            <div class="project-modal-section">

                <h3>

                    <i class="fas fa-images"></i>

                    Photos de la réalisation

                </h3>


                <div class="project-modal-gallery">

                    ${

                        projet.photos.map(function (photo) {

                            return `

                                <div
                                    class="project-modal-photo"
                                    onclick="agrandirPhoto('${photo}')"
                                >

                                    <img
                                        src="${photo}"
                                        alt="Photo du projet"
                                        loading="lazy"
                                    >

                                </div>

                            `;

                        }).join("")

                    }

                </div>

            </div>

        `;

    }


    /* =====================================================
       VIDÉOS
    ====================================================== */

    let videosHTML = "";


    if (projet.videos && projet.videos.length > 0) {

        videosHTML = `

            <div class="project-modal-section">

                <h3>

                    <i class="fas fa-video"></i>

                    Vidéo de démonstration

                </h3>


                <div class="project-modal-videos">

                    ${

                        projet.videos.map(function (video) {

                            return `

                                <div class="project-modal-video">

                                    <video
                                        controls
                                        preload="metadata"
                                        playsinline
                                    >

                                        <source
                                            src="${video}"
                                            type="video/mp4"
                                        >

                                        Votre navigateur ne peut pas
                                        lire cette vidéo.

                                    </video>

                                </div>

                            `;

                        }).join("")

                    }

                </div>

            </div>

        `;

    }


    /* =====================================================
       CRÉATION DE LA POPUP
    ====================================================== */

    const modal =
        document.createElement("div");

    modal.className = "project-modal";


    modal.innerHTML = `

        <div class="project-modal-content">


            <button
                class="project-modal-close"
                aria-label="Fermer"
            >

                <i class="fas fa-xmark"></i>

            </button>


            <span class="project-modal-category">

                ${projet.categorie}

            </span>


            <h2>

                ${projet.titre}

            </h2>


            <div class="project-modal-location">

                <i class="fas fa-location-dot"></i>

                ${projet.localisation}

            </div>


            <!-- DESCRIPTION -->

            <div class="project-modal-section">

                <h3>

                    <i class="fas fa-file-lines"></i>

                    Description

                </h3>

                <p>

                    ${projet.description}

                </p>

            </div>


            <!-- TRAVAUX -->

            <div class="project-modal-section">

                <h3>

                    <i class="fas fa-screwdriver-wrench"></i>

                    Travaux réalisés

                </h3>


                <ul>

                    ${travauxHTML}

                </ul>

            </div>


            <!-- TECHNOLOGIES -->

            <div class="project-modal-section">

                <h3>

                    <i class="fas fa-microchip"></i>

                    Technologies et compétences

                </h3>


                <div class="project-modal-tags">

                    ${technologiesHTML}

                </div>

            </div>


            <!-- PHOTOS -->

            ${photosHTML}


            <!-- VIDÉOS -->

            ${videosHTML}


        </div>

    `;


    document.body.appendChild(modal);


    /* =====================================================
       ANIMATION
    ====================================================== */

    setTimeout(function () {

        modal.classList.add("active");

    }, 10);


    /* =====================================================
       FERMER
    ====================================================== */

    const closeButton =
        modal.querySelector(".project-modal-close");


    closeButton.addEventListener(
        "click",
        function () {

            fermerProjet(modal);

        }
    );


    /* Fermer en cliquant à l'extérieur */

    modal.addEventListener(
        "click",
        function (event) {

            if (event.target === modal) {

                fermerProjet(modal);

            }

        }
    );


    /* =====================================================
       TOUCHE ESC
    ====================================================== */

    function fermerAvecEscape(event) {

        if (event.key === "Escape") {

            fermerProjet(modal);

            document.removeEventListener(
                "keydown",
                fermerAvecEscape
            );

        }

    }


    document.addEventListener(
        "keydown",
        fermerAvecEscape
    );

}


/* =========================================================
   AGRANDIR UNE PHOTO
========================================================= */

function agrandirPhoto(photo) {

    const viewer =
        document.createElement("div");

    viewer.className = "photo-viewer";


    viewer.innerHTML = `

        <button
            class="photo-viewer-close"
            aria-label="Fermer"
        >

            <i class="fas fa-xmark"></i>

        </button>


        <img
            src="${photo}"
            alt="Photo agrandie"
        >

    `;


    document.body.appendChild(viewer);


    setTimeout(function () {

        viewer.classList.add("active");

    }, 10);


    viewer.addEventListener(
        "click",
        function (event) {

            if (
                event.target === viewer ||
                event.target.closest(".photo-viewer-close")
            ) {

                viewer.remove();

            }

        }
    );

}


/* =========================================================
   FERMER LA FENÊTRE PROJET
========================================================= */

function fermerProjet(modal) {

    modal.classList.remove("active");


    setTimeout(function () {

        modal.remove();

    }, 300);

}