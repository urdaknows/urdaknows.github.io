
function isMobile() {
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function close() {
  document.getElementById('alert').style.display = 'none';
}

if (isMobile()) {
  alert('This site is not optimized for mobile devices. Please use a desktop browser for the best experience.');
}
