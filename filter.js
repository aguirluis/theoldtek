<script>
  const filterButtons = document.querySelectorAll('.filter-buttons button');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tag = button.getAttribute('data-filter');
      projectCards.forEach(card => {
        const tags = card.getAttribute('data-tags');
        card.style.display = (tag === 'all' || tags.includes(tag)) ? 'block' : 'none';
      });
    });
  });
</script>
