document.querySelectorAll('.faq-button').forEach(button => {
    button.onmousemove = (e) => {
      let x = e.pageX - button.offsetLeft - button.offsetWidth / 2;
      let y = e.pageY - button.offsetTop - button.offsetHeight / 2;
      let rotateY = x / 5;
      let rotateX = -y / 5;
      button.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  
    button.onmouseleave = () => {
      button.style.transform = 'rotateX(0) rotateY(0)';
    }
  });