import {useRef,useEffect} from "react"
export default function Searchbar({
text,
  placeholder,
  getData,
  value,
  setValue,
  searchResults,
  setSearchResults,
}) {

     useEffect(() => {
       async function fetchData(value) {
         const x = await getData(value);
         setSearchResults(x);
       }
       fetchData(value);
     }, [value]);


    const timerRef = useRef(null);

  function handleChange(e) {
    //useRef to clear anyintervals alr existing
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    //have 2 sec countdown and wait for user to stop typing before making fetch
    timerRef.current = setTimeout(() => {
      setValue(e.target.value);
    }, 2000);
  }


  return (
    <main className="w-full border-1 mt-20">
      <h1 className="mt-auto text-6xl mb-3 relative z-5 text-[var(--text-blue-primary)] text-center">
        {text}
      </h1>

      <form className="text-center flex w-1/2 m-auto  flex-col">
        <div className="border-1 p-4 ">
          <input
            className="w-full p-2 border border-transparent focus:border-blue-400 focus:outline-none text-2xl h-[12vh]"
            placeholder="EX Bleach"
            onChange={handleChange}
          />
        </div>
      </form>

      <div className="w-80/10 border-4 auto mt-20 grid grid-cols-5">
        {searchResults.length != 0 && <h1>We got something</h1>}
      </div>
    </main>
  );

  
}