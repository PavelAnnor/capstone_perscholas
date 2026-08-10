export default function FeaturesGridCard({icon, header, desc }){



    return (
      <article className="col-span-1  bg-[#1a1919] rounded-2xl p-5 text-white border-1 border-gray-300">
        {icon}
        <p className="mt-5 text-lg">{header}</p>
        <p className="mt-5 ">{desc}</p>
      </article>
    );
}