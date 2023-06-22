import { useContext } from "react";
import SearchContext from "../context/SearchProvider";

const useSearchContext = () => {
  return useContext(SearchContext);
};

export default useSearchContext;
