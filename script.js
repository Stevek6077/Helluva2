function sendScheduleEmail(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;
  const eventType = document.getElementById("eventType").value;
  const details = document.getElementById("details").value;

  const subject = encodeURIComponent("Event Scheduling Request");
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nDate: ${date}\nEvent Type: ${eventType}\nDetails: ${details}`);

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=hellofajobkaraoke@gmail.com&su=${subject}&body=${body}`;
  const defaultMailLink = `mailto:hellofajobkaraoke@gmail.com?subject=${subject}&body=${body}`;

  const userChoice = confirm("Click OK to use Gmail or Cancel to use your default email app.");
  const mailtoLink = userChoice ? gmailLink : defaultMailLink;

  window.open(mailtoLink, '_blank');
}

function sendContactEmail(event) {
  event.preventDefault();
  const contactName = document.getElementById("contactName").value;
  const contactEmail = document.getElementById("contactEmail").value;
  const contactMessage = document.getElementById("contactMessage").value;

  const subject = encodeURIComponent("Contact Inquiry");
  const body = encodeURIComponent(`Name: ${contactName}\nEmail: ${contactEmail}\nMessage: ${contactMessage}`);

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=hellofajobkaraoke@gmail.com&su=${subject}&body=${body}`;
  const defaultMailLink = `mailto:hellofajobkaraoke@gmail.com?subject=${subject}&body=${body}`;

  const userChoice = confirm("Click OK to use Gmail or Cancel to use your default email app.");
  const mailtoLink = userChoice ? gmailLink : defaultMailLink;

  window.open(mailtoLink, '_blank');
}

<!-- .github/workflows/pages.yml -->
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Setup Pages
        uses: actions/configure-pages@v3

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: .

      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v2
