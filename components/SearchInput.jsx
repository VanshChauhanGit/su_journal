"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SearchInput({
  placeholder = "Search...",
  onSearch,
  className = "",
}) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div
      className={`flex items-center ${className} border border-white rounded-lg `}
    >
      <Input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none text-white text-xl placeholder:text-gray-300"
      />
      <Button
        onClick={handleSearch}
        className="rounded-l-none bg-blue-600 hover:bg-blue-700 px-4"
      >
        Search
      </Button>
    </div>
  );
}
