"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const JobListing = () => {
  const [jobs, setJobs] = useState([]) as any;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null) as any;

  useEffect(() => {
    const fetchJobs = async () => {
      const url = "https://www.searchapi.io/api/v1/search";
      const params = {
        engine: "google_jobs",
        q: "AI Engineer",
        location: "New York,United States",
        api_key: "xU2F7S7YrHmuu4bm4o3VqgBs",
      };

      try {
        const response = await axios.get(url, { params });
        setJobs(response.data.jobs);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Job Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {jobs.map((job: any, index: any) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <img
              className="w-12 h-12 mb-4 object-cover object-center p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src={job.thumbnail}
              alt=""
            />
            <h2 className="text-lg font-bold mb-2">{job.title}</h2>
            <p className="text-gray-700 mb-4">{job.company_name}</p>
            <p className="text-gray-600 mb-4">{job.location}</p>
            <Link href={`${job.company_web_results_link}`} target="_blank">
              <span className="text-blue-500 hover:underline cursor-pointer">
                View Job
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListing;
