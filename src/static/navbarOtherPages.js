(() => {
	const btn = document.getElementById('navbar-other-pages-hover-btn');
	const dropdown = document.getElementById('navbar-other-pages-dropdown');
	if (!btn || !dropdown) return;

	let hideTimeout = null;

	function show() {
		clearTimeout(hideTimeout);
		dropdown.classList.add('visible');
	}

	function hide() {
		hideTimeout = setTimeout(() => {
			dropdown.classList.remove('visible');
		}, 150);
	}

	// Hover on trigger button
	btn.addEventListener('mouseenter', show);
	btn.addEventListener('mouseleave', hide);

	// Keep open while hovering the dropdown itself
	dropdown.addEventListener('mouseenter', show);
	dropdown.addEventListener('mouseleave', hide);

	// Click toggle
	btn.addEventListener('click', (e) => {
		e.stopPropagation();
		dropdown.classList.toggle('visible');
	});

	// Close on click outside
	document.addEventListener('click', (e) => {
		if (!dropdown.contains(e.target) && e.target !== btn) {
			dropdown.classList.remove('visible');
		}
	});
})();
