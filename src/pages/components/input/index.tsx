import React from 'react';
import { NextPage } from 'next';

const InputPage: NextPage = () => {
  return (
    <div className="relative my-6">
      <input
        id="id-l12"
        type="text"
        name="id-l12"
        placeholder="your name"
        className="relative w-full h-12 px-4 pl-12 placeholder-transparent transition-all border-b outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
      />
      <label
        htmlFor="id-l12"
        className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-10 peer-placeholder-shown:text-base peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
      >
        Your name
      </label>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-6 h-6 top-3 left-4 stroke-slate-400 peer-disabled:cursor-not-allowed"
        fill="none"
        aria-hidden="true"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        aria-labelledby="title-3 description-3"
        role="graphics-symbol"
      >
        <title id="title-3">Check mark icon</title>
        <desc id="description-3"></desc>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
      <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
        <span>Text field with helper text</span>
        <span className="text-slate-500">1/10</span>
      </small>
    </div>
  );
};

export default InputPage;
