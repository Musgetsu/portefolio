function applyPreferredTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    }
}

// Fonction pour basculer entre les thèmes clair et sombre
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Appliquer le thème préféré au chargement de la page
applyPreferredTheme();
let isResized = false;
let profilePic = document.querySelector('.profile-pic');

function resizeImage() {
    let scrollPosition = window.scrollY;

    // Si la taille de l'image n'a pas encore été réduite et si le défilement est vers le bas
    if (!isResized && scrollPosition > 0) {
        profilePic.style.width = '250px'; // Réduire la taille de l'image
        isResized = true; // Marquer comme redimensionné
    }
    

    // Si la taille de l'image a été réduite et si le défilement est vers le haut
    if (isResized && scrollPosition === 0) {
        profilePic.style.width = '500px'; // Restaurer la taille initiale de l'image
        isResized = false; // Marquer comme non redimensionné
    }
}

window.addEventListener('scroll', resizeImage);
// Fonction pour déplacer la position de défilement pour compenser la hauteur du header
function adjustScrollPosition() {
const headerHeight = document.querySelector('header').offsetHeight; // Hauteur du header
const hash = window.location.hash; // Obtient l'ancre dans l'URL

// Si une ancre est spécifiée dans l'URL et qu'elle correspond à une section avec un ID, ajustez la position de défilement
if (hash && document.querySelector(hash)) {
window.scrollTo(0, document.querySelector(hash).offsetTop - headerHeight);
}
}

// Appeler la fonction d'ajustement de la position de défilement lorsque la page est entièrement chargée
window.addEventListener('load', adjustScrollPosition);

// Appeler la fonction d'ajustement de la position de défilement lorsqu'un lien de navigation est cliqué
document.querySelectorAll('nav a').forEach(link => {
link.addEventListener('click', () => {
setTimeout(adjustScrollPosition, 0); // Utiliser setTimeout pour s'assurer que le défilement est ajusté après la navigation
});
});