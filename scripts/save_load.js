"use strict";

let skillBuilds;

window.onload = function () {
  // Enable tooltips
  $("[data-toggle=tooltip").tooltip();
  // Instantiate skillBuilds from localStorage if it exists.
  skillBuilds = JSON.parse(localStorage.getItem("ms2skillcalculator"));
  if (!skillBuilds) {
    skillBuilds = [];
  }
  // When user hits Enter to submit form, prevent the form submission and save the skillBuild
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
 * These two functions swaps between the save button and input fields
 */
function showInputField() {
  document.getElementsByClassName("vertical-align")[0].style.display = "none";
  document.getElementById("buildNameInput").style.display = "block";
}

function hideInputField() {
  document.getElementsByClassName("vertical-align")[0].style.display = "inherit";
  document.getElementById("buildNameInput").style.display = "none";
}

/**
 * If buildName is taken, overwrite existing build, else add it to localStorage and save
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
}

/**
 * Builds an html list of menu items that link to your saved builds
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
 * @param {event} event Prevents the context menu from appearing when right clicking
 * @param {String} buildName The name of the build that the user deletes
 */
function deleteSkillBuild(event, buildName) {
  event.preventDefault();
  skillBuilds = skillBuilds.filter(skillBuild => {
    return (skillBuild[0] != buildName) ? true : false;
  });
  buildMenu();
  document.getElementById("loadBuildButton").dropdown('toggle');
  localStorage.setItem("ms2skillcalculator", JSON.stringify(skillBuilds));
}
