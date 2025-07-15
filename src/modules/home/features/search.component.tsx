import { ArrowRight, LoaderCircle, Search } from "lucide-react";
import useSearch from "./search.hook";
import { Button } from "@/components/ui/button";

const SearchComponent = () => {
  const hook = useSearch();
  const { isLoading, setIsloading } = hook;
  return (
    <>
      <div
        className={`relative min-w-[600px] rounded-xl shadow-xl dark:shadow-white mx-auto overflow-hidden duration-500 ${
          isLoading ? "min-h-86" : "min-h-5"
        }`}
      >
        <div className="flex items-center gap-3 px-4 py-3">
          <Search className="h-6 w-6" />
          <input
            className="w-full focus:outline-none dark:placeholder-white/50"
            placeholder="Explore GitHub"
            alt="Explore GitHub"
            id="search-input"
          />
          <Button className="cursor-pointer">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div
          className={`h-80 w-full flex items-center justify-center dark:bg-white/20 absolute duration-500 ${
            isLoading ? "opacity-100" : "opacity-0 pointer-event-none"
          }`}
        >
          <LoaderCircle className="h-16 w-16 animate-spin" />
        </div>
      </div>
      <div onClick={() => setIsloading(!isLoading)}>toggle loading</div>
    </>
  );
};

export default SearchComponent;
