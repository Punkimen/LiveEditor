import { useState, useEffect } from 'react';

export const useQuery = () => {
  const [query, setQueryState] = useState(() => {
    return new URLSearchParams(window.location.search);
  });

  const getQuery = (name: string): string | undefined => {
    return query.get(name) ?? undefined;
  };

  const updateQuery = (newQueryString: URLSearchParams) => {
    setQueryState(newQueryString)

    const newUrl = `${window.location.pathname}?${newQueryString}`;

    window.history.replaceState(null, "", newUrl);
  }

  const deleteQuery = (name: string) => {
    const newQuery = new URLSearchParams(query.toString());

    newQuery.delete(name)

    updateQuery(newQuery)
  }

  const addOrSetQuery = (name: string, value: string) => {
    const newQuery = new URLSearchParams(query.toString());

    if (newQuery.has(name)) {
      newQuery.set(name, value);
    } else {
      newQuery.append(name, value);
    }

    updateQuery(newQuery)
  }



  useEffect(() => {
    const handlePopState = () => {
      setQueryState(new URLSearchParams(window.location.search));
    };

    window.addEventListener('popstate', handlePopState);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return { getQuery, deleteQuery, addOrSetQuery };
};
