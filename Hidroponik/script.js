// Function to open sidebar
// function openSidebar() {
//   document.getElementById("sidebar").classList.toggle("active");
// }
function openSidebar() {
  document.getElementById("sidebar").classList.add("active");
  // Cegah event default yang membuat sidebar collapse
  event.stopPropagation();
}

// Function to close sidebar
function closeSidebar() {
  document.getElementById("sidebar").classList.remove("active");
}

// Function to close sidebar when clicking outside the sidebar area
// window.onclick = function(event) {
//   if (!event.target.matches('.openbtn')) {
//     var sidebar = document.getElementById("sidebar");
//     if (sidebar.classList.contains('active')) {
//       sidebar.classList.remove('active');
//     }
//   }
// }

