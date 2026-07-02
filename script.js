function show(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(s => {
        s.classList.remove('active');
    });

    // Show target section
    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

console.log('✨ Cake Studios website loaded!');
