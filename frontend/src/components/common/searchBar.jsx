import { useState, useRef, useEffect } from 'react';
import { ImSearch } from "react-icons/im";
import { HiMiniXMark } from "react-icons/hi2";

const SearchBar = ({ isSearch, setIsSearch, isSearchBar, handleSearchToggle}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const searchInputRef = useRef(null);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery('');
        console.log(`search query: ${searchQuery}`);
        //the api call will depend on page prop

    }

    //focus search bar automatically when opened
    useEffect(() => {
        if (isSearchBar && searchInputRef.current) {
        searchInputRef.current.focus();
        
        // Optional: Select all text in the input
        searchInputRef.current.select();
        }
    }, [isSearchBar]);


    return (
       
        <div className="searchContainer flex items-center w-full justify-around" >
            {(isSearchBar) && (
                <form onSubmit={(e)=> handleSearch(e)} className="searchForm flex items-center w-full pl-4 pr-4 md:w-3/4 justify-between">
                    <div className="flex items-center w-full  bg-gray-100 rounded-lg focus:outline-none px-2">
                        <input className="w-full py-2 pl-2 pr-12 rounded-lg focus:outline-none placeholder:text-gray-700" 
                            ref={searchInputRef}
                            type="text" 
                            placeholder="search"
                            value={searchQuery} 
                            onChange={(e)=>{setSearchQuery(e.target.value)}} />

                        <button type="submit" className="ml-2 text-black hover:text-gray-700">
                            <ImSearch className="h-5 w-5"/>
                        </button>
                    </div>
                    <div className={`flex items-center ${isSearch ? 'md:hidden' : ''}`}>
                        <button onClick={()=> handleSearchToggle()} className="ml-5 text-black hover:text-gray-700">
                            <HiMiniXMark className="h-6 w-6"/>
                        </button>
                    </div>
                </form>
               
            )  }
        </div>
        

    )
}

export default SearchBar;