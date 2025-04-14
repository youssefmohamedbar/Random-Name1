let names = [];

function addName() {
  const newName = document.getElementById("nameInput").value.trim();
  if (newName != "") names.push(newName);
  document.getElementById("nameInput").value = "";
}

function selectRandomName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  document.getElementById("selectedName").innerHTML = names[randomIndex];
  if (names.length === 0) {
    document.getElementById("noName").innerHTML =
      "You didn't add any names yet!!";
  }
}
