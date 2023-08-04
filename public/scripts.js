const url = "https://api-dishes.vercel.app";
function loadAuthores() {
  return new Promise((resolve, reject) => {
    fetch("https://api-dishes.vercel.app/")
      .then((resp) => resp.json())
      .then((resp) => resolve(resp))
      .catch((err) => reject(err));
  });
}

function loadDishes(id) {
  console.log(id);
  if (id != "") {
    return new Promise((resolve, reject) => {
      fetch(url + "/" + id)
        .then((resp) => resp.json())
        .then((resp) => resolve(resp))
        .catch((err) => reject(err));
    });
  } else {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((resp) => resp.json())
        .then((resp) => resolve(resp))
        .catch((err) => reject(err));
    });
  }
}

const fillData = function () {
  const id = document.getElementById("id").value;
  console.log(id);

  loadDishes(id).then((resp) => {
    if (resp.state) {
      console.log(resp.data);
      const dish = resp.data;
      document.getElementById("atributos").style.display = "block";
      document.getElementById("objectId").value = dish._id;
      document.getElementById("idDish").value = dish.idDish;
      document.getElementById("name").value = dish.name;
      document.getElementById("calories").value = dish.calories;
      document.getElementById("isVegetarian").value = dish.isVegetarian;
      document.getElementById("value").value = dish.value;
      document.getElementById("comments").value = dish.comments;
    } else {
      console.log("error" + resp.state);
    }
  });
};

const loadData = () => {
  const id = document.getElementById("idDish").value;
  const name = document.getElementById("nameDish").value;
  const calories = document.getElementById("caloriesDish").value;
  const vegetarian = document.getElementById("vegetarianDish").value;
  const value = document.getElementById("valueDish").value;
  const comments = document.getElementById("commentsDish").value;

  const data = {
    idDish: id,
    name: name,
    calories: calories,
    isVegetarian: vegetarian,
    value: value,
    comments: comments,
  };

  return JSON.stringify(data);
};

function sendData() {
  const body = loadData();

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  })
    .then((resp) => {
      if (resp.status != 208) {
        return resp.json();
      } else {
        return false;
      }
    })
    .then((resp) => {
      console.log();
      if (resp.state) {
        alert("Dish add");
        location.href = "/";
      } else if (!resp.state) {
        alert("Error to add");
      }
    })
    .catch((err) => {
      alert(`Error ${err}`);
    });
}
