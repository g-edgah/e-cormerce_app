import { useState } from 'react';
import { ImSearch } from "react-icons/im";
import { HiMiniXMark } from "react-icons/hi2";

const SearchBar = ({isSearch, setIsSearch}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
    }


    return (
       
        <div className="searchContainer flex items-center w-full justify-around" >
            {isSearch ? (
                <form className="searchForm flex items-center w-full pl-4 pr-4 md:w-3/4 justify-between">
                    <div className="flex items-center w-full  bg-gray-100 rounded-lg focus:outline-none px-2">
                        <input className="w-full py-2 pl-2 pr-12 rounded-lg focus:outline-none placeholder:text-gray-700" type="text" placeholder="search" value={searchQuery} onChange={(value)=>{setSearchQuery(value)}} />

                        <button type="submit" onClick={()=> handleSearch()} className="ml-2 text-black hover:text-gray-700">
                            <ImSearch className="h-5 w-5"/>
                        </button>
                    </div>
                    <div className={`flex items-center ${isSearch ? 'md:hidden' : ''}`}>
                        <button onClick={()=> setIsSearch(false)} className="ml-5 text-black hover:text-gray-700">
                            <HiMiniXMark className="h-6 w-6"/>
                        </button>
                    </div>
                </form>
               
            )  : (
                <button onClick={()=> setIsSearch(!isSearch)}>
                    <ImSearch className="h-5 w-5"/>
                </button>
            )}
        </div>
        

    )
}

export default SearchBar;