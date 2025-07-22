
function isMobile() {
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function close() {
  document.getElementById('alert').style.display = 'none';
}

if (isMobile()) {
  window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('alert').style.display = 'block';
  });
}
