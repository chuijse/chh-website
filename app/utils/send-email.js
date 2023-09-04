export async function sendEmail(data) {
  const apiEndpoint = "/api/email";
  console.log(JSON.stringify(data));

  await fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}
