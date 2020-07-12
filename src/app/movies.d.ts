export interface Movie {
    id: number;
    name: string;
    description: string;
    image_url: string;
    thumb_url: string;
    cast: {
        character: string;
        actor: string;
    };
}