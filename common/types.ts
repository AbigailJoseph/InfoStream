export type NewsData = {
    status: string;
    totalResults: number;
    articles: {
        source: {
            id: string | null;
            name: string;
        };
        author: string;
        title: string;
        description: string;
        url: string;
        urlToImage: string;
        publishedAt: string;
        content: string;
    }
  };
