// Fungsi untuk memuat data dari file JSON
async function loadVespaDetails() {
    try {
      const response = await fetch('vespa.json');
      const data = await response.json();
  
      // Menampilkan data di bagian detail
      const details = document.getElementById('vespa-details');
      details.innerHTML = `
        <h1>Detail Vespa</h1>
        <p><strong>Model:</strong> ${data.model}</p>
        <p><strong>Tahun Produksi:</strong> ${data.tahunProduksi}</p>
        <p><strong>Warna:</strong> ${data.warna}</p>
        <p><strong>Kilometer:</strong> ${data.kilometer}</p>
        <p><strong>Harga:</strong> ${data.harga}</p>
      `;
  
      // Menampilkan gambar di carousel
      const carousel = document.getElementById('carousel-images');
      data.gambar.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Vespa Image ${index + 1}`;
        img.classList.add(index === 0 ? 'active' : '');
        carousel.appendChild(img);
      });
  
      // Inisialisasi carousel
      initCarousel();
    } catch (error) {
      console.error('Gagal memuat data Vespa:', error);
    }
  }
  
  // Fungsi untuk menginisialisasi carousel
  function initCarousel() {
    let currentIndex = 0;
    const images = document.querySelectorAll('#carousel-images img');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
  
    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
    }
  
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });
  
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });
  
    // Tampilkan gambar pertama
    showImage(currentIndex);
  }
  
  // Fungsi untuk kembali ke halaman sebelumnya
  function goBack() {
    window.history.back();
  }
  
  // Fungsi untuk menghubungi penjual
  function chatSeller() {
    alert('Menghubungi penjual...');
  }
  
  // Memuat data saat halaman selesai dimuat
  window.onload = loadVespaDetails;
  