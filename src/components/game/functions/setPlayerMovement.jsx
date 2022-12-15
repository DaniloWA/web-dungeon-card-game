    
    export const setPlayerMovement = () => {
      window.addEventListener("keydown", (event)=> {
      if (event.key === "ArrowUp") {
        event.preventDefault();
        console.log(event)
      }
      if (event.key === "ArrowDown") {
        event.preventDefault();
        console.log(event)
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        console.log(event)
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        console.log(event)
      }
    });

    };
