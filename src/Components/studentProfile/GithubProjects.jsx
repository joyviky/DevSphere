import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaGithub, FaRegStar } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";

const GithubProjects = ({ student }) => {
  const [totalRepo, setTotalRepo] = useState([]);
  useEffect(() => {
    const fetchGithubUser = async () => {
      if (!student?.githubUsername) return;
      try {
        const response = await axios.get(
          `https://api.github.com/users/${student?.githubUsername}/repos`,
        );

        setTotalRepo(response.data || []);
      } catch (err) {
        console.log(err);
      }
    };

    fetchGithubUser();
  }, [student]);
  console.log(totalRepo);

  return (
    <div className="bg-black text-white py-10">
      <div className="w-full max-w-7xl mx-auto bg-purple-400/10 p-10">
        <h1 className="text-3xl font-semibold mb-10">Github Repos</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center">
          {totalRepo.map((repo) => (
            <SingleProject key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </div>
  );
};
function SingleProject({ repo }) {
  return (
    <a href={repo.html_url} target="_blank " className="group inline-block w-80 mx-auto">
      <div className="text-white p-3 border border-secondary rounded-md max-w-80 flex items-center gap-3 h-25 transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:border-purple-400 group-hover:shadow-[0_10px_30px_rgba(168,85,247,0.4)] group-hover:bg-purple-400/30 bg-black">
        <div className="bg-purple-300 p-2 rounded-sm">
          <FaGithub className="text-2xl " />
        </div>
        <div>
          <h1 className="text-sm">{repo.name}</h1>
          <p className="text-[10px] text-secondary">{repo.language}</p>
          <div className="flex gap-10 mt-4">
            <div className="flex items-center gap-2">
              <FaRegStar />
              <span>{repo.stargazers_count}</span>
            </div>
            <div className="flex items-center gap-2 ">
              <FiCalendar />
              <span>
                {new Date(repo.updated_at).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default GithubProjects;
