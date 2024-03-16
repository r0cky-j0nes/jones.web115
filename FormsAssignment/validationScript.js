    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value
      var inputField = document.getElementById("inputField");

      var form = document.getElementById("myForm");
      form.addEventListener("submit", function(event) {
        let inputField = document.getElementById('inputField').value;

        if (inputField === '') {
          alert('Input is required!');
          event.preventDefault(); // Prevent form from submitting
        }
      });

      var form = document.getElementById("yourFormId"); // Replace with your actual form id
    form.addEventListener("submit", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Validate the input value using a regular expression
        var inputValue = inputField.value;
        if (validateAlphanumeric(inputValue)) {
            // The input is valid, display a confirmation and submit the form
            if (confirm("Input is valid. Do you want to submit the form?")) {
                // User confirmed, submit the form programmatically
                form.submit();
            } else {
                // User canceled the confirmation
                console.log("Form submission canceled.");
            }
        } else {
            // The input is not valid, show an error message or take other actions
            console.error("Invalid input. Please enter alphanumeric characters only.");
        }
        
      
    
    });



        // Valid input: display confirmation and submit the form

        // Invalid input: display error message