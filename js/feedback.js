const apiUrl = 'https://u83asanvo3.execute-api.us-east-1.amazonaws.com/prod/feedback';

const form = document.getElementById('feedbackForm');
const statusDiv = document.getElementById('status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Loading state
  statusDiv.textContent = 'Sending...';
  statusDiv.style.color = 'gray';
  statusDiv.classList.add('show');

  const payload = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  try {
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error('Request failed');

    // Success message
    statusDiv.textContent = 'Thank you! Your feedback was submitted.';
    statusDiv.style.color = 'green';
    form.reset();

    // Optional fade-out after 4 seconds
    setTimeout(() => {
      statusDiv.classList.remove('show');
    }, 4000);

  } catch (err) {
    // Error message
    statusDiv.textContent = 'Something went wrong. Please try again later.';
    statusDiv.style.color = 'red';
  }
});
