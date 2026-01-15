const apiUrl = 'https://u83asanvo3.execute-api.us-east-1.amazonaws.com/prod/feedback';

const form = document.getElementById('feedbackForm');
const statusDiv = document.getElementById('status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  statusDiv.textContent = 'Sending...';

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

    statusDiv.textContent = 'Thank you! Your feedback was submitted.';
    form.reset();
  } catch (err) {
    statusDiv.textContent = 'Something went wrong. Please try again later.';
  }
});
