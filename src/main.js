import "../lib/smooth";
import "./styles/style.css";
import { markers } from "../lib/smooth";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Draggable } from "gsap/Draggable";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger);
// ,Draggable,MotionPathPlugin



ScrollTrigger.create({
    trigger: ".line_drawing",
    start: "top center",  // 스크롤 시작 위치
    end: "500px center",  // 끝 위치
    // markers:true,
    animation: gsap.to('.line_drawing',{height:'31vw'}),
    scrub: true,
  });





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
  markers:true,
  animation: folder,
  scrub: 3,
});











//연달아 올라오는 4줄
ScrollTrigger.create({
  trigger: ".section03",
  start: "1300px center",
  end: "+=300px",
  // markers:true,
  animation: gsap.from(".ani", { y: 30, opacity: 0, stagger: 0.1 }),
  // pinSpacing:false,
  // pin: true,
  scrub: true,
});


//밑에서 올라오는
ScrollTrigger.create({
  trigger: ".section04_motion",
  start: "-2000px center",  // 스크롤 시작 위치
  end: "-500px center",  // 끝 위치 (스크롤이 끝날 때)
  // markers: true,
  animation: gsap.fromTo('.section04_motion', 
    { height: 0, y: -50, opacity: 0 }, // 초기 상태: height 0, y 위치 위로 -50, opacity 0
    { height: '78vw', y: 0, opacity: 1, duration: 1 } // 애니메이션 후 상태: height 78vw, y 0, opacity 1
  ),
  scrub: true,
});




//연달아 나오는 원
ScrollTrigger.create({
  trigger: ".section05",
  start: "10px center",
  end: "+=300px",
  // markers:true,
  animation: gsap.from(".circle3", { y: 30, opacity: 0, stagger: 0.1 }),
  // pinSpacing:false,
  // pin: true,
  scrub: 5,
});



//섹션6 텍스트 왼
ScrollTrigger.create({
  trigger: ".section06",
  start: "-200px center",  // 스크롤 시작 위치
  end: "100px center",  // 끝 위치 (스크롤이 끝날 때)
  // markers: true,
  animation: gsap.fromTo('.left', 
    { width: 0, x: -1500, opacity: 1 }, // 초기 상태: height 0, y 위치 위로 -50, opacity 0
    { width: '78vw', x: 0, opacity: 1, duration: 1 } // 애니메이션 후 상태: height 78vw, y 0, opacity 1
  ),
  scrub: 3,
});



//섹션6 텍스트 오
ScrollTrigger.create({
  trigger: ".section06",
  start: "-200px center",  // 스크롤 시작 위치
  end: "100px center",  // 끝 위치 (스크롤이 끝날 때)
  // markers: true,
  animation: gsap.fromTo('.right  ', 
    { width: 0, x: -100, opacity: 1 }, // 초기 상태: height 0, y 위치 위로 -50, opacity 0
    { width: '78vw', x: 0, opacity: 1, duration: 1 } // 애니메이션 후 상태: height 78vw, y 0, opacity 1
  ),
  scrub: 3,
});




//오 박스 2
ScrollTrigger.create({
  trigger: ".section06",
  start: "800px center",
  end: "1400px center",
  // markers:true,
  animation: gsap.from(".right_box", { y: 30, opacity: 0, stagger: 0.1 }),
  // pinSpacing:false,
  // pin: true,
  scrub: 3,
});



//왼 박스 2
ScrollTrigger.create({
  trigger: ".section06",
  start: "1800px center",
  end: "2400px center",
  // markers:true,
  animation: gsap.from(".left_box", { y: 30, opacity: 0, stagger: 0.1 }),
  // pinSpacing:false,
  // pin: true,
  scrub: 3,
});


ScrollTrigger.create({
  trigger: ".section08_img",
  start: "top center",  // 스크롤 시작 위치
  end: "500px center",  // 끝 위치
  // markers:true,
  animation: gsap.to('.section08_img',{height:'31vw'}),
  scrub: true,
});







markers();
