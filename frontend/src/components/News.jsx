import React from 'react';

const News = ({ data }) => {
  return (
    <div className="flex flex-row flex-wrap p-4 grid-cols-3 mt-4 gap-4">
      {data.map((news) => (
        <div key={news.title} className="text-black rounded-xl shadow-xl w-[32%]">
          <img src={news.urlToImage} alt={news.title} className="w-full h-40 object-cover rounded-t-xl" />
          <div className="flex flex-col items-center justify-center gap-4 p-4">
            <p className="text-xl font-semibold">{news.title}</p>
            <p className="text-center">{news.publishedAt}</p>
            <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
