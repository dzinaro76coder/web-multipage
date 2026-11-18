const toggleButton = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");

// Apply background based on title content

const title = document.title.trim();

if (title === "Dashboard") {
  document.body.style.backgroundColor = "#7479f870";
} else if (title === "Calendar") {
  document.body.style.backgroundColor = "#4d96f579";
} else {
  document.body.style.backgroundColor = "#0e99f546";
}

function toggleSidebar() {
  sidebar.classList.toggle("close");
  toggleButton.classList.toggle("rotate");

  /*  Array.from (sidebar.getElementsByClassName("show")).forEach(ul=> {
        ul.classList.remove("show");
        ul.previousElementSibling.classList.remove("rotate");
    });*/
  closeAllSubMenus();
}

function toggleSubMenu(button) {
  if (!button.nextElementSibling.classList.contains("show")) {
    closeAllSubMenus();
  }

  button.nextElementSibling.classList.toggle("show");
  button.classList.toggle("rotate");

  if (sidebar.classList.contains("close")) {
    sidebar.classList.toggle("close");
    toggleButton.classList.toggle("rotate");
  }
}
function closeAllSubMenus() {
  Array.from(sidebar.getElementsByClassName("show")).forEach((ul) => {
    ul.classList.remove("show");
    ul.previousElementSibling.classList.remove("rotate");
  });
}
