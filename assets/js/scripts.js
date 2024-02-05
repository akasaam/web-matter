document
  .getElementById("resume-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const jobPostSelect = document.getElementById("job_post");
    const jobPost = jobPostSelect.options[jobPostSelect.selectedIndex].value;

    // Display a thank you message
    const messageContainer = document.createElement("div");
    messageContainer.innerHTML = `
    <p>Hi ${name},</p>
    <p>Thank you for submitting your resume for the ${jobPost} position.
    We will review your application and get back to you as soon as possible.</p>
    <p>Best regards,<br>The Recruitment Team</p>
    `;

    messageContainer.style.cssText = "margin: 20px auto; max-width: 600px;";
    messageContainer.style.backgroundColor = "#fff";
    messageContainer.style.padding = "30px";
    messageContainer.style.borderRadius = "4px";
    messageContainer.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    messageContainer.style.animation = "fadeIn 0.5s ease-out";

    this.parentNode.insertBefore(messageContainer, this.nextSibling);

    // Clear the form
    this.reset();

    // Send the form data to the server
    fetch("submit-resume.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle the response from the server if needed
      })
      .catch((error) => {
        console.error(error);
        // Handle errors if needed
      });
  });
