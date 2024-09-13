"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [captcha, setCaptcha] = useState<string | null>(null);
  const inNameRef = useRef<HTMLInputElement>(null);
  const inEmailRef = useRef<HTMLInputElement>(null);
  const inSubjectRef = useRef<HTMLInputElement>(null);
  const inMessageRef = useRef<HTMLTextAreaElement>(null);
  const [emailToSend, setEmailToSend] = useState<{
    fname: string;
    email: string;
    subject: string;
    message: string;
  }>({ fname: "", email: "", subject: "", message: "" });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isValidEmail = (email: string): boolean => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const handleForm = () => {
    setIsLoading(true);
    const fname: string = inNameRef.current!.value;
    const email: string = inEmailRef.current!.value;
    const subject: string = inSubjectRef.current!.value;
    const message: string = inMessageRef.current!.value;

    if (!fname || !email || !subject || !message) {
      console.log("invalid");
      return;
    }
    if (!isValidEmail(email)) {
      console.log("invalid email");
      return;
    }
    if (!captcha) {
      console.log("invalid captcha");
      return;
    }

    emailjs
      .send(
        process.env.NEXT_PUBLIC_emailJsServiceID!,
        process.env.NEXT_PUBLIC_emailJsTemplateID!,
        { fname, email, subject, message },
        {
          publicKey: process.env.NEXT_PUBLIC_emailJsPublicKey!,
        }
      )
      .then(
        () => {
          setIsLoading(false);
          alert("Message was sent succefully!");
        },
        (error) => {
          setIsLoading(false);

          alert("Something went wrong");
        }
      );
  };

  return (
    <div
      role="form"
      id="Contact"
      className="  flex flex-col gap-3 rounded border-2 border-gray-50 mx-auto p-4 w-3/4 mb-10 "
    >
      <div role="container" className="flex gap-3">
        <h2 className="text-4xl underline mb-5">Contact me </h2>
        <a href="#">
          <Image
            className=""
            alt="github"
            src="/github.svg"
            width={45}
            height={45}
          ></Image>
        </a>
        <a href="#">
          <Image
            className=""
            alt="LinkedIn"
            src="/linkedin.svg"
            width={50}
            height={50}
          ></Image>
        </a>
      </div>

      <label className="large-label" htmlFor="name">
        Name : <br />
        <input
          ref={inNameRef}
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          required
          className="bg-stone-900 rounded-sm w-8/12 sm:w-6/12 mt-1 p-1"
        />
      </label>

      <label className="large-label" htmlFor="email">
        Email : <br />
        <input
          id="email"
          ref={inEmailRef}
          name="email"
          type="email"
          placeholder="Enter your email address"
          required
          className="bg-stone-900 rounded-sm w-8/12 sm:w-6/12 mt-1 p-1"
        />
      </label>

      <label className="large-label" htmlFor="subject">
        Subject : <br />
        <input
          ref={inSubjectRef}
          id="subject"
          name="subject"
          type="text"
          placeholder="Enter subject"
          required
          className="bg-stone-900 rounded-sm w-8/12 sm:w-6/12 mt-1 p-1"
        />
      </label>

      <label className="large-label" htmlFor="message">
        message : <br />
        <textarea
          ref={inMessageRef}
          id="message"
          name="message"
          placeholder="Write your message"
          className="bg-stone-900 rounded-sm w-11/12 mt-1 p-1  h-56 "
        ></textarea>
      </label>
      <div className="flex flex-col items-center sm:flex-row sm:justify-around">
        <input
          type="button"
          value="Send"
          className="bg-purple-950  shadow-lg shadow-purple-800/50 border-double border-4 border-purple-500  w-36 h-20  text-center rounded-md mt-1 mb-8 flex items-center justify-center hover:cursor-pointer "
          onClick={handleForm}
        />
        {isLoading && (
          <p className=" animate-pulse text-white-700 text-2xl mb-2 bg-purple-800 rounded-md p-1">
            Sending please wait
          </p>
        )}

        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_CAPTCHA_KEY!}
          onChange={setCaptcha}
          size="compact"
          className="max-w-full"
        ></ReCAPTCHA>
      </div>
    </div>
  );
};

export default Contact;
