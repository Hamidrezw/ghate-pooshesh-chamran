export type TBlog = {
    title: string;
    slug: string;
    image: string;
    introduction: string;
    created_at: string;
}

export type TBlogList = {
    next: number | null;
    previous: number | null;
    count: number;
    page_count: number;
    results: TBlog[];
}