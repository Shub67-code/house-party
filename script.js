const form = document.querySelector('#rsvp-form');
const note = document.querySelector('#form-note');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = form.querySelector('input[type="text"]').value.trim();
  note.textContent = `You're on the list, ${name}. See you after dark.`;
  form.reset();
});
