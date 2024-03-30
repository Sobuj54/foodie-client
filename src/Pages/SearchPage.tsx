import { useSearchRestaurants } from "@/api/RestaurantApi";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResultCard from "@/components/SearchResultCard";
import SearchResultInfo from "@/components/SearchResultInfo";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type SearchState = {
  searchQuery: string;
};

const SearchPage = () => {
  const { city } = useParams();
  const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
  });
  const { results, isLoading } = useSearchRestaurants(searchState, city);

  const setSearchQuery = (searchFromData: SearchForm) => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: searchFromData.searchQuery,
    }));
  };

  const resetSearch = () => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: "",
    }));
  };

  if (isLoading) {
    return <p className="h-screen text-center">Loading...</p>;
  }

  if (!results?.data || !city) {
    return <span>No Results Found!</span>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div id="cuisines-list">insert cuisines here</div>

      <div id="main-content">
        <SearchBar
          searchQuery={searchState.searchQuery}
          onSubmit={setSearchQuery}
          placeHolder="Search by cuisine or restaurant name"
          onReset={resetSearch}
        />
        <SearchResultInfo total={results.pagination.total} city={city} />
        {results.data.map((restaurant) => (
          <SearchResultCard restaurant={restaurant} key={restaurant._id} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
