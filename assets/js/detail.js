async function loadVespaDetails() {
  const model = getQueryParameter('model'); // Ambil parameter model dari URL
  if (!model) return console.error("Parameter 'model' tidak ditemukan.");

  try {
    const response = await fetch('data.json'); // Load file JSON
    const data = await response.json(); // Parse data JSON
    const vespa = data[model];

    if (!vespa) return console.error("Data Vespa tidak ditemukan!");

    // Tampilkan detail Vespa
    const details = document.getElementById('vespa-details');
    details.innerHTML = `
      <h1>${vespa.name}</h1>
      <p><strong>Year:</strong> ${vespa.year}</p>
      <p><strong>Engine:</strong> ${vespa.engine}</p>
      <p><strong>Color:</strong> ${vespa.color}</p>
      <p><strong>Price:</strong> ${vespa.price}</p>
    `;

    // Menambahkan gambar Vespa
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-gallery';

    vespa.images.forEach((path, index) => {
      const img = document.createElement('img');
      img.src = path; // Path dari JSON
      img.alt = `${vespa.name} Image ${index + 1}`;
      img.style.width = '200px';
      img.style.margin = '5px';
      imageContainer.appendChild(img);
    });

    details.appendChild(imageContainer);

    // Mengatur tombol WhatsApp secara dinamis
    const whatsappButton = document.getElementById('whatsapp-button');
    const whatsappText = `Halo, saya tertarik dengan ${vespa.name}, apakah anda bisa menjelaskan lebih lanjut?`;
    const whatsappUrl = `https://wa.me/62895325533717?text=${encodeURIComponent(whatsappText)}`;
    whatsappButton.href = whatsappUrl; // Mengupdate URL WhatsApp dengan model Vespa yang benar

  } catch (error) {
    console.error('Gagal memuat data Vespa:', error.message);
  }
}

// Fungsi untuk mendapatkan parameter query
function getQueryParameter(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Load detail saat halaman dimuat
window.onload = loadVespaDetails;
