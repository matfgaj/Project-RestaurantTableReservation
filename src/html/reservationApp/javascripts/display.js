const displayRestaurant = (reservations, restaurantTables) => {
  let tableToReserv;

  function checkDate() {
    checkInputs();

    restaurantTables.forEach((table) => {
      table.visual.style.borderColor = "rgba(0, 0, 0, 0)";
    });
    console.log(reservations.length);
    // check if there are any reservations
    if (reservations.length === 0) {
      restaurantTables.forEach((table) => {
        table.visual.style.borderColor = "rgb(0, 189, 0)";
      });
      // check if there are reservations that date, and display tables with colors
    } else {
      reservations.forEach((reservation) => {
        if (reservation.date === DateOfReservation.value) {
          document.getElementById(`img${reservation.table}`).style.borderColor =
            "rgb(224, 0, 0)";
        } else {
          document.getElementById(`img${reservation.table}`).style.borderColor =
            "rgb(0, 189, 0)";
        }
      });
    }
    restaurantTables.forEach((table) => {
      console.log(table.visual.style.borderColor);
      if (table.visual.style.borderColor !== "rgb(224, 0, 0)") {
        table.visual.style.borderColor = "rgb(0, 189, 0)";
      }
    });
  }
  DateOfReservation.addEventListener("input", () => {
    table = null;

    HowManyGuest.selectedIndex = 0;
  });

  DateOfReservation.addEventListener("input", checkDate);

  // check if there is enough place for your gests
  HowManyGuest.addEventListener("input", () => {
    if (HowManyGuest.value == 4) {
      table = null;

      checkDate();

      document.getElementById("img8").style.borderColor = "rgb(224, 0, 0)";
      document.getElementById("img9").style.borderColor = "rgb(224, 0, 0)";
      document.getElementById("img10").style.borderColor = "rgb(224, 0, 0)";
    } else if (HowManyGuest.value == 8) {
      table = null;
      checkDate();

      document.getElementById("allAdditional-div").style.display = "block";

      document.getElementById("img1").style.borderColor = "rgb(224, 0, 0)";
      document.getElementById("img2").style.borderColor = "rgb(224, 0, 0)";
      document.getElementById("img3").style.borderColor = "rgb(224, 0, 0)";
      document.getElementById("img4").style.borderColor = "rgb(224, 0, 0)";
      document.getElementById("img5").style.borderColor = "rgb(224, 0, 0)";
      document.getElementById("img6").style.borderColor = "rgb(224, 0, 0)";
      document.getElementById("img7").style.borderColor = "rgb(224, 0, 0)";
    }
  });

  //  pin blue table that we want to choose and return that table after confirm

  restaurantTables.forEach((obj) => {
    obj.visual.addEventListener("click", () => {
      if (!DateOfReservation.value) {
        return alert("Prosimy wybrać datę rezerwacji");
      } else {
        if (obj.visual.style.borderColor == "rgb(0, 189, 0)") {
          restaurantTables.forEach((obj) => {
            if (
              obj.visual.style.borderColor == "rgb(0, 189, 0)" ||
              obj.visual.style.borderColor == "orange"
            ) {
              obj.visual.style.borderColor = "rgb(0, 189, 0)";
            }
          });
          obj.visual.style.borderColor = "orange";
        } else if (obj.visual.style.borderColor == "orange") {
          obj.visual.style.borderColor = "rgb(0, 189, 0)";
        }
        checkInputs();
      }
    });
  });
};
