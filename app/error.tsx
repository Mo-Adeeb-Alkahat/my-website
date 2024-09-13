"use client";
import { NextPageContext } from "next";
import Link from "next/link";

interface ErrorProps {
  statusCode?: number;
}

const ErrorPage = ({ statusCode }: ErrorProps) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black">
      <h1 className="text-6xl font-bold mb-4 text-red-500">
        {statusCode || "Error"}
      </h1>
      <p className="text-lg mb-8">
        {statusCode
          ? `An error ${statusCode} occurred on the server.`
          : "An error occurred on the client."}
      </p>
      <Link href="/">
        <a className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Go Home
        </a>
      </Link>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
