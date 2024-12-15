import { data } from "autoprefixer";
import { useState, useEffect, useCallback } from "react";

export const useGetBooks = (url) => {
  const [books, setBooks] = useState([]); // State to store fetched books
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch books.");
      }

      const data = await response.json();
      setBooks(data); // Update the state with fetched books
    } catch (err) {
      setError(err.message || "An error occurred while fetching books.");
    } finally {
      setLoading(false);
    }
  }, [url]);
console.log(books, "get data")
  useEffect(() => {
    fetchBooks(); // Automatically fetch books on component mount
  }, [fetchBooks]);

  return { books, loading, error, refetch: fetchBooks }; // Return refetch function for manual triggers
};
