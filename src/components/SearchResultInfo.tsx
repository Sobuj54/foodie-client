import { Link } from "react-router-dom";

type Props = {
  total: number;
  city: string;
};

const SearchResultInfo = ({ total, city }: Props) => {
  return (
    <div className="ml-1 text-xl font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row my-2">
      <span>
        {total} Restaurants found in {city}
        <Link
          to="/"
          className="text-sm font-semibold underline text-blue-500 cursor-pointer ml-2">
          Change Location
        </Link>
      </span>

      TODO: insert sort dropdown here
    </div>
  );
};

export default SearchResultInfo;
