    // Get the current date
    let date = new Date();

    // Format the date as "Sat, Mar 01 2025"
    let options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
    let formattedDate = date.toLocaleDateString('en-US', options).replace(',', '');

    // Display in the HTML
    document.getElementById("formattedDate").textContent = formattedDate;

    // function myFunction() {
    //     prompt("Please enter your name", "Harry Potter");
    //     document.getElementById("myBtn-1").disabled=true;
       
    //     document.getElementById("myBtn-1").style.backgroundColor = "lightblue";
       

    //   }

    function myFunction(button) {
        alert("Board updated successfully");
        button.disabled = true; // Disable the clicked button
        button.style.backgroundColor = "lightblue"; // Change its color

        // Get the current number from h2 and decrease it
        let digitElement = document.getElementById("digit-1");
        let currentValue = parseInt(digitElement.textContent);
        
        if (currentValue > 0) {
            digitElement.textContent = currentValue - 1;
            
            // If after decrementing the value becomes 0, show the congratulatory alert
            if (currentValue - 1 === 0) {
                alert("Congrats!!! You have completed all the current tasks");
            }
        }
        
        // Get the current number from h2 and decrease it
        let figureElement = document.getElementById("digit-2");
        let currentFigValue = parseInt(figureElement.textContent);
        
        figureElement.textContent = currentFigValue +1;


          // Get the button ID and extract the number
     let btnId = button.id.split('-')[1];
    
     // Get the corresponding task heading
     let taskTitle = document.getElementById(`head-${btnId}`).innerText;
     
     // Get the current time
     let currentTime = new Date().toLocaleTimeString();
     
     // Create a new <p> element
     let newParagraph = document.createElement("p");
     newParagraph.className = "bg-[#F4F7FF] p-2 m-2 rounded-lg";
     newParagraph.innerHTML = `You have Complete The Task <b>${taskTitle}</b> at ${currentTime}.`;
     
     // Append the new paragraph inside the div containing completed tasks
     document.getElementById("history").appendChild(newParagraph);

    }
    if(currentValue == 0){
        alert("Congrates!!! You have completed all the current task");}
    function clearHistory() {
        document.getElementById("history").innerHTML = "";
    }


    function changeBackgroundColor() {
        // Generate random color
        let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        
        // Apply the color to the body background
        document.getElementById("fullBody").style.backgroundColor = randomColor;
    }