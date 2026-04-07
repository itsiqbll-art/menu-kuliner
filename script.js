function filterMenu(kategori) {
    const items = document.querySelectorAll('.menu-item');
    
    items.forEach(item => {
        if (kategori === 'semua') {
            item.style.display = 'block';
        } else {
            // Mengecek apakah elemen memiliki class sesuai kategori
            if (item.classList.contains(kategori)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    });
}
