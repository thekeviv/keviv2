import React, { useEffect } from "react";
import Head from "next/head";
import lottie from "lottie-web";
import leafAnimation from "../Assets/lotties/leaf-blow.json";
import Image from "next/image";

export default function Home() {
  let animationContainer = React.useRef(null);

  useEffect(() => {
    if (animationContainer.current) {
      const anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: leafAnimation,
      });
      return () => anim.destroy();
    }

    // optional clean up for unmounting
  }, []);
  return (
    <div>
      <Head>
        <title>Hello from Vivek!</title>
      </Head>

      <main
        style={{
          background: "#232121",
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "minmax(200px, 50%) 1fr",
          alignItems: "start",
        }}
      >
        <div
          className="animation"
          ref={animationContainer}
          style={{ minHeight: "40%" }}
        ></div>
        <div
          style={{
            color: "white",
            marginTop: "10%",
            marginLeft: "-30%",
            marginRight: "10%",
            lineHeight: "40px",
          }}
        >
          <div
            style={{
              marginLeft: "70%",
              marginTop: "-5%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <a
              href="https://github.com/thekeviv"
              target="_blank"
              alt="Vivek's Github Profile Link"
            >
              <Image
                src="/github.png"
                width={64}
                height={64}
                alt="Github Logo"
              ></Image>
            </a>

            <a
              href="https://www.linkedin.com/in/vivek-sharma-0a010110b/"
              target="_blank"
              alt="Vivek's LinkedIn Profile Link"
              style={{ marginLeft: "10px" }}
            >
              <Image
                src="/linkedin.png"
                width={64}
                height={64}
                alt="LinkedIn Logo"
              ></Image>
            </a>
          </div>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "25px",
              lineHeight: "64px",
              marginTop: "-50%",
            }}
          >
            Vivek Sharma
          </span>
          <br />
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "35px",
              lineHeight: "150%",
            }}
          >
            <strong>I'm a Web and Mobile Developer</strong>
            <br />
          </span>
          <p style={{ marginTop: "10%" }}>
            I am a fourth year computer science student at the University of
            Victoria in Canada currently living in Victoria, B.C. I enjoy
            working with React, ASP.Net, Xamarin, Python and Unity.
          </p>
          <br />
          <p>Currently exploring WebXR with AFrames and Babylon.</p>
          <button
            style={{
              background: "#78E185",
              padding: "10px",
              borderRadius: 15,
              marginLeft: "30%",
              marginTop: "10%",
              marginBottom: "5%",
              fontSize: "20px",
            }}
          >
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="mailto:hello@viveksharma.dev"
            >
              Contact Me
            </a>
          </button>
        </div>
      </main>
    </div>
  );
}
