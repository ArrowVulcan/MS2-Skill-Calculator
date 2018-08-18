"use strict";
/**
 * skillBuilds is a 2d array containing name:url pairs. Each name is provided by the user through
 * a simple form on the page. This info is saved and retrieved from localStorage as JSON.
 */
let skillBuilds;

window.onload = function () {
  // Enable tooltips
  $("[data-toggle=tooltip").tooltip();
  // Instantiate skillBuilds from localStorage if it exists.
  skillBuilds = JSON.parse(localStorage.getItem("ms2skillcalculator"));
  if (!skillBuilds) {
    skillBuilds = [];
  }
  // When user hits Enter to submit the form, prevent default form submission and save the build
  document.getElementById("saveSkillBuild").addEventListener("submit", (event) => {
    event.preventDefault();
    saveSkillBuild();
  });
};

// Listen for the Esc key input while focus is on the input field
$("input[type=text]").keyup(function(event) {
  if (event.keyCode === 27) { // 27 is the key code for Esc
    hideInputField();
  }
});

/**
 * These two functions swaps between the save button and input field.
 */
function showInputField() {
  document.getElementById("buildNameInput").style.display = "block";
  document.getElementById("saveLabel").classList.remove("saveBuild");
  document.getElementById("saveLabel").style.display = "none";
}

function hideInputField() {
  document.getElementById("buildNameInput").style.display = "none";
  document.getElementById("saveLabel").style.display = "block";
}

/**
 * If buildName is taken, overwrite existing build, else add it to localStorage and save.
 * Called when the user saves by submitting the form using Enter.
 */
function saveSkillBuild() {
  let buildName = document.getElementById("buildNameInput").value;
  let skillBuild = [buildName, location.href];
  let nameTaken = skillBuilds.find(skillBuild => {
    return skillBuild[0] == buildName;
  });
  if (nameTaken) {
    skillBuilds.splice(skillBuilds.indexOf(nameTaken), 1, skillBuild);
  } else {
    skillBuilds.push(skillBuild);
  }
  localStorage.setItem("ms2skillcalculator", JSON.stringify(skillBuilds));
  hideInputField();
  document.getElementById("saveLabel")
  document.getElementById("saveLabel").classList.add("saveBuild");
}

/**
 * Builds an html list of menu items that link to your saved builds.
 * Called when clicking the Load Build Button to populate the dropup menu.
 */
function buildMenu() {
  let loadMenu = document.getElementById("loadMenu");
  // Remove everything from node
  while (loadMenu.firstChild) {
    loadMenu.removeChild(loadMenu.firstChild);
  }
  // Add skillBuilds to node
  Array.prototype.forEach.call(skillBuilds, skillBuild => {
    let menuItem = document.createElement("a");
    menuItem.classList.add("dropdown-item");
    menuItem.innerText = skillBuild[0];
    // Left click to open skillBuild url in new tab
    menuItem.setAttribute("onclick", "window.open('" + skillBuild[1] + "')");
    // Right click to delete the skillBuild. Below is a wrapper function to avoid calling delete immediately
    menuItem.addEventListener("contextmenu", function() { deleteSkillBuild(event, skillBuild[0]) });
    loadMenu.appendChild(menuItem);
  });
}

/**
 * Deletes all skillBuilds with the name, {@param buildName}, then saves.
 * Called when right clicking on a build name in the Load Build dropup-menu.
 * @param {event} event Prevents the context menu from appearing when right clicking
 * @param {String} buildName The name of the build that the user deletes
 */
function deleteSkillBuild(event, buildName) {
  event.preventDefault();
  skillBuilds = skillBuilds.filter(skillBuild => {
    return (skillBuild[0] != buildName) ? true : false;
  });
  buildMenu();
  $("#loadBuildButton").dropdown("update");
  localStorage.setItem("ms2skillcalculator", JSON.stringify(skillBuilds));
}
