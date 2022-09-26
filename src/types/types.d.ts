export type AllPostsType = {
  posts: [
    {
      id: string;
      description: string;
      date: string;
      coverImage: {
        url: string;
      };
      slug: string;
      title: string;
    }
  ];
};

export type ALlCategoriesType = {
  categories: [
    {
      name: string;
      slug: string;
      id: string;
    }
  ];
};

export type CategoryType = {
  category: {
    posts: [
      {
        id: string;
        description: string;
        title: string;
        slug: string;
        date: string;
        author: {
          name: string;
        };
        coverImage: {
          url: string;
        };
      }
    ];
  };
};

export type PostType = {
  post: {
    id: string;
    title: string;
    author: {
      name: string;
      id: string;
      picture: {
        url: string;
      };
    };
    content: {
      html: string;
    };
    coverImage: {
      url: string;
    };
  };
};

export type SearchPostsType = {
  posts: [
    {
      id: string;
      title: string;
      slug: string;
      date: string;
      description: string;
      coverImage: {
        url: string;
      };
      author: {
        name: string;
        picture: {
          url: string;
        };
      };
    }
  ];
};

export type AuthorType = {
  author: {
    biography: string;
    name: string;
    picture: {
      url: string;
    };
    posts: [
      {
        id: string;
        title: string;
        slug: string;
        date: string;
        description: string;
        coverImage: {
          url: string;
        };
        author: {
          name: string;
        };
      }
    ];
  };
};
