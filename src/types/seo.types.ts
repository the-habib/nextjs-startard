// types/seo.types.ts
export interface SEOProps {
    title: string;
    description: string;
    canonicalUrl?: string;
    ogImage?: string | OpenGraphImage;
    ogType?: OpenGraphType;
    structuredData?: StructuredData;
    keywords?: string[];
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
    noindex?: boolean;
    nofollow?: boolean;
    themeColor?: string;
    alternates?: AlternateURLs;
}

export interface OpenGraphImage {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
    type?: string;
}

export interface StructuredData {
    [key: string]: any;
}

export interface AlternateURLs {
    canonical?: string;
    languages?: { [key: string]: string };
}

export type OpenGraphType = 'website' | 'article' | 'profile' | 'book' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other';

export interface MetadataConfig extends SEOProps {
    metadataBase: URL;
    robots?: Robots;
    verification?: Verification;
    twitter?: TwitterMetadata;
}

export interface Robots {
    index?: boolean;
    follow?: boolean;
    nocache?: boolean;
    googleBot?: {
        index?: boolean;
        follow?: boolean;
        noimageindex?: boolean;
        'max-video-preview'?: number | string;
        'max-image-preview'?: 'none' | 'standard' | 'large';
        'max-snippet'?: number;
    };
}

export interface Verification {
    google?: string;
    yandex?: string;
    yahoo?: string;
    other?: {
        [key: string]: string;
    };
}

export interface TwitterMetadata {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
    title?: string;
    description?: string;
    siteId?: string;
    creator?: string;
    creatorId?: string;
    images?: string[] | OpenGraphImage[];
}