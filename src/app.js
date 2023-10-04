/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const list = domainNames();
  const names = document.createElement("ul");
  list.forEach(pronouns => {
    console.log(pronouns);
    const item = document.createElement("li");
    item.textContent = pronouns;
    names.appendChild(item);
  });
  document.body.appendChild(names);
  // const domains = domainNames();

  // document.querySelector("#text").innerHTML = ``;
  // //write your code here
  // console.log("Domain Name Generator");
};

function domainNames() {
  let pronouns = ["the", "our"];
  let adjectives = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let extensions = [".com", ".net"];
  let array = [];

  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        for (let z = 0; z < extensions.length; z++) {
          array.push(
            `${pronouns[i]}${adjectives[j]}${nouns[k]}${extensions[z]}`
          );
        }
      }
    }
  }
  return array;
}

domainNames();
