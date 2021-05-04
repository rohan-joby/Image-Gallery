function handleClick() {
  this.classList.toggle("selected");
}

function handleTransition(e){
    if(e.propertyName === "flex-grow"){
        this.classList.toggle("active");
    }
}

const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => panel.addEventListener("click", handleClick));
panels.forEach((panel) => panel.addEventListener("transitionstart", handleTransition));

