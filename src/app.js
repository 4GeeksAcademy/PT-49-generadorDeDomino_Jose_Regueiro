/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "my"];
  let adj = ["great", "big", "happy"];
  let noun = ["jogger", "racoon", "chigüire"];
  let dom = [".com", ".es", ".edu"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < dom.length; l++) {
          let domainNewName = "www." + pronoun[i] + adj[j] + noun[k] + dom[l];
          console.log(domainNewName);
        }
      }
    }
  }
};
