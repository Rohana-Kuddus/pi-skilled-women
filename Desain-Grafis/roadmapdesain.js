function openOffcanvas() {
  var offcanvas = document.getElementById('offcanvasRight');
  var offcanvasBS = new bootstrap.Offcanvas(offcanvas);
  offcanvasBS.show();
}

document.getElementById('sidebarTrigger').addEventListener('click', openOffcanvas);