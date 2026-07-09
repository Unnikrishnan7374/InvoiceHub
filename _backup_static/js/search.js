document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("pageSearchInput");
    const resultsContainer = document.getElementById("searchResults");
    const clearIcon = document.getElementById("clearSearchInput");

    // 1. Search Logic
    if (searchInput) {
        searchInput.addEventListener("input", function (e) {
            const query = e.target.value.toLowerCase().trim();
            resultsContainer.innerHTML = "";

            if (query.length > 0) {
                if (clearIcon) clearIcon.style.display = "block";
            } else {
                if (clearIcon) clearIcon.style.display = "none";
            }

            if (query.length < 2) {
                resultsContainer.style.display = "none";
                resetBlogCards();
                return;
            }

            const results = searchData.filter(item => {
                return item.title.toLowerCase().includes(query) ||
                    item.content.toLowerCase().includes(query) ||
                    (item.date && item.date.toLowerCase().includes(query));
            });

            if (results.length > 0) {
                resultsContainer.style.display = "block";
                results.forEach(item => {
                    const div = document.createElement("div");
                    div.className = "search-result-item";
                    div.innerHTML = `
                        <a href="${item.url}?highlight=${encodeURIComponent(query)}">
                            <span class="badge badge-info">${item.category}</span>
                            <strong>${item.title}</strong>
                            ${item.date ? `<span class="search-result-date"><i class="fa fa-calendar"></i> ${item.date}</span>` : ''}
                            <p>${truncateText(item.content, 100)}</p>
                        </a>
                    `;
                    resultsContainer.appendChild(div);
                });
            } else {
                resultsContainer.style.display = "block";
                resultsContainer.innerHTML = '<div class="no-results">No results found</div>';
            }

            // Highlight matching blog cards on blogs.html
            highlightBlogCards(query);
        });

        // Hide results when clicking outside
        document.addEventListener("click", function (e) {
            if (!searchInput.contains(e.target) && !resultsContainer.contains(e.target)) {
                resultsContainer.style.display = "none";
            }
        });

        // Clear search
        if (clearIcon) {
            clearIcon.addEventListener("click", function () {
                searchInput.value = "";
                resultsContainer.style.display = "none";
                clearIcon.style.display = "none";
                searchInput.focus();
                resetBlogCards();
            });
        }
    }

    // 2. Highlighting Logic
    highlightSearchTerm();
});

function truncateText(text, length) {
    if (text.length <= length) return text;
    return text.substring(0, length) + "...";
}

// ── Blog card highlight / dim on blogs.html ─────────────────
function highlightBlogCards(query) {
    const blogItems = document.querySelectorAll(".blogList li");
    if (!blogItems.length) return;

    blogItems.forEach(function (li) {
        const title = (li.querySelector("h3") || {}).textContent || "";
        const content = (li.querySelector("p") || {}).textContent || "";
        const matches = title.toLowerCase().includes(query) ||
            content.toLowerCase().includes(query);

        if (matches) {
            li.classList.add("blog-card-match");
            li.classList.remove("blog-card-dim");
        } else {
            li.classList.add("blog-card-dim");
            li.classList.remove("blog-card-match");
        }
    });
}

function resetBlogCards() {
    document.querySelectorAll(".blogList li").forEach(function (li) {
        li.classList.remove("blog-card-match", "blog-card-dim");
    });
}

function highlightSearchTerm() {
    const urlParams = new URLSearchParams(window.location.search);
    const term = urlParams.get("highlight");

    if (term) {
        const decodedTerm = decodeURIComponent(term);
        const regex = new RegExp(`(${escapeRegExp(decodedTerm)})`, "gi");

        // Target specific content areas to avoid breaking HTML structures
        const contentAreas = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, li, td, th");

        contentAreas.forEach(element => {
            if (element.children.length === 0 && element.textContent.toLowerCase().includes(decodedTerm.toLowerCase())) {
                element.innerHTML = element.textContent.replace(regex, '<span class="highlight">$1</span>');

                // Scroll to first occurrence
                const firstHighlight = document.querySelector(".highlight");
                if (firstHighlight) {
                    firstHighlight.scrollIntoView({ behavior: "smooth", block: "center" });
                }
            }
        });

        // Also open matching FAQ accordion if on FAQ page
        if (window.location.href.includes("faq.html")) {
            // Auto-expand accordions containing valid highlights
            const highlights = document.querySelectorAll(".highlight");
            highlights.forEach(span => {
                const panel = span.closest(".panel");
                if (panel) {
                    panel.style.display = "block"; // Show panel
                    panel.classList.add("show");
                    // Toggle icon on button
                    const btn = panel.previousElementSibling;
                    if (btn && btn.classList.contains("accordion")) {
                        btn.classList.add("active");
                    }
                }
            });
        }
    }
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
