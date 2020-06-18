function UserFetch() {
  const myRequest = new Request("Users.json");
  let usersLogin = [];

  fetch(myRequest)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.Users.forEach((element) => {
        usersLogin.push(element);
      });

      let inputMail = document.getElementById("input-mail").value;
      let inputPassword = document.getElementById("input-password").value;

      let isMailEqual = null;
      let isPasswordEqual = null;
      let no = false;

      usersLogin.forEach((user) => {
        isMailEqual = null;
        isPasswordEqual = null;

        user.mail == inputMail ? (isMailEqual = true) : (isMailEqual = false);

        user.password == inputPassword
          ? (isPasswordEqual = true)
          : (isPasswordEqual = false);
        user.password == inputPassword;

        if (isMailEqual && isPasswordEqual) {
          no = false;
          window.location.replace(
            `https://matfgaj.github.io/Project-RestaurantTableReservation/src/html/reservationApp/resrvation.html?${user.firstName}|${user.phoneNumber}`
          );
        } else {
          no = true;
        }
      });
      if (no) {
        alert("niepoprawne dane");
      }
    });
}
