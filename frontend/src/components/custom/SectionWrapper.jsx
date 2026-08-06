export default function SectionWrapper(props){




    return(

         <section className="bg-[var(--bg-primary)] w-[100%] h-[100%]  z-1 border-[var(--border-primary)] pl-10 pr-10 mt-10 ">
            {props.children}
         </section>
    )
}