const nav = document.querySelectorAll('#nav li a');

nav.forEach(link => {
    if (link.getAttribute('data-type') === currentCategory) {
        link.style.color = 'var(--blue)';
    }
})

