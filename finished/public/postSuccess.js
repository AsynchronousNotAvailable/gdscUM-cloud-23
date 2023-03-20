window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  const loader = document.getElementById("loader");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    loader.style.display = "block";
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    })
      .then(() => {
        alert("Success!");
      })
      .finally(() => {
        loader.style.display = "none";
      });
  });
});
