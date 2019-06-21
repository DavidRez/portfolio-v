var loadedCount = 0;//total images loaded
var totalImages = 0;//total images in current gallery

function checkImages() {
  if(loadedCount !== totalImages) {
     window.setTimeout(checkImages, 100);
  } else {
    container.innerHTML = '';
    container.append(work);
    document.querySelectorAll('.box').forEach(box => {
      setTimeout(() => {
        box.style.visibility = 'visible';
      },200);
    });
  }
}