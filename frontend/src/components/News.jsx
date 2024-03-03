const News=(props)=>{
    return(
        <div className="flex flex-row flex-wrap p-4 grid-cols-3 mt-4 gap-4">
        {props.data.map((d) => (
          <div key={d.name} className="text-black rounded-xl shadow-xl w-[32%]">
            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <p className="text-xl font-semibold">{d.name}</p>
              <p className="text-center">{d.news}</p>
              <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
            </div>
          </div>
        ))}
        </div>
    );

};
export default News;