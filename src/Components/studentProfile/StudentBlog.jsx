import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import axios from "axios";

const getImageFromContent = (content) => {
  const match = content.match(/<img.*?src="(.*?)"/);
  return match ? match[1] : null;
};
const StudentBlog = ({ username }) => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const fetchMediumBlogs = async () => {
      try {
        const rssUrl = `https://medium.com/feed/@${username}`;

        const response = await axios.get(
          `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`,
        );

        setBlog(response.data.items || []);
      } catch (err) {
        console.log(err);
      }
    };
    if (username) {
      fetchMediumBlogs();
    }
  }, [username]);
  console.log(blog);
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} viewport={{ once: true }} className="bg-black text-white pt-10">
      <div className="w-full max-w-7xl mx-auto bg-purple-400/10 p-10">
        <h1 className="text-3xl font-semibold mb-10">About Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
            {
                blog.map((item)=>{
                    const image= item.thumbnail || getImageFromContent(item.content);
                    return (
                    <a href={item.link} className="flex gap-5 border items-center justify-start border-secondary px-5 py-2 rounded-sm max-w-100 h-30 m-auto">
                      <img src={image} alt="" className="w-25 h-20 object-cover  rounded-sm"/>
                      <div className="flex flex-col ">
                        <h2 className="text-sm ">{item.title}</h2>
                        <p className="text-xs mt-5">{new Date(item.pubDate).toDateString()}</p>
                      </div>
                    </a>
                )}
            )
            }
        </div>
      </div>
    </motion.div>
  );
};

export default StudentBlog;
