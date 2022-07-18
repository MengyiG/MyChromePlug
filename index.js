let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  renderLeads();
  //  remove input value every time after user inputs
  inputEl.value = "";
  console.log(myLeads);
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    // create HTML element with JS
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";

    // const li = document.createElement("li");
    // li.textContent = myLeads[i];
    // ulEl.append(li);

    // or to render them altogether since manipulation DOM costs..
    // listItems +=
    //   "<li><a target='_blank' href='" +
    //   myLeads[i] +
    //   "'>" +
    //   myLeads[i] +
    //   "</li>";

    listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
            ${myLeads[i]}
            </a>
        </li>`;

    // fdsafsdafsadf

    console.log(listItems);
  }
  ulEl.innerHTML = listItems;
}
