// Fungsi untuk membuka offcanvas
function openOffcanvas() {
  var offcanvas = document.getElementById('offcanvasRight');
  var offcanvasBS = new bootstrap.Offcanvas(offcanvas);
  offcanvasBS.show();
}

// Menambahkan event listener pada elemen SVG
document.getElementById('sidebarTrigger').addEventListener('click', openOffcanvas);
