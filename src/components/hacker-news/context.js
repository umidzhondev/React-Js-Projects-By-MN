import { useContext, useEffect, useReducer, createContext } from "react";
import { SET_LOADING, SET_STORIES, REMOVE_STORY, HANDLE_PAGE, HANDLE_SEARCH } from "./actions";
import reducer from "./reducer";

const Endpoint = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  hits: [],
  query: "react",
  page: 0,
  nbPages: 0,
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (url) => {
    dispatch({ type: SET_LOADING });

    try {
      const resp = await fetch(url);
      const data = await resp.json();
      dispatch({ type: SET_STORIES, payload: { hits: data.hits, nbPages: data.nbPages } });
    } catch (e) {
      console.log(e);
    }
  };

  const removeStory = (id) => {
    dispatch({ type: REMOVE_STORY, payload: id });
  };

  const handlePage = (value) => {
    dispatch({ type: HANDLE_PAGE, payload: value });
  };

  const handleSearch = (query) => {
    dispatch({ type: HANDLE_SEARCH, payload: query });
  };

  useEffect(() => {
    fetchData(`${Endpoint}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider value={{ ...state, removeStory, handlePage, handleSearch }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };