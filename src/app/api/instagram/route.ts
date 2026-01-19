import { NextResponse } from 'next/server';
import { InstagramService } from '@/services/instagram.service';

export async function GET() {
    try {
        const posts = await InstagramService.getRecentPosts();
        console.log(posts);
        // Add cache control headers
        return NextResponse.json(posts, {
            status: 200,
            headers: {
                'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59',
            },
        });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch Instagram posts' },
            { status: 500 }
        );
    }
}
