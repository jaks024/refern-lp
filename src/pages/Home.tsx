import mainScreenShot from "./../assets/main.png";

export const Home = () => {
  return (
    <div className="min-w-[700px] w-full h-full">
      <div className=" pb-10 from-neutral-900 to-neutral-700 bg-gradient-to-t">
        <div className="w-1/2 m-auto">
          <div className="font-bold text-6xl pt-32 text-left">
            <div className="pb-16">
              References <span className="text-4xl">&</span>
              <br /> Reference Boards
            </div>
            <div>All in One Place.</div>
            <div className="text-4xl">Anytime. Anywhere.</div>
          </div>
          <div className="mt-16 w-64 font-medium text-neutral-200 text-center p-2 leading-normal bg-neutral-600 rounded-md border border-neutral-500 ">
            Get <span className="font-bold text-amber-50">refern.</span> for
            free
            <span className="pl-4">{"->"}</span>
          </div>
        </div>
      </div>
      <div className="w-1/2 mt-24 m-auto border border-neutral-600 rounded-lg overflow-hidden shadow-2xl shadow-neutral-700">
        <img src={mainScreenShot} alt="refern. main screenshot" />
      </div>
    </div>
  );
};
