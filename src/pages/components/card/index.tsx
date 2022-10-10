import React from 'react';
import { NextPage } from 'next';

import Card from './Card';

const Component: NextPage = () => {
  return (
    <div className="grid grid-cols-3 gap-8 p-8">
      {/* normal card */}
      <Card>
        <Card.Header classNames="border-b">
          <h3 className="text-xl font-medium text-slate-700">
            Normal card with header
          </h3>
          <p className="text-sm text-slate-400"> By Quy, jun 3 2023</p>
        </Card.Header>
        <Card.Body>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          autem cumque dolores dolorum impedit maiores minus qui saepe sapiente,
          veniam.
        </Card.Body>
      </Card>

      {/* Card with extra */}
      <Card>
        <Card.Header
          classNames="border-b"
          extra={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          }
        >
          <h3 className="text-xl font-medium text-slate-700">
            Header with extra and long text
          </h3>
          <p className="text-sm text-slate-400"> By Quy, jun 3 2023</p>
        </Card.Header>
        <Card.Body>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          autem cumque dolores dolorum impedit maiores minus qui saepe sapiente,
          veniam.
        </Card.Body>
      </Card>

      {/* Card with image top */}
      <Card>
        <Card.Image src="https://picsum.photos/id/69/800/600" />
        <Card.Header>
          <h3 className="text-xl font-medium text-slate-700">
            Card with image top
          </h3>
          <p className="text-sm text-slate-400"> By George, jun 3 2023</p>
        </Card.Header>
      </Card>

      {/* Card with actions */}
      <Card>
        <Card.Image src="https://picsum.photos/id/69/800/600" />
        <Card.Body>
          <h3 className="text-xl font-medium text-slate-700">
            Card with image, title, subtitle, text & action button
          </h3>
          <p className="text-sm text-slate-400"> By Quy, jun 3 2022</p>
          <p className="mt-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            dolore doloribus expedita ipsum libero non porro provident
            repudiandae ullam veritatis.
          </p>
        </Card.Body>
        <Card.Footer>
          <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded justify-self-center whitespace-nowrap text-emerald-500 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent">
            <span>Read more</span>
          </button>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Header>
          <div className="flex gap-4">
            <a
              href="#"
              className="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full"
            >
              <img
                src="https://i.pravatar.cc/48?img=25"
                alt="user name"
                title="user name"
                className="max-w-full rounded-full"
              />
            </a>
            <div>
              <h3 className="text-xl font-medium text-slate-700">
                Looking back at time
              </h3>
              <p className="text-sm text-slate-400"> By George, jun 3 2023</p>
            </div>
          </div>
        </Card.Header>
        <Card.Image src="https://picsum.photos/id/69/800/600" />
        <Card.Body>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
          asperiores consequuntur corporis cupiditate ipsa iste necessitatibus
          nulla officia quaerat. Ea.
        </Card.Body>
        <Card.Footer>
          <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded justify-self-center whitespace-nowrap text-emerald-500 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent">
            <span className="relative only:-mx-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                role="graphics-symbol"
                aria-labelledby="title-81 desc-81"
              >
                <title id="title-81">Icon title</title>
                <desc id="desc-81">
                  A more detailed description of the icon
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </span>
          </button>
          <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded justify-self-center whitespace-nowrap text-emerald-500 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent">
            <span className="relative only:-mx-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                role="graphics-symbol"
                aria-labelledby="title-82 desc-82"
              >
                <title id="title-82">Icon title</title>
                <desc id="desc-82">
                  A more detailed description of the icon
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </span>
          </button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Component;
