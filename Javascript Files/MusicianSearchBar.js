document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const contentContainer = document.getElementById('searchContainer');
    const items = contentContainer.getElementsByClassName('searchCol'); // Assuming 'item' is the class for filterable divs

    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase();

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const textContent = item.textContent.toLowerCase();

            if (textContent.includes(filter)) {
                item.style.display = ''; // Or 'block' if they are block elements by default
            } else {
                item.style.display = 'none';
            }
        }
    });
});
