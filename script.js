const popup = document.getElementById("popup");

document.getElementById("registerBtn").onclick = () => {
  popup.style.display = "block";
};

function closePopup() {
  popup.style.display = "none";
}

let teams = JSON.parse(localStorage.getItem("teams") || "[]");

function saveTeam() {
  const team = document.getElementById("team").value;
  const insta = document.getElementById("insta").value;

  if (!team || !insta) {
    alert("Fill all fields");
    return;
  }

  teams.push(team + " (" + insta + ")");
  localStorage.setItem("teams", JSON.stringify(teams));

  alert("Registered Successfully!");
  document.getElementById("team").value = "";
  document.getElementById("insta").value = "";
}

function generateBracket() {
  const bracket = document.getElementById("bracket");
  bracket.innerHTML = "";

  for (let i = 0; i < teams.length; i += 2) {
    const a = teams[i] || "TBD";
    const b = teams[i + 1] || "TBD";
    bracket.innerHTML += `<p>${a} VS ${b}</p>`;
  }
}
