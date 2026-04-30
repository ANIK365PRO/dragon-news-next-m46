
import Marquee from "react-fast-marquee";

const topNews = [
  { "id": 1, "title": "Global Tech Stocks Surge Amid AI Boom." },
  { "id": 2, "title": "Severe Heatwave Hits South Asia." },
  { "id": 3, "title": "New Space Mission Successfully Launched." },
  { "id": 4, "title": "Global Oil Prices Drop Unexpectedly." },
  { "id": 5, "title": "Major Cybersecurity Breach Reported." },
  { "id": 6, "title": "International Football Tournament Begins Today." }
]

const BreakingNews = () => {
    return (
        <div className="flex items-center gap-2 bg-zinc-100 py-2 container mx-auto px-2">
          <button className="btn bg-pink-500 text-white">Latest</button>
          <Marquee pauseOnHover={true} className="">
            {
                topNews.map(n => <span key={n.id} className="pr-5 text-pink-500">{n.title}</span>)
            }
          </Marquee>
        </div>
    );
};

export default BreakingNews;