import createDatacontext from "./createDatacontext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOG_POST":
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "ADD_BLOG_POST" });
  };
};

export const { Context, Provider } = createDatacontext(
  blogReducer,
  {
    addBlogPost,
  },
  []
);
