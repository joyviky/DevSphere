import { useEffect, useState } from "react";
import axios from "axios";
import { studentProfile } from "../../datas/studentData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-20
      bg-black/60 hover:bg-primary/10 text-white p-3 rounded-full"
    >
      <FaChevronRight />
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-20
      bg-black/60 hover:bg-primary/20 text-white p-3 rounded-full"
    >
      <FaChevronLeft />
    </button>
  );
}
const getImageFromContent = (content) => {
  const match = content.match(/<img.*?src="(.*?)"/);
  return match ? match[1] : null;
};
const Blog_Section = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const usernames = studentProfile
    .filter((std) => std.mediumUsername && std.mediumUsername.trim() !== "")
    .map((std) => std.mediumUsername);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);

      try {
        const responses = await Promise.all(
          usernames.map(async (username) => {
            try {
              const rssUrl = encodeURIComponent(
                `https://medium.com/feed/@${username}`,
              );

              const { data } = await axios.get(
                `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`,
              );

              if (data.status !== "ok") {
                return [];
              }

              return (data.items || []).map((post) => ({
                ...post,
                author: username,
              }));
            } catch {
              return [];
            }
          }),
        );

        const allBlogs = responses
          .flat()
          .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

        setBlogs(allBlogs);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
        console.log(blogs);
      }
    };

    fetchBlogs();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const SliderComponent =
    typeof Slider === "function"
      ? Slider
      : Slider && Slider.default
        ? Slider.default
        : null;
  // console.log("Slider (raw):", Slider);
  // console.log("SliderComponent resolved:", SliderComponent);
 
  // for remaining blogs
  const remainingBlogs = blogs.slice(10);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10;
  const totalPage = Math.ceil(remainingBlogs.length / blogsPerPage);

  const lastIndex = currentPage * blogsPerPage;
  const firstIndex = lastIndex - blogsPerPage;
  const slicedBlogs = remainingBlogs.slice(firstIndex, lastIndex);
  return (
    <div className="outer">
      <div className="res">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            {/* left five blogs */}
            <div className="md:flex gap-5 md:justify-between">
              <div className=" md:h-[550px]   w-full grow max-w-[800px] pb-10">
                <SliderComponent {...settings} className="w-full h-full ">
                  {blogs.slice(0, 5).map((blog) => {
                    const image =
                      blog.thumbnail || getImageFromContent(blog.content);
                    return (
                      <a
                        href={blog.link}
                        className="block w-full h-100 md:h-[550px] border items-center justify-start border-secondary/60 px-5 py-2 rounded-sm   m-auto relative"
                      >
                        <img
                          src={image}
                          alt=""
                          className="rounded-sm absolute inset-0 w-full h-full object-cover -z-10 overflow-hidden"
                        />
                        <div className="flex flex-col absolute bottom-8">
                          <h2 className="text-xl ">{blog.title}</h2>
                          <div className="flex gap-3">
                            <p className="text-xs mt-5">{blog.author}</p>
                            <p className="text-xs mt-5">
                              {new Date(blog.pubDate).toDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="absolute bg-[#0000003a] inset-0"></div>
                      </a>
                    );
                  })}
                </SliderComponent>
              </div>
              <div className="">
                <h1 className="text-2xl capitalize">More top stories</h1>
                <div className="space-y-3 my-5">
                  {blogs.slice(5, 10).map((blog, ind) => {
                    const image =
                      blog.thumbnail || getImageFromContent(blog.content);
                    return (
                      <a
                        href={blog.link}
                        key={ind}
                        className="group border-2 border-secondary/20 hover:border-secondary/50 duration-300 transition-all p-1 rounded-2xl flex gap-2 max-w-lg"
                      >
                        <div className="w-32 h-20 flex-shrink-0 overflow-hidden rounded-2xl">
                          <img
                            src={image}
                            alt=""
                            className="w-full h-full object-cover rounded-2xl group-hover:scale-110 duration-300"
                          />
                        </div>
                        <div>
                          <h2 className="text-sm group-hover:text-secondary/80 duration-300">
                            {blog.title}
                          </h2>
                          <div className="flex justify-between">
                            <p className="text-xs mt-5 text-gray-400">
                              {blog.author}
                            </p>
                            <p className="text-xs mt-5 text-gray-400">
                              {new Date(blog.pubDate).toDateString()}
                            </p>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* sliced blogs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20">
              {slicedBlogs.map((blog, ind) => {
                const image =
                  blog.thumbnail || getImageFromContent(blog.content);
                return (
                  <a
                    href={blog.link}
                    key={ind}
                    className="group border rounded-sm border-secondary/20 hover:border-secondary/60 transition-all duration-300 flex flex-col py-2 px-5 bg-[#060b1d] max-w-[500px] justify-between"
                  >
                    <div className="w-full h-50 overflow-hidden">
                      <img
                        src={image}
                        alt=""
                        className="group-hover:scale-110 duration-300 "
                      />
                    </div>
                    <div className="flex flex-col justify-between gap-5">
                      <h2 className=" group-hover:text-secondary/80 duration-300 text-xl">
                        {blog.title}
                      </h2>
                      <div className="flex justify-between">
                        <p className="text-sm  text-gray-400">{blog.author}</p>
                        <p className="text-sm text-gray-400">
                          {new Date(blog.pubDate).toDateString()}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
            <div className="flex justify-center items-center gap-2 mt-10">
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="blogBtn"
                >
                  prev
                </button>
                {Array.from({ length: totalPage }, (_, index) => (
                  <button key={index} className="blogBtn" onClick={() => setCurrentPage(index + 1)}>
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPage}
                  className="blogBtn"
                >
                  next
                </button>
              </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog_Section;
