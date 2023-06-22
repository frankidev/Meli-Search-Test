import { createContext, useState } from "react";

const SearchContext = createContext();
const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState(null);
  const [idProduct, setIdProduct] = useState(null);
  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        idProduct,
        setIdProduct,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider };
export default SearchContext;
