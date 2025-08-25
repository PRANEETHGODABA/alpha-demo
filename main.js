// Small utility: intersection observer to reveal elements
(function() {
	const onIntersect = (entries) => {
		for (const entry of entries) {
			if (entry.isIntersecting) {
				entry.target.classList.add('in-view');
				observer.unobserve(entry.target);
			}
		}
	};
	const observer = new IntersectionObserver(onIntersect, { threshold: 0.15 });
	window.addEventListener('DOMContentLoaded', () => {
		for (const el of document.querySelectorAll('.reveal')) observer.observe(el);
	});
})();

