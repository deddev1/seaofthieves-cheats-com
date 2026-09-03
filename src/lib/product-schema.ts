import { customerReviewStats, productInfo, siteConfig } from '../data/site';

/** Canonical product entity URL — always the English home URL. */
export const productGraphId = `${new URL('/', siteConfig.url).href}#product`;

export function productGraphNode(image?: string): Record<string, unknown> {
	const productUrl = new URL('/', siteConfig.url).href;

	return {
		'@type': 'Product',
		'@id': productGraphId,
		name: productInfo.name,
		description: productInfo.summary,
		image: image ?? new URL(siteConfig.defaultOgImage, siteConfig.url).href,
		brand: { '@type': 'Brand', name: productInfo.brand },
		url: productUrl,
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: customerReviewStats.averageRating.toFixed(1),
			reviewCount: String(customerReviewStats.totalCount),
			bestRating: '5',
			worstRating: '1',
		},
	};
}
