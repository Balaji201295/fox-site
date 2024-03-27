import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { useInView } from "react-intersection-observer";
import { skills } from "../constants";
const SkillsDetails = () => {
  const [ref, inView] = useInView();
  return (
    <div className="w-full flex flex-col justify-start items-start gap-6">
      {skills.map(({ title, value }, index) => (
        <div key={title} className="w-full flex flex-col" ref={ref}>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-semibold tracking-[-0.56px] text-dark uppercase">
              {title}
            </h3>
            <p className="text-sm font-semibold tracking-[-0.56px] text-dark">
              {value}%
            </p>
          </div>
          <ProgressBar
            completed={inView ? value : 0}
            maxCompleted={100}
            borderRadius="24px"
            width="100%"
            height="6px"
            baseBgColor="#DDDEE0"
            isLabelVisible={false}
            transitionDuration="3s"
            transitionTimingFunction="ease"
            animateOnRender={true}
            bgColor="#FE390C"
          />
        </div>
      ))}
    </div>
  );
};
export default SkillsDetails;
