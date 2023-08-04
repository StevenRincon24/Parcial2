function loadAuthores() {
  return new Promise((resolve, reject) => {
    fetch("https://api-dishes.vercel.app/")
      .then((resp) => resp.json())
      .then((resp) => resolve(resp))
      .catch((err) => reject(err));
  });
}

const loadValues = () => {
  const id = document.getElementById("id").value;
  console.log(id);

  const name = document.getElementById("name").value;

  const calories = document.getElementById("calories").value;

  const vegetarian = document.getElementById("vegetarian").value;

  const value = document.getElementById("value").value;

  const comment = document.getElementById("comment").value;
  const data = {
    idDish: id,
    name: name,
    calories: calories,
    isVegetarian: vegetarian,
    value: value,
    comments: comment,
  };

  return JSON.stringify(data);
};
function sendDish() {
  const data = loadValues();
  console.log(data);
  const URL = "https://api-dishes.vercel.app";
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => {
      console.log(resp);
      if (resp.status == 200) {
        return resp.json();
      } else {
        throw new Error(
          "Error en la solicitud. Por favor, intenta nuevamente."
        );
      }
    })
    .then((data) => {
      if (state) {
        alert("Plato creado exitosamente. ID del plato: " + data.data.idDish);
      } else {
        alert("El plato ya existe.");
      }
    })
    .catch((err) => alert(err.message));
}
