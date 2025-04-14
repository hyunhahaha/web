import "../lib/smooth";
import "./styles/style.css";
import { markers } from "../lib/smooth";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Draggable } from "gsap/Draggable";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger);
// ,Draggable,MotionPathPlugin






//section01_window01
const section01_window01 = gsap.timeline();

section01_window01.from(".section01_window01", { stagger: 0.1, x: -40, opacity: 0 });

ScrollTrigger.create({
  trigger: ".section01",
  start: "100px top", // 스크롤 시작 위치
  end: "500px center", // 끝 위치
  // markers:true,
  animation: section01_window01,
  scrub: 8,
});


//section01_window02
const section01_window02 = gsap.timeline();

section01_window01.from(".section01_window02", { stagger: 0.1, x: 40, opacity: 0 });

ScrollTrigger.create({
  trigger: ".section01",
  start: "800px top", // 스크롤 시작 위치
  end: "900px center", // 끝 위치
  // markers:true,
  animation: section01_window02,
  scrub: 8,
});


//section01_img
const section01_img1 = gsap.timeline();

section01_img1.from(".section01_img1", { stagger: 0.1, y: 30, opacity: 0 });
section01_img1.from(".section01_img2", { stagger: 0.1, y: 30, opacity: 0 });

ScrollTrigger.create({
  trigger: ".section01",
  start: "800px top", // 스크롤 시작 위치
  end: "1000px center", // 끝 위치
  // markers:true,
  animation: section01_img1,
  scrub: 4,
});


const section02_discovery = gsap.timeline({ repeat: -1, yoyo: true }); // repeat: -1로 무한 반복, yoyo: true로 반대로 돌아가게 설정

// opacity를 이용하여 깜빡이는 효과 (opacity를 0 -> 1 -> 0 으로 설정)
section02_discovery.fromTo(".section02_discovery", 
  { opacity: 0 },  // 시작 시 opacity 0
  { opacity: 1, duration: 0.3, stagger: 0.1 }  // opacity를 1로 변경하고, 0.3초 동안 애니메이션
).to(".section02_discovery", 
  { opacity: 0, duration: 0.3, stagger: 0.1 }  // opacity를 다시 0으로 변경
);

ScrollTrigger.create({
  trigger: ".section01", // 스크롤 트리거
  start: "top top", // 스크롤 시작 위치
  end: "bottom center", // 끝 위치
  animation: section02_discovery, // ScrollTrigger와 연동된 애니메이션
  scrub: false, // scrub을 false로 설정하여 스크롤에 따른 동기화 제거
});


//섹션3 텍스트
const folder = gsap.timeline();

folder.from(".section03_folder01", { stagger: 0.1, opacity: 0 });
folder.from(".section03_folder02", { stagger: 0.1, opacity: 0 });
folder.from(".section03_folder04", { stagger: 0.1, opacity: 0 });
folder.from(".section03_folder05", { stagger: 0.1, opacity: 0 });
folder.from(".section03_folder03", { stagger: 0.1, opacity: 0 });
folder.from(".section03_folder06", { stagger: 0.1, opacity: 0 });
folder.from(".section03_folder07", { stagger: 0.1, opacity: 0 });
folder.from(".section03_folder08", { stagger: 0.1, opacity: 0 });
folder.from(".section03_folder09", { stagger: 0.1, opacity: 0 });
folder.from(".section03_folder10", { stagger: 0.1, opacity: 0 });

ScrollTrigger.create({
  trigger: ".section03",
  start: "top top", // 스크롤 시작 위치
  end: "700px center", // 끝 위치
  // markers:true,
  animation: folder,
  scrub: 3,
});


ScrollTrigger.create({
  trigger: ".section05_img1",
  start: "-300px center",  // 스크롤 시작 위치
  end: "200px center",  // 끝 위치
  // markers:true,
  animation: gsap.to('.section05_img1',{width:'19vw'}),
  scrub: true,
});


ScrollTrigger.create({
  trigger: ".section05_img2",
  start: "-100px center",  // 스크롤 시작 위치
  end: "400px center",  // 끝 위치
  // markers:true,
  animation: gsap.to('.section05_img2',{width:'19vw'}),
  scrub: true,
});


ScrollTrigger.create({
  trigger: ".section05_img3",
  start: "-200 center",  // 스크롤 시작 위치
  end: "300px center",  // 끝 위치
  // markers:true,
  animation: gsap.to('.section05_img3',{width:'19vw'}),
  scrub: true,
});


ScrollTrigger.create({
  trigger: ".section05_img4",
  start: "-200 center",  // 스크롤 시작 위치
  end: "200px center",  // 끝 위치
  // markers:true,
  animation: gsap.to('.section05_img4',{width:'19vw'}),
  scrub: true,
});



//section06_window01
const section06_window01 = gsap.timeline();

section06_window01.from(".section06_window01", { stagger: 0.1, x: -40, opacity: 0 });

ScrollTrigger.create({
  trigger: ".section06",
  start: "400px top", // 스크롤 시작 위치
  end: "700px center", // 끝 위치
  // markers:true,
  animation: section06_window01,
  scrub: 6,
});


//section06_window02
const section06_window02 = gsap.timeline();

section06_window01.from(".section06_window02", { stagger: 0.1, x: 40, opacity: 0 });

ScrollTrigger.create({
  trigger: ".section06",
  start: "600px top", // 스크롤 시작 위치
  end: "900px center", // 끝 위치
  // markers:true,
  animation: section06_window02,
  scrub: 6,
});


//section07_pad01
const section07_pad01 = gsap.timeline();

section07_pad01.from(".section07_pad01", { stagger: 0.1, x: 40, opacity: 0 });

ScrollTrigger.create({
  trigger: ".section07",
  start: "-300px top", // 스크롤 시작 위치
  end: "100px center", // 끝 위치
  // markers:true,
  animation: section07_pad01,
  scrub: 6,
});


//section07_pad02
const section07_pad02 = gsap.timeline();

section07_pad02.from(".section07_pad02", { stagger: 0.1, x: -40, opacity: 0 });

ScrollTrigger.create({
  trigger: ".section07",
  start: "-200px top", // 스크롤 시작 위치
  end: "200px center", // 끝 위치
  // markers:true,
  animation: section07_pad02,
  scrub: 6,
});


//section07_pad03
const section07_pad03 = gsap.timeline();

section07_pad03.from(".section07_pad03", { stagger: 0.1, x: 40, opacity: 0 });

ScrollTrigger.create({
  trigger: ".section07",
  start: "300px top", // 스크롤 시작 위치
  end: "500px center", // 끝 위치
  // markers:true,  
  animation: section07_pad03,
  scrub: 6,
});


//section07_box
const section07_box = gsap.timeline();

section07_pad03.from(".section07_box", { stagger: 0.1, opacity: 0 });

ScrollTrigger.create({
  trigger: ".section07",
  start: "300px top", // 스크롤 시작 위치
  end: "500px center", // 끝 위치
  // markers:true,
  animation: section07_box,
  scrub: true,
});


//section08_text01
const section08_text01 = gsap.timeline();

section08_text01.from(".section08_text01", { stagger: 0.1, opacity: 0 });

ScrollTrigger.create({
  trigger: ".section08",
  start: "top top", // 스크롤 시작 위치
  end: "200px center", // 끝 위치
  // markers:true,
  animation: section08_text01,
  scrub: 6,
});



//연달아 올라오는 6줄
ScrollTrigger.create({
  trigger: ".section08",
  start: "1400px center",
  end: "1800px center", // 끝 위치
  // markers:true,
  animation: gsap.from(".line6", { y: 30, opacity: 0, stagger: 0.1 }),
  // pinSpacing:false,
  // pin: true,
  scrub: true,
});


//section08_text02
const section08_text02 = gsap.timeline();

section08_text02.from(".section08_text02", { stagger: 0.1, opacity: 0 });

ScrollTrigger.create({
  trigger: ".section08",
  start: "3200px center", // 스크롤 시작 위치
  end: "3400px center", // 끝 위치
  // markers:true,
  animation: section08_text02,
  scrub: 6,
});














markers();
