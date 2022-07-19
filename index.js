let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
// get the leads from localstorage and store it
const leadsFromLocal = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn");

// get the data if it exists in localstorage
if (leadsFromLocal) {
  myLeads = leadsFromLocal;
  render(myLeads);
}

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // save to local storage
    // add to array and render
    // since only one tab should be active and in the current window
    // the return variable should only have one entry
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
    render(myLeads);
  });
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    // create HTML element with JS
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";

    // if this is just a list string as a link but link target
    // does not specified
    // listItems += "<li><a href='#'>"+ myLeads[i] + "</a></li>"

    // if the link targe is specified
    // listItems += "<li><a href='
    // " + myLeads[i] + "
    // '>"+ myLeads[i] + "</a></li>"

    // const li = document.createElement("li");
    // li.textContent = myLeads[i];
    // ulEl.append(li);

    // or to render them altogether since manipulation DOM costs..
    // listItems +=
    //  "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] +
    //  "</li>";

    // let's save the trouble to make single and double quotes by template tag
    listItems += `
        <li>&nbsp;
            <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
            </a>
        </li>`;
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("click", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  // remove input value every time after user inputs
  inputEl.value = "";
  // save value to local storage
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});
