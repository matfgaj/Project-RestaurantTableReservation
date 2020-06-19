const DateOfReservation = document.getElementById("form-date");
const HowManyGuest = document.getElementById("form-howMany");
const allAdditional = document.getElementById("allAdditional");
const confirmButton = document.querySelector(".confirm-reservation");

const restaurantTables = [
  { id: 1, visual: document.getElementById(`img1`) },
  { id: 2, visual: document.getElementById("img2") },
  { id: 3, visual: document.getElementById("img3") },
  { id: 4, visual: document.getElementById("img4") },
  { id: 5, visual: document.getElementById("img5") },
  { id: 6, visual: document.getElementById("img6") },
  { id: 7, visual: document.getElementById("img7") },
  { id: 8, visual: document.getElementById("img8") },
  { id: 9, visual: document.getElementById("img9") },
  { id: 10, visual: document.getElementById("img10") },
];

let reservations = [
  {
    additionals: "0",
    date: "2020-06-11",
    name: "John",
    phone: "585959544",
    table: "6",
  },
  {
    additionals: "0",
    date: "2020-06-24",
    name: "John",
    phone: "585959544",
    table: "10",
  },
];

const checkInputs = () => {
  if (DateOfReservation.value && table !== null && table !== "") {
    confirmButton.addEventListener("click", addReservation);
    confirmButton.style.borderColor = "orange";
    confirmButton.style.pointerEvents = "auto";
        confirmButton.style.cursor = "pointer";
  } else if (table == null) {
    confirmButton.style.borderColor = "rgba(255, 255, 255, 0)";
    confirmButton.removeEventListener("click", addReservation);
    confirmButton.style.pointerEvents = "none";
  } else if (!DateOfReservation.value) {
    confirmButton.style.borderColor = "rgba(255, 255, 255, 0)";
    confirmButton.style.pointerEvents = "none";
    confirmButton.style.cursor = "none";


    alert("Prosimy wybrać datę rezerwacji");
  }
};

const getUserName = () => {
  const queryString = location.search.substring(1);
  const userData = queryString.split("|");
  const userName = userData[0];
  return userName;
};

const getUserPhoneNumber = () => {
  const queryString = location.search.substring(1);
  const userData = queryString.split("|");
  const userPhoneNumber = userData[1];
  return userPhoneNumber;
};
let table = "";

restaurantTables.forEach(function (element) {
  element.visual.addEventListener("click", function getTable() {
    let known = event.target;
    if (known.style.borderColor == "rgb(0, 189, 0)") {
      console.log("ołjea");
      return (table = known.dataset.table);
    } else if (known.style.borderColor == "orange") {
      console.log("wyzerowane");
      return (table = null);
    }
  });
});

const redirect = () => {
  window.location.replace(`/index.html`);
};

const addReservation = () => {
  event.preventDefault();
  const obj = new Reservation(
    DateOfReservation.value,
    getUserName(),
    getUserPhoneNumber(),
    table,
    allAdditional.value
  );
  reservations.push(obj);

  const infoPage = () => {
    document.querySelector(".summary").style.display = "block";
    const newReserv = reservations[reservations.length - 1];
    document.querySelector(".date span").innerText = `${newReserv.date}`;
    console.log(newReserv);

    document.querySelector(".name span").innerText = `${newReserv.name}`;
    document.querySelector(".phone span").innerText = `${newReserv.phone}`;
    document.querySelector(".table span").innerText = `${newReserv.table}`;
    document.querySelector(
      ".additionals span"
    ).innerText = `${newReserv.additionals}`;
    if (document.querySelector(".more1").checked == true) {
      document.querySelector(
        ".more1span"
      ).innerText = ` Stolik do karmienia dziecka`;
    }
    if (document.querySelector(".more2").checked == true) {
      document.querySelector(
        ".more2span"
      ).innerText = ` Miska z wodą dla pupila`;
    }
    setTimeout(redirect, 5000);
  };

  infoPage();
};

displayRestaurant(reservations, restaurantTables);
