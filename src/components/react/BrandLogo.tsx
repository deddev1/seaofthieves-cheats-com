type Props = {
	/** Accessible label when the logo is decorative inside a named link */
	alt?: string;
	className?: string;
};

/** Zadeyo checkout mark — used when a logo image is needed. */
export default function BrandLogo({ alt = 'Sea of Thieves Cheats logo', className }: Props) {
	return (
		<img
			className={className}
			src="/images/sea-of-thieves-cheats-logo-mark.webp"
			srcSet="/images/sea-of-thieves-cheats-logo-mark.webp 128w, /images/sea-of-thieves-cheats-logo.webp 512w"
			sizes="40px"
			width={40}
			height={40}
			alt={alt}
			decoding="async"
			fetchPriority="high"
		/>
	);
}
