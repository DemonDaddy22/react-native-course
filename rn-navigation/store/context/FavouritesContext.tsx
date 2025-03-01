import { createContext, useState } from 'react';

type FavouritesContextType = {
  ids: Array<string>;
  addFavourite: (id: string) => void;
  removeFavourite: (id: string) => void;
};

export const FavouritesContext = createContext<FavouritesContextType>({
  ids: [],
  addFavourite: (id: string) => {},
  removeFavourite: (id: string) => {},
});

const FavouritesContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ids, setIds] = useState<Array<string>>([]);

  const addFavourite = (id: string) => {
    setIds(prevIds => [...prevIds, id]);
  };

  const removeFavourite = (id: string) => {
    setIds(prevIds => prevIds.filter(favouriteId => favouriteId !== id));
  };

  return (
    <FavouritesContext.Provider value={{ ids, addFavourite, removeFavourite }}>{children}</FavouritesContext.Provider>
  );
};

export default FavouritesContextProvider;
