import createDatacontext from "./createDatacontext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_BLOG_POST":
      return state.filter((blogPost) => blogPost.id !== action.payload);
  }
  switch (action.type) {
    case "ADD_BLOG_POST":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "ADD_BLOG_POST", payload: { title, content } });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "DELETE_BLOG_POST", payload: id });
  };
};

export const { Context, Provider } = createDatacontext(
  blogReducer,
  {
    addBlogPost,
    deleteBlogPost,
  },
  [{ title: "TEST POST", content: "TEST CONTENT", id: 1 }]
);
