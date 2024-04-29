// Description: This script is used to submit the form data to the server using AJAX and show a modal on successful submission.

document.getElementById('submissionForm').onsubmit = function (event) {
   event.preventDefault(); // Prevent form from submitting normally
   var formData = new FormData(this); // Capture form data

   // AJAX request to the GetForm endpoint
   fetch(this.action, {
      method: 'POST',
      body: formData,
   })
      .then(response => {
         // Show the modal on successful submission
         document.getElementById('thankYouModal').style.display = 'block';
      })
      .catch(error => console.error('Error:', error));

   // Function to close the modal
   window.closeModal = function () {
      document.getElementById('thankYouModal').style.display = 'none';
   }
};