/**
 * Homepage product screenshot carousel — external file for CSP script-src 'self'.
 */
(() => {
	document.querySelectorAll('[data-home-screenshots]').forEach((root) => {
		const mainImg = root.querySelector('[data-screenshot-img]');
		const caption = root.querySelector('[data-screenshot-caption]');
		const urlLink = root.querySelector('[data-screenshot-url]');
		const contentMeta = root.querySelector('[data-screenshot-content]');
		const thumbs = [...root.querySelectorAll('[data-screenshot-index]')];
		const prevBtn = root.querySelector('[data-screenshot-prev]');
		const nextBtn = root.querySelector('[data-screenshot-next]');
		const strip = root.querySelector('[data-screenshot-strip]');

		if (!mainImg || !caption || thumbs.length === 0) return;

		let active = 0;

		const show = (index) => {
			const i = ((index % thumbs.length) + thumbs.length) % thumbs.length;
			const thumb = thumbs[i];
			if (!thumb) return;

			active = i;
			const src = thumb.getAttribute('data-image-src') ?? '';
			const srcset = thumb.getAttribute('data-image-srcset') ?? '';
			mainImg.setAttribute('src', src);
			if (srcset) mainImg.setAttribute('srcset', srcset);
			else mainImg.removeAttribute('srcset');

			mainImg.setAttribute('alt', thumb.getAttribute('data-alt') ?? '');
			mainImg.setAttribute('title', thumb.getAttribute('data-title') ?? '');
			caption.textContent = thumb.getAttribute('data-caption') ?? '';

			const url = thumb.getAttribute('data-url') ?? '';
			if (urlLink) urlLink.setAttribute('href', url);
			if (contentMeta) contentMeta.setAttribute('content', url);

			thumbs.forEach((btn, idx) => {
				const isActive = idx === i;
				btn.classList.toggle('is-active', isActive);
				btn.setAttribute('aria-selected', String(isActive));
			});

			thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
		};

		thumbs.forEach((thumb, index) => {
			thumb.addEventListener('click', () => show(index));
		});

		prevBtn?.addEventListener('click', () => show(active - 1));
		nextBtn?.addEventListener('click', () => show(active + 1));

		strip?.addEventListener('keydown', (event) => {
			if (event.key === 'ArrowRight') {
				event.preventDefault();
				show(active + 1);
			}
			if (event.key === 'ArrowLeft') {
				event.preventDefault();
				show(active - 1);
			}
		});
	});
})();
