function addHoverEffect(element) {
    element.addEventListener('mousemove', (event) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
  
      const moveX = (x / rect.width - 0.5) * 10; // Двигаем на ±5%
      const moveY = (y / rect.height - 0.5) * 10;
  
      element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  
    element.addEventListener('mouseleave', () => {
      element.style.transform = 'translate(0, 0)';
    });
  }
  
  // Применяем функцию для каждой картинки и word-grid
  const images = document.querySelectorAll('.image1');

  
  images.forEach((image) => addHoverEffect(image));
  addHoverEffect(wordGrid);






  ///////////////////////////////////////////////

  function openPopup() {
    document.getElementById('popup').style.display = 'flex';
  }

  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }

  