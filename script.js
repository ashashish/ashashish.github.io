<script>
(function(s,u,r,f,l,y){s[f]=s[f]||{init:function(){s[f].q=arguments}};
l=u.createElement(r);y=u.getElementsByTagName(r)[0];l.async=1;
l.src='https://surfly.com/surfly.js';y.parentNode.insertBefore(l,y);})
(window,document,'script','Surfly');

var settings = {
    // Surfly session options can be set here, or at the Company/Plan levels.
    widget_key: '9eb008187dca447685c55d80614e1d18',
};

Surfly.init(settings, function(initResult) {
    if (initResult.success) {
        // API calls can now be made!
        if (!Surfly.isInsideSession) {
            Surfly.button();
        }
    }
    else{
        console.log("Surfly was unable to initialize properly.")
    }
});
</script>

<script>
  
// Create the popup element
var popup = document.createElement("div");
popup.id = "popup";
popup.style.position = "fixed";
popup.style.top = "50%";
popup.style.left = "50%";
popup.style.transform = "translate(-50%, -50%)";
popup.style.backgroundColor = "white";
popup.style.padding = "20px";
popup.style.border = "1px solid black";
popup.style.zIndex = "9999"; // Set the z-index to a high value

// Create the title element
var title = document.createElement("h2");
title.textContent = "Terms and Conditions";
popup.appendChild(title);

// Create the button container
var buttonContainer = document.createElement("div");
buttonContainer.style.display = "flex";
buttonContainer.style.justifyContent = "space-between";
popup.appendChild(buttonContainer);

// Create the accept button
var acceptButton = document.createElement("button");
acceptButton.textContent = "Accept";
acceptButton.addEventListener("click", function() {
  // Handle accept action here
  alert("You have accepted the terms and conditions.");
  popup.remove();
});
buttonContainer.appendChild(acceptButton);

// Create the cancel button
var cancelButton = document.createElement("button");
cancelButton.textContent = "Cancel";
cancelButton.addEventListener("click", function() {
  // Handle cancel action here
  alert("You have canceled.");
  popup.remove();
});
buttonContainer.appendChild(cancelButton);

// Append the popup to the document body
document.body.appendChild(popup);
  
  
</script>
