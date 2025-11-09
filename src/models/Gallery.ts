export type TGallery = { 
    id: number;
    title: string;
    file: string;
    media_type: "video" | "picture";
}

export type TGalleryList = {
    next: number | null;
    previous: number | null;
    count: number;
    page_count: number;
    result: TGallery[];
}
