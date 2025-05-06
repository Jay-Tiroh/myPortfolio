import React from "react";
import Animate from "./Animate";
import Stack from "./Stack";
const MyProjects = () => {
  return (
    <div className="casual flex flex-col w-full max-w-[45rem]">
      <h1>My Projects</h1>
      {/* project list */}
      <div className="flex flex-col gap-5 my-5 semiformal shadow-xl">
        <Animate type="pop-x">
          <div className=" project-item ">
            <div className="description h-full order-2 md:order-1 p-5">
              <h2 className="">Space Tourism webite</h2>
              <h3 className="">Frontend Mentor Challenge</h3>
              <p className="project-p">
                A space exploration site. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Culpa, rerum!
              </p>
              <span className="project-span">Built with:</span>
              <Stack stack={["react", "tailwind", "css"]} />
            </div>
            <div className="img h-full overflow-hidden md:order-2 group relative">
              <img
                src="/assets/images/space.png"
                alt=""
                className="project-img"
              />
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none"></div>
              {/* visit? */}
              <div class="absolute bottom-4 left-4 z-10 group-hover:text-white text-transparent  flex group-hover:fill-white fill-transparent items-center gap-2 transition-colors duration-500 ease-in-out">
                <span class="text-md  ">Visit site </span>
                <span>
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 122.6 122.88"
                    className="size-4 fill-inherit"
                  >
                    <g>
                      <path d="M110.6,72.58c0-3.19,2.59-5.78,5.78-5.78c3.19,0,5.78,2.59,5.78,5.78v33.19c0,4.71-1.92,8.99-5.02,12.09 c-3.1,3.1-7.38,5.02-12.09,5.02H17.11c-4.71,0-8.99-1.92-12.09-5.02c-3.1-3.1-5.02-7.38-5.02-12.09V17.19 C0,12.48,1.92,8.2,5.02,5.1C8.12,2,12.4,0.08,17.11,0.08h32.98c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78H17.11 c-1.52,0-2.9,0.63-3.91,1.63c-1.01,1.01-1.63,2.39-1.63,3.91v88.58c0,1.52,0.63,2.9,1.63,3.91c1.01,1.01,2.39,1.63,3.91,1.63h87.95 c1.52,0,2.9-0.63,3.91-1.63s1.63-2.39,1.63-3.91V72.58L110.6,72.58z M112.42,17.46L54.01,76.6c-2.23,2.27-5.89,2.3-8.16,0.07 c-2.27-2.23-2.3-5.89-0.07-8.16l56.16-56.87H78.56c-3.19,0-5.78-2.59-5.78-5.78c0-3.19,2.59-5.78,5.78-5.78h26.5 c5.12,0,11.72-0.87,15.65,3.1c2.48,2.51,1.93,22.52,1.61,34.11c-0.08,3-0.15,5.29-0.15,6.93c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78c0-0.31,0.08-3.32,0.19-7.24C110.96,30.94,111.93,22.94,112.42,17.46L112.42,17.46z" />
                    </g>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </Animate>
        <Animate type="pop-x">
          <div className=" project-item ">
            <div className="description h-full p-5 order-2">
              <h2 className="">Basic Calculator</h2>
              <h3 className="">Personal Project</h3>
              <p className="project-p">
                A simple calculator app. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Culpa, rerum!
              </p>
              <span className="project-span">Built with:</span>
              <Stack stack={["html", "js", "tailwind", "css"]} />
            </div>
            <div className="img h-full relative overflow-hidden group">
              <a
                href="https://simple-calculator-gbgi.vercel.app/"
                target="_blank"
              >
                <img
                  src="/assets/images/calculator.png"
                  alt=""
                  className="project-img"
                />
                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none"></div>
                {/* visit? */}
                <div class="absolute bottom-4 left-4 z-10 group-hover:text-white text-transparent  flex group-hover:fill-white fill-transparent items-center gap-2 transition-colors duration-500 ease-in-out">
                  <span class="text-md">Visit site </span>
                  <span>
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 122.6 122.88"
                      className="size-4 fill-inherit"
                    >
                      <g>
                        <path d="M110.6,72.58c0-3.19,2.59-5.78,5.78-5.78c3.19,0,5.78,2.59,5.78,5.78v33.19c0,4.71-1.92,8.99-5.02,12.09 c-3.1,3.1-7.38,5.02-12.09,5.02H17.11c-4.71,0-8.99-1.92-12.09-5.02c-3.1-3.1-5.02-7.38-5.02-12.09V17.19 C0,12.48,1.92,8.2,5.02,5.1C8.12,2,12.4,0.08,17.11,0.08h32.98c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78H17.11 c-1.52,0-2.9,0.63-3.91,1.63c-1.01,1.01-1.63,2.39-1.63,3.91v88.58c0,1.52,0.63,2.9,1.63,3.91c1.01,1.01,2.39,1.63,3.91,1.63h87.95 c1.52,0,2.9-0.63,3.91-1.63s1.63-2.39,1.63-3.91V72.58L110.6,72.58z M112.42,17.46L54.01,76.6c-2.23,2.27-5.89,2.3-8.16,0.07 c-2.27-2.23-2.3-5.89-0.07-8.16l56.16-56.87H78.56c-3.19,0-5.78-2.59-5.78-5.78c0-3.19,2.59-5.78,5.78-5.78h26.5 c5.12,0,11.72-0.87,15.65,3.1c2.48,2.51,1.93,22.52,1.61,34.11c-0.08,3-0.15,5.29-0.15,6.93c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78c0-0.31,0.08-3.32,0.19-7.24C110.96,30.94,111.93,22.94,112.42,17.46L112.42,17.46z" />
                      </g>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </Animate>
        <Animate type="pop-x">
          <div className=" project-item ">
            <div className="description h-full p-5 order-2 md:order-1">
              <h2 className="">Product List with Cart</h2>
              <h3 className="">Frontend Mentor Challenge</h3>
              <p className="project-p">
                A simple shopping menu with cart. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Culpa, rerum!
              </p>
              <span className="project-span">Built with:</span>
              <Stack stack={["html", "js", "tailwind", "css"]} />
            </div>
            <div className="img relative h-full overflow-hidden md:order-2 order-1 group">
              <a
                href="https://chizuru-product-list.vercel.app/"
                target="_blank"
              >
                <img
                  src="/assets/images/product-list.png"
                  alt=""
                  className="project-img"
                />
                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 pointer-events-none"></div>
                {/* visit? */}
                <div class="absolute bottom-4 left-4 z-10 group-hover:text-white text-transparent  flex group-hover:fill-white fill-transparent items-center gap-2 transition-colors duration-500 ease-in-out">
                  <span class="text-md  ">Visit site </span>
                  <span>
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 122.6 122.88"
                      className="size-4 fill-inherit"
                    >
                      <g>
                        <path d="M110.6,72.58c0-3.19,2.59-5.78,5.78-5.78c3.19,0,5.78,2.59,5.78,5.78v33.19c0,4.71-1.92,8.99-5.02,12.09 c-3.1,3.1-7.38,5.02-12.09,5.02H17.11c-4.71,0-8.99-1.92-12.09-5.02c-3.1-3.1-5.02-7.38-5.02-12.09V17.19 C0,12.48,1.92,8.2,5.02,5.1C8.12,2,12.4,0.08,17.11,0.08h32.98c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78H17.11 c-1.52,0-2.9,0.63-3.91,1.63c-1.01,1.01-1.63,2.39-1.63,3.91v88.58c0,1.52,0.63,2.9,1.63,3.91c1.01,1.01,2.39,1.63,3.91,1.63h87.95 c1.52,0,2.9-0.63,3.91-1.63s1.63-2.39,1.63-3.91V72.58L110.6,72.58z M112.42,17.46L54.01,76.6c-2.23,2.27-5.89,2.3-8.16,0.07 c-2.27-2.23-2.3-5.89-0.07-8.16l56.16-56.87H78.56c-3.19,0-5.78-2.59-5.78-5.78c0-3.19,2.59-5.78,5.78-5.78h26.5 c5.12,0,11.72-0.87,15.65,3.1c2.48,2.51,1.93,22.52,1.61,34.11c-0.08,3-0.15,5.29-0.15,6.93c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78c0-0.31,0.08-3.32,0.19-7.24C110.96,30.94,111.93,22.94,112.42,17.46L112.42,17.46z" />
                      </g>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </Animate>
      </div>

      <Animate type="pop-y">
        <div className=" project-btn  semiformal m-auto ">
          View All Projects
        </div>
      </Animate>
    </div>
  );
};

export default MyProjects;
