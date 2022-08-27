

const init = () => {
    const inputForm = document.querySelector("form");
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault();
      let input = event.target.querySelector("input").value;
      console.log(input);
      fetch("http://localhost:3000/movies")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // LOG: (3) [{…}, {…}, {…}]
        });
    });
  };
  
  document.addEventListener("DOMContentLoaded", init);