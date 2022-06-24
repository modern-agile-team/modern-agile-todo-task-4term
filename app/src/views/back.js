const id = document.querySelector("#id");

function todo() {
  const req = {
    id: id.value,
  };

  fetch("/index", {
    method: "POST",
    headers: {
      "Content-Type": "app;ication/json",
    },
    body: JSON.stringify(req),
  });
}
