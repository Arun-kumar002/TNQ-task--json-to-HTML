"use strict";
//?selector section
let input = document.querySelector("#input");
let output = document.querySelector("#output");
let generate = document.querySelector("#generate");
//!event listeners starts here
generate.addEventListener("click", (e) => {
  generate.style.boxShadow='none' //id, username, video_name, action
  let Inpvalue;
  let dublicate = [];
  let xml;
  //!checking the data is valid json or not
  try {
    Inpvalue = JSON.parse(input.value);
  } catch (error) {
    alert("entered data is not a valid json");
  } //!xml logic start here
  if (Inpvalue) {
    xml = Inpvalue.map((obj, i, arr) => {
      dublicate.push(obj.id);
      let { id, username, video_name, action } = obj;
      return `<div class="root" data-id=${id}>
            <span class="username">${username}</span>
            <span class="video_name">${video_name}</span>
            <span class="additional_details">
              <span class="type">${action}</span>
            </span>
          </div>
          `;
    });
  }
  let set = new Set(dublicate);
  if (dublicate.length != set.size) {
    alert("the json has some dublicates");
  } else {
    output.innerHTML = xml;
  }
});
//!event listeners ends here
