// definim variables
      let txtPlayerObj = document.getElementById("form-name");
      let lblMessageObj = document.getElementById("message");
      let lblNamePlayerObj = document.getElementById("player-name");
      const fechaActual = new Date();
      const dia = fechaActual.getDate();
      const mes = fechaActual.getMonth() + 1;
      const anio = fechaActual.getFullYear();
      let lblDataObj = document.getElementById("player-data");
      lblDataObj.innerText = (`${dia}/${mes}/${anio}`);

      let randomNum = document.getElementById("number");
      let secretNum;

      let jugades = 1;
      let lblJugadesObj = document.getElementById("jugades");

      let contadorGuanyades = 0;
      let lblGuanyadesObj = document.querySelector(".player-highscore");

      // boto jugar
      function jugar() {
        document.getElementById("btn").disabled = true;
        if (txtPlayerObj.value.trim() === "") {
          // no hi ha nom
          alert("Introdueix un nom blyat");
        } else {
          // assignació noves variables si hi ha nom
          document.body.style.backgroundColor = "#222";
          jugades = 0;
          document.querySelector(".player-score").innerText = jugades;

          lblNamePlayerObj.innerText = txtPlayerObj.value;
          lblMessageObj.innerText = "Comencem la partida!";
          randomNum.innerText = "?";
          secretNum = Math.floor(Math.random() * 20) + 1;
          document.getElementById("btn").disabled = false;

          console.log("Número actual " + secretNum);
        }
      }

      // boto provar
      function provar() {
        document.querySelector(".player-score").innerText = jugades;
        const guessInput = document.getElementById("guess");
        const guess = Number(guessInput.value);
        
        if (jugades >= 10) {
          lblMessageObj.innerText = "No tens més jugades";
          randomNum.innerText = secretNum;
          document.body.style.backgroundColor = "#c10000ff";
          return;
        }

        if (guess === secretNum) {
          lblMessageObj.innerText = "L’has encertat!!)))))";
          document.body.style.backgroundColor = "#157b00ff";
          randomNum.innerText = secretNum;
          contadorGuanyades++;
          lblGuanyadesObj.innerText = contadorGuanyades;
          document.getElementById("btn").disabled = true;
        } else {
          jugades++;
          if (guess > secretNum) {
            lblMessageObj.innerText = "El número secret és més petit";
          } else {
            lblMessageObj.innerText = "El número secret és més gran";
          }
        }
      }