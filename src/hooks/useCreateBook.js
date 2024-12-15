import { useState, useCallback } from "react";

export const useCreateBook = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createBook = useCallback(
    async (newBook) => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newBook),
        });

        if (!response.ok) {
          throw new Error("Failed to create the book.");
        }

        const result = await response.json();
        return result; // Return the created book
      } catch (err) {
        setError(err.message || "An error occurred while creating the book.");
        throw err; // Re-throw to allow external handling
      } finally {
        setLoading(false);
      }
    },
    [url]
  );

  return { createBook, loading, error };
};
