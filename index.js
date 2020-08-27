document.addEventListener("DOMContentLoaded", function(){
  const container = document.querySelector("#moves-container")
  
  // ADD CODE HERE!
  
  // first I need to put a keypress/keydown listener on the document itself
  // if the target is up/down/left/right then add the text to the ul
  const keyHandler = () => {
    document.addEventListener('keydown', e => {
      
      
      if (e.key === "ArrowLeft") {
        renderDirection("left")
      } else if (e.key === "ArrowUp") {
        renderDirection("up")
      } else if (e.key === "ArrowRight") {
        renderDirection("right")
      } else if (e.key === "ArrowDown") {
        renderDirection("down")
      } else if (e.key === "Backspace") {
        container.lastChild.remove()
      }
    })
  }
  
  const renderDirection = direction => {
    const li = document.createElement('li')
    li.textContent = direction
    container.append(li)
  }

  // we are provided with a 'move' button
  // let's add a 'click' listener to the button
  // on click, the robot will move according to the first move on the list

  const clickHandler = () => {
    const moveButton = document.querySelector("#move-button")

    moveButton.addEventListener("click", e => {
      const li = document.querySelector('li')
      if (li) {
        const direction = li.textContent
      move(direction)
      li.remove()
      } else {
        alert("No more commands idiot!")
      }
    })
  }
  
  createGrid()
  renderBot(currentPosition)
  keyHandler()
  clickHandler()
})
