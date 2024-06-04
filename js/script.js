function applyPreferredTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    }
}

// Fonction pour basculer entre le mode sombre et le mode clair
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Applique la préfèrence du navigateur
applyPreferredTheme();
let isResized = false;
let profilePic = document.querySelector('.profile-pic');

function resizeImage() {
    let scrollPosition = window.scrollY;

    // Si la taille de l'image n'a pas encore été réduite et si le défilement est vers le bas
    if (!isResized && scrollPosition > 0) {
        profilePic.style.width = '250px'; // Réduire la taille de l'image
        isResized = true; 
    }
    

    // Si la taille de l'image a été réduite et si le défilement est vers le haut
    if (isResized && scrollPosition === 0) {
        profilePic.style.width = '500px'; // Restaurer la taille initiale de l'image
        isResized = false; 
    }
}

window.addEventListener('scroll', resizeImage);
function adjustScrollPosition() {
const headerHeight = document.querySelector('header').offsetHeight; 
const hash = window.location.hash; 


if (hash && document.querySelector(hash)) {
window.scrollTo(0, document.querySelector(hash).offsetTop - headerHeight);
}
}

window.addEventListener('load', adjustScrollPosition);


document.querySelectorAll('nav a').forEach(link => {
link.addEventListener('click', () => {
setTimeout(adjustScrollPosition, 0); 
});
});