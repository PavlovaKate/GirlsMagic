const formReg = document.querySelector(".Registration");
const formAuth = document.querySelector(".Authorization");

if (formReg) {
  formReg.addEventListener("submit", async (e) => {
    e.preventDefault();

    const { name, email, city, password } = e.target;

    if (
      name.value.trim() === "" ||
      password.value.trim() === "" ||
      city.value.trim() === "" ||
      email.value.trim() === ""
    ) {
      alert("Заполни все поля");
      return;
    }

    const res = await fetch("/api/auth/registration", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        password: password.value,
        email: email.value,
        city: city.value,
      }),
    });

    const data = await res.json();

    if (data.message === "success") {
      window.location.assign("/");
    }
  });
}

if (formAuth) {
  formAuth.addEventListener("submit", async (e) => {
    e.preventDefault();

    const { email, password } = e.target;

    if (password.value.trim() === "" || email.value.trim() === "") {
      alert("Заполни все поля");
      return;
    }

    const res = await fetch("/api/auth/authorization", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        password: password.value,
        email: email.value,
      }),
    });

    const data = await res.json();

    if (data.message === "success") {
      window.location.assign("/");
    }
  });
}
