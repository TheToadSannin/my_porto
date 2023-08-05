import React, { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const divs = document.querySelector("main").getElementsByTagName("div");
    let zValue = [500, 50, -400, -850, -1300];
    let arr = Array.from(divs);
    const pbar = document.querySelector(".progress_bar");
    // let progressw = 0;
    arr.forEach((div, index) => {
      window.addEventListener("wheel", (e) => {
        let increase = (zValue[0]/1900)*100*15;
        pbar.style.width = increase + "px";
        if (e.deltaY < 0 ) {
          div.style.transform = `perspective(500px) translateZ(${zValue[index]}px)`;
          zValue[index] = zValue[index] + 50;
          
        } else {
          if(zValue[0]>150 )
          {
            div.style.transform = `perspective(500px) translateZ(${zValue[index]}px)`;
            zValue[index] = zValue[index] - 50;
          }
            
        }
      });
    });
  });

  return (
    <main>
      <ProgressBar/>
      <div className="floatingdiv">
        <code><span className="grey tag"><p>&lt;h1&gt;</p></span>
        <h1>"<span className="blue"> Gaurav Panwar </span>"</h1><span className="grey tag"><p>&lt;/h1&gt;</p></span></code>
      </div>
      <div className="floatingdiv">
        <code><span className="grey tag"><p>&lt;Script&gt;</p></span>
        <p><span className="darkpurple">About</span> : &#123; <br />
                 &nbsp;&nbsp;&nbsp;&nbsp; <span className="lightpurple">Age</span> : " <span className="darkorange">Twenty One</span> ",<br />
                 &nbsp;&nbsp;&nbsp;&nbsp; <span className="lightpurple">Email</span>: " <spav className="darkorange">gaurav@gmail.com</spav> " <br />
                 &#125;
        </p>
        <span className="grey tag"><p>&lt;/Script&gt;</p></span></code>
      </div>
      <div className="floatingdiv">
      <code><span className="grey tag"><p>&lt;Script&gt;</p></span>
        <p><span className="blue">const </span><span className="lightpurple">Skills</span> = [ <br />
                 &nbsp;&nbsp;&nbsp;&nbsp;" <span className="darkorange">Problem Solving</span> ",<br />
                 &nbsp;&nbsp;&nbsp;&nbsp;" <span className="darkorange">Node Js</span> ",<br />
                 &nbsp;&nbsp;&nbsp;&nbsp;" <span className="darkorange">Front-end Web development</span> ",<br />
                 &nbsp;&nbsp;&nbsp;&nbsp;" <spav className="darkorange">Back-end Web development</spav> " <br />
                 ]
        </p>
        <span className="grey tag"><p>&lt;/Script&gt;</p></span></code>
      </div>
      <div className="floatingdiv"><code><span className="grey tag"><p>&lt;p class = " more_About_Me "&gt;</p></span>
      <p className="chota">Hello! I'm Gaurav Panwar, a Computer Science student with a passion for web development. I love creating captivating websites that excel in both aesthetics and functionality. Proficient in both frontend and backend development, I enjoy combining my technical skills with a user-centric approach to deliver seamless user experiences. Excited to grow and make a positive impact as a web developer.
      </p>
      <span className="grey tag"><p>&lt;/p&gt;</p></span></code></div>
      <div className="floatingdiv"><code><span className="grey tag"><p>&lt;p class = " favouriteQuote "&gt;</p></span>
        <p>" <span className="blue">IF YOU'RE NOT COMPETENT AS AN AI, YOU'RE USELESS</span> "</p>
      
      
      <span className="grey tag"><p>&lt;/p&gt;</p></span></code></div>
    </main>
  );
};

const ProgressBar = () => {
  return(
    <span id="pbar" className="progress_bar"></span>
  )
}

export default Home;
