"use client";

function WeightInputSelectLoading() {
  return (
    <div className="grid grid-cols-3 gap-2 mt-6 animate-pulse">
      {Array(30).map((_, index) => (
        <div
          key={index}
          className="relative border-transparent bg-slate-400 rounded-lg w-full aspect-square"
        ></div>
      ))}
    </div>
  );
}

export default WeightInputSelectLoading;
