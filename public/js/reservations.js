const reservationFormHandler = async (event) => {
  event.preventDefault();

  const guests = document.querySelector('#guests').value.trim();
  const time = document.querySelector('#time').value.trim();
  const date = document.querySelector('#date').value.trim();
  console.log(guests, time, date)

  if (guests && time && date) {
    const response = await fetch('/api/reservations', {
      method: 'POST',
      body: JSON.stringify({ guests, time, date }),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(response);
    if (response.ok) {
      alert('Reservation successful');
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

document
  .querySelector('#submit')
  .addEventListener('click', reservationFormHandler);