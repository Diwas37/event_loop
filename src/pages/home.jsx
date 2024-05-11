import SearchBox from "../components/searchBox";
import EventCard from "../components/EventCard";
import dummyData from "../dummy";

const Home = () => {
  return (
    <>
      <div className="pt-5">
        <SearchBox />
      </div>
      <div className="container mx-auto min-h-screen px-10 py-5 grid grid-cols-5 gap-6">
        {dummyData.map((item) => (
          <EventCard data={item} />
        ))}
      </div>
    </>
  );
};

export default Home;
