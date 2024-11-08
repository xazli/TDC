document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const tagButtons = document.querySelectorAll('.tag-btn');
    const bookmarks = document.querySelectorAll('.bookmark');

    let selectedTags = new Set();
    let debounceTimer;

    function debounce(func, delay) {
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        };
    }

    function filterBookmarks() {
        const searchTerm = searchInput.value.toLowerCase();

        bookmarks.forEach(bookmark => {
            const title = bookmark.querySelector('.bookmark-title').textContent.toLowerCase();
            const tags = new Set(bookmark.dataset.tags.split(','));

            const matchesTags = selectedTags.size === 0 ||
                [...selectedTags].every(tag => tags.has(tag));
            const matchesSearch = title.includes(searchTerm);

            bookmark.style.display = (matchesTags && matchesSearch) ? '' : 'none';
        });
    }

    const debouncedFilterBookmarks = debounce(filterBookmarks, 500);

    searchInput.addEventListener('input', debouncedFilterBookmarks);

    function toggleTag(button) {
        const tag = button.dataset.tag;
        if (selectedTags.has(tag)) {
            selectedTags.delete(tag);
            button.classList.remove('active');
        } else {
            selectedTags.add(tag);
            button.classList.add('active');
        }
        filterBookmarks();
    }

    tagButtons.forEach(button => {
        let touchStartTime;
        let isTouchMove = false;

        button.addEventListener('touchstart', (e) => {
            touchStartTime = Date.now();
            isTouchMove = false;
        });

        button.addEventListener('touchmove', () => {
            isTouchMove = true;
        });

        button.addEventListener('touchend', (e) => {
            if (!isTouchMove && (Date.now() - touchStartTime) < 200) {
                e.preventDefault();
                toggleTag(button);
            }
        });

        // 保留点击事件，用于桌面端
        button.addEventListener('click', (e) => {
            if (!('ontouchstart' in window)) {
                toggleTag(button);
            }
        });
    });

    filterBookmarks();
});