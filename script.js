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