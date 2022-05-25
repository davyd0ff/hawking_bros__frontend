const loadBtnPlaceholder = document.querySelector(".js-load-jsonplaceholder");
const resultsContainerPlaceholder = document.querySelector(".js-results");

const renderAddress = ({ street, suite, city, zipcode }) =>
  `<div>
    <p class='block-header'>Address:</p>
    <p> Street: <span>${street}</span>
    <p> Suite: <span>${suite}</span>
    <p> City: <span>${city}</span>
    <p> Zipcode: <span>${zipcode}</span>
  </div>`;

const renderCompany = ({ name, catchPhrase, bs }) =>
  `<div>
    <p class='block-header'>Company:</p>
    <p> Name: <span>${name}</span>
    <p> CatchPhrase: <span>${catchPhrase}</span>
    <p> bs: <span>${bs}</span>
  </div>`;

const renderUser = (user) =>
  `<div class="response-container">
    <p> Name: <span>${user.name}</span><p>
    <p> Username: <span>${user.username}</span><p>
    <p> Email: <span>${user.email}</span><p>
    <p> Phone: <span>${user.phone}</span><p>
    <p> Website: <span>${user.website}</span><p>
    ${renderAddress(user.address)}
    ${renderCompany(user.company)}
  </div>`;

loadBtnPlaceholder.addEventListener("click", (event) => {
  event.preventDefault();

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data)
    .then((users) => {
      resultsContainerPlaceholder.innerHTML = users
        .map((u) => renderUser(u))
        .join("<hr />");
    });
});
