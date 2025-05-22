export interface IBoard {
  name: string;
  role: string;
  image: string;
  priority: number;
}

export interface ITag {
  _id: string;
  name: string;
  slug: string;
}

export interface INewsList {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: any;
  secondaryImage?: any;
  date?: string;
  tags?: ITag[];
}

export interface INewsArticle {
  currentSlug: string;
  smallDescription: string;
  title: string;
  content: any;
  titleImage: any;
  secondaryImage?: any;
  additionalImages?: any[];
}
