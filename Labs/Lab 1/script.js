document.addEventListener("DOMContentLoaded", function () {
    // Get user location
    let location = "Halifax"; // You can modify this to prompt the user or get it dynamically

    // Check if the person is in Halifax
    if (location.toLowerCase() === "halifax") {
        displayOutput("You are in Halifax. The airport is Halifax Stanfield International Airport (YHZ), airport number YHZ.");
    } else {
        // Prompt for details if not in Halifax
        let userLocation = prompt("Where are you located?");
        let destination = prompt("Where are you going?");
        
        displayOutput(`You are in ${userLocation} and you are going to ${destination}.`);
    }

    // Function to display output in the themed div
    function displayOutput(message) {
        let outputContainer = document.getElementById("outputContainer");
        outputContainer.innerHTML = `
            <div class="w3-container w3-card w3-margin-top">
                <p class="w3-large"><i class="fas fa-plane-departure"></i> ${message}</p>
            </div>
        `;

        // Log the message to console
        console.log(message);
    }
});
