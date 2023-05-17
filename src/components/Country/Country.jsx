import React, { useEffect, useRef } from "react";
import { gsap, TweenMax, Linear } from "gsap";
import '../../styles/Country.css'
import CountUp from 'react-countup';



function Country() {
  const boxesRef = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    const boxes = boxesRef.current.querySelectorAll(".box");
    const stage = stageRef.current;

    gsap.set(stage, {
      css: {
        perspective: 1100,
        transformStyle: "preserve-3d",
      },
    });

    boxes.forEach((box, index) => {
      gsap.set(box, {
        css: {
          rotationY: (index * 360) / 6,
          transformOrigin: "50% 50% -420",
                },
      });
      TweenMax.to(box, 20, {
        css: {
          z: 0.01,
          rotationY: "+=359",
        },
        repeat: -1,
        ease: Linear.easeNone,
      });
    });
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center flex-col mt-10 text-[#333333]" id="ŞEHRİM">
    <h1 className="text-[30px] text-gray-200 mt-5">Şehrim</h1>
    <h1 className="text-[#fff] text-[30px] mt-5">Gaziantep</h1>
      <div class="demoWrapper">
  <div className="stage" ref={boxesRef}>
    <div class="box">
      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/1f/85/d1/gaziantep-oyuncak-muzesi.jpg?w=300&h=300&s=1" width="285" height="285"/>
    </div>
    <div class="box">
      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/3b/05/df/gaziantep-mozakik-muzesi.jpg?w=300&h=300&s=1" width="285" height="285"/>
    </div>
    <div class="box">
      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/eb/dd/a3/sakli-konak.jpg?w=300&h=300&s=1" width="285" height="285"/>
    </div>
    <div class="box">
      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/d4/ea/af/20171001-105554-largejpg.jpg?w=300&h=300&s=1" width="285" height="285"/>
    </div>
    <div class="box">
      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/c3/98/cb/photo0jpg.jpg?w=300&h=300&s=1" width="285" height="285"/>
    </div>
    <div class="box">
      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/46/4c/7f/medusa-cam-eserler-muzesi.jpg?w=300&h=300&s=1" width="285" height="285"/>
    </div>

  </div>
</div>

<div class="stage" ref={stageRef}>
</div>

<div className="w-full h-full flex justify-center items-center flex-col absolute">
<h1 className="text-[30px] text-[#fff]"> Gaziantep Nüfusu : </h1>
<p className="flex justify-center items-center  text-center text-gray-200"> 2021 yılına ait Gaziantep nüfusu Tahmini Türkiye İstatistik Kurumu (TÜİK) verilerine göre </p>
<span className="text-[40px] mt-5 text-white"><CountUp
  start={0}
  end={2106000}
  duration={20.75}
  separator=" "
  decimals={4}
  decimal=","
  prefix=""
  suffix="'dir"
></CountUp></span>
</div>
    </div>
  );
}

export default Country;
