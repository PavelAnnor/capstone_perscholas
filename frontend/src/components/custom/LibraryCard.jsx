export default function LibraryCard({data}){

    return(
        <article className="col-span-1 aspect-auto  flex aspect-auto relative border-1">
            <img src = {data.cover} className="w-full"></img>
            <div className="absolute w-full bg-[black] bottom-0 z-5 min-h-[20%] p-3">
                <p>{data.title}</p>
                <p>{data.year}</p>
            </div>

        </article>
    )

}