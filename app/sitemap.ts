import type { MetadataRoute } from 'next'

// Replace this with your actual domain when you deploy
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dorojatunchandrabumi.com'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ]
}
