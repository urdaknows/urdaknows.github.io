
function isMobile() {
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobile()) {
  alert('This site is not optimized for mobile devices. Please use a desktop browser for the best experience.');
}
