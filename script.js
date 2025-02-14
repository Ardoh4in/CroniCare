const notificationButton = document.getElementById('notification-btn');
const notificationPopup = document.getElementById('notification-popup');

notificationButton.addEventListener('click', function() {
  notificationPopup.style.display = 'block';

  setTimeout(function() {
    notificationPopup.style.display = 'none';
  }, 1200);
}); 

