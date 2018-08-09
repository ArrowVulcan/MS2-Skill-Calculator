"use strict";
/**
 * I have no clue how to edit your html/css in a way that doesn't break the window.
 * @author Howard
 */
let skillBuilds;

window.onload = function () {
  // Enable tooltips
  $("[data-toggle=tooltip").tooltip();
  // Instantiate skillBuilds from localStorage if it exists.
  skillBuilds = localStorage.getItem("ms2skillcalculator");
  if (!skillBuilds) {
    skillBuilds = [];
  }
  // Prevent form submission and save the skillBuild
  document.getElementById("saveSkillBuild").addEventListener("submit", (event) => {
    event.preventDefault();
    saveSkillBuild();
  });
};

// Listen for the Esc key input while focus is on the input field
$('input[type=text]').keyup(function(e) {
  if (e.keyCode === 27) { // 27 is the key code for Esc
    $(this).blur();
    hideInputField();
  }
});

function showInputField() {
  document.getElementById("buildNameInput").style.display = "block";
}

function hideInputField() {
  document.getElementById("buildNameInput").style.display = "none";
}

/**
 * If buildName is taken, overwrite existing build, else add it and save
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
 * Visits the url saved in skillBuilds
 * @param {String} buildName The name of the build that the user previously saved
 */
function loadSkillBuild(buildName) {
  let url = skillBuilds.find(skillBuild => {
    return (skillBuild[0] == buildName) ? true : false;
  });
  location.assign(url[1]);
}

/**
 * @returns An Array of build names the user has saved.
 */
function getSkillBuilds() {
  // Display dropdown menu with builds the user has saved
  let buildNames = skillBuilds.map(skillBuild => {
    return skillBuild[0];
  });
  return buildNames;
}

/**
 * Deletes all skillBuilds with the name, {@param buildName}, then saves.
 * @param {String} buildName The name of the build that the user deletes
 */
function deleteSkillBuild(buildName) {
  skillBuilds = skillBuilds.filter(skillBuild => {
    return (skillBuild[0] != buildName) ? true : false;
  });
  localStorage.setItem("ms2skillcalculator", JSON.stringify(skillBuilds));
}