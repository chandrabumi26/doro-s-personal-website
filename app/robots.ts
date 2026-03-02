import type { MetadataRoute } from 'next'

// Replace this with your actual domain when you deploy
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dorojatunchandrabumi.com'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
