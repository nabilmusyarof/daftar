// --- JAVASCRIPT UNTUK FUNGSI SCROLL & INTERAKSI (script.js) ---

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    navbar.classList.toggle('active');

    const icon = hamburger.querySelector('i');
    if (navbar.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

// Opsional: Menutup menu ketika link diklik
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar');
        if (window.innerWidth <= 768 && navbar.classList.contains('active')) {
            toggleMenu(); 
        }
    });
});

// --- FUNGSI JS KHUSUS UNTUK TABLE SCROLL ---
function smoothScrollToTable() {
    // Cari elemen navigasi di navbar yang menuju ke bagian benefit/simulasi gaji
    const benefitLink = document.querySelector('a[href="#benefit"]');
    
    if (benefitLink) {
        benefitLink.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = benefitLink.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Scroll halus menuju bagian simulasi gaji
                targetElement.scrollIntoView({ behavior: 'smooth' });
                
                // Tambahan: Setelah scroll, berikan sedikit visual cue (opsional)
                const tableContainer = targetElement.querySelector('.table-container');
                if (tableContainer) {
                    // Tambahkan kelas sementara untuk memicu animasi atau indikator 
                    // bahwa tabel bisa digeser (membutuhkan CSS tambahan)
                    tableContainer.classList.add('scroll-hint');
                    setTimeout(() => {
                        tableContainer.classList.remove('scroll-hint');
                    }, 1500);
                }
            }
        });
    }
}

// Jalankan fungsi smooth scroll setelah DOM dimuat
document.addEventListener('DOMContentLoaded', smoothScrollToTable);