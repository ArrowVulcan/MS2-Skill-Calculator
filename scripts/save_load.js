/**
 * @author Howard
 */
let skillBuilds;

/**
 * Instantiate skillBuilds from localStorage if it exists.
 */
window.onload = function () {
  skillBuilds = localStorage.getItem("ms2skillcalculator");
  if (!skillBuilds) {
    skillBuilds = [];
  }
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
  (nameTaken) ? skillBuilds.splice(0, 1, skillBuild) : skillBuilds.push(skillBuild);
  localStorage.setItem("ms2skillcalculator", JSON.stringify(skillBuilds));
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