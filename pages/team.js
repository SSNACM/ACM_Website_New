import data from "./data/team.json";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Card = ({ person }) => {
  return (
    <div className="w-64 h-[18rem] py-2 shadow-xl border rounded-lg shadow-slate-500/20 hover:shadow-slate-800/50 flex flex-col items-center justify-center transition duration-500 ease-in-out text-center bg-slate-100 hover:bg-white">
      <img
        className="h-40 w-40 rounded-full object-cover border-4 border-slate-200"
        src={person.resource}
        alt={`Profile Pic of ${person.name}`}
      />
      <div className="mt-4">
        <h3 className="text-xl">{person.name}</h3>
        <h4 className="text-slate-500">{person.description}</h4>
      </div>
    </div>
  );
};

const Team = () => {
  const keys = Object.keys(data);

  return (
    <div className="bg-leafy">
      <div className="bg-slate-200 pl-12 py-4 text-2xl font-bold text-slate-800">
        Team
      </div>
      {keys.map((key, id) => {
        return (
          <div key={id} className="text-center">
            <AnimationOnScroll delay={200} animateIn="animate__fadeIn">
              <h4 className="uppercase font-semibold text-blue-800 text-2xl mt-16 mb-6">
                {key}
              </h4>
            </AnimationOnScroll>
            <div className="flex flex-wrap justify-center gap-4 mx-32">
              {data[key].map((value, key) => {
                return (
                  <AnimationOnScroll
                    key={key}
                    delay={200}
                    animateIn="animate__fadeIn"
                  >
                    <Card person={value} />
                  </AnimationOnScroll>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Team;
