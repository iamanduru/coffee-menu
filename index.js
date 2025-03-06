// Toggle menu item descriptions
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
      const desc = this.querySelector('.item-description');
      if (desc.style.display === 'block') {
        desc.style.display = 'none';
      } else {
        // Hide all other descriptions first
        document.querySelectorAll('.item-description').forEach(d => {
          d.style.display = 'none';
        });
        desc.style.display = 'block';
      }
    });
  });
  
  // Dark mode toggle
  const modeToggle = document.getElementById('modeToggle');
  const body = document.body;
  const icon = modeToggle.querySelector('i');
  
  modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  });
  
  // Add random delay for menu items to create a staggered animation effect
  document.querySelectorAll('.menu-item').forEach((item, index) => {
    item.style.animationDelay = `${0.1 + (index * 0.1)}s`;
  });