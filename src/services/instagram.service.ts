export interface InstagramPost {
    id: string;
    imageUrl: string;
    postUrl: string;
    likes?: number;
    caption?: string;
    isVideo?: boolean;
    videoUrl?: string;
    category?: string[]; // Categorias detectadas
}

interface InstagramAPIResponse {
    data: {
        user: {
            edge_owner_to_timeline_media: {
                edges: Array<{
                    node: {
                        id: string;
                        shortcode: string;
                        display_url: string;
                        is_video: boolean;
                        video_url?: string;
                        edge_liked_by: {
                            count: number;
                        };
                        edge_media_to_caption: {
                            edges: Array<{
                                node: {
                                    text: string;
                                };
                            }>;
                        };
                    };
                }>;
            };
        };
    };
}

const KEYWORDS = {
    'Automotriz': ['automotriz', 'carro', 'vehículo', 'repintado', 'bicapa', 'monocapa', 'latonería'],
    'Arquitectónica': ['arquitectónica', 'casa', 'pared', 'interior', 'exterior', 'caucho', 'satinado', 'mate'],
    'Industrial': ['industrial', 'epóxico', 'tráfico', 'anticorrosivo', 'piso'],
    'Insumos': ['brocha', 'rodillo', 'lija', 'thinner', 'masilla', 'herramienta', 'cinta'],
    'Esmaltes': ['esmalte', 'barniz', 'madera', 'metal', 'brillo']
};

function detectCategories(caption: string): string[] {
    const lowerCaption = caption.toLowerCase();
    const categories: Set<string> = new Set();

    Object.entries(KEYWORDS).forEach(([category, terms]) => {
        if (terms.some(term => lowerCaption.includes(term))) {
            categories.add(category);
        }
    });

    return Array.from(categories);
}

export const InstagramService = {
    async getRecentPosts(username: string = 'pintualiado', limit: number = 8): Promise<InstagramPost[]> {
        try {
            const url = `https://www.instagram.com/api/v1/users/web_profile_info/?username=${username}`;

            // Fetch directo a la API de Instagram
            const response = await fetch(url, {
                headers: {
                    'referer': 'https://www.instagram.com/',
                    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Mobile/14G60 Instagram 12.0.0.16.90 (iPhone9,4; iOS 10_3_3; en_US; en-US; scale=2.61; gamut=wide; 1080x1920',
                },
                next: { revalidate: 3600 }, // Cache por 1 hora
            });

            if (!response.ok) {
                console.error(`Instagram API fetch failed: ${response.status} ${response.statusText}`);
                return [];
            }

            const data: InstagramAPIResponse = await response.json();

            // Extraer posts de la estructura de respuesta
            const edges = data.data.user.edge_owner_to_timeline_media.edges;

            if (!edges || edges.length === 0) {
                console.warn('No posts found in Instagram API response');
                return [];
            }

            // Mapear a nuestro formato
            const posts: InstagramPost[] = edges.slice(0, limit).map((edge) => {
                const node = edge.node;
                const caption = node.edge_media_to_caption?.edges[0]?.node?.text || '';

                return {
                    id: node.id,
                    imageUrl: node.display_url,
                    postUrl: `https://www.instagram.com/p/${node.shortcode}/`,
                    likes: node.edge_liked_by?.count,
                    caption: caption,
                    isVideo: node.is_video || false,
                    videoUrl: node.video_url || undefined,
                    category: detectCategories(caption)
                };
            });

            console.log(`Successfully fetched ${posts.length} Instagram posts`);
            return posts;
        } catch (error) {
            console.error('Error fetching Instagram posts from API:', error);
            return [];
        }
    },
};
