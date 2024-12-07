"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Blog {
  id: number;
  title: string;
  content: string;
  image: string;
}

const defaultBlogs: Blog[] = [
  {
    id: 1,
    title: "Ocean",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facilis perferendis a maiores perspiciatis quo exercitationem officiis numquam temporibus.",
    image: "/fish.jpg",
  },
  {
    id: 2,
    title: "Sunset",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facilis perferendis a maiores perspiciatis quo exercitationem officiis numquam temporibus.",
    image: "/sunset.jpg",
  },
  {
    id: 3,
    title: "Forest",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facilis perferendis a maiores perspiciatis quo exercitationem officiis numquam temporibus.",
    image: "/forest.jpg",
  },
  {
    id: 4,
    title: "Travel",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facilis perferendis a maiores perspiciatis quo exercitationem officiis numquam temporibus.",
    image: "/Travel.jpg",
  },
];

const CustomizeBlogs = () => {
  const [blogs, setBlogs] = useState(defaultBlogs);
  const [newBlog, setNewBlog] = useState({ title: "", content: "", image: "" });
  const [editMode, setEditMode] = useState(false);
  const [editableBlog, setEditableBlog] = useState({
    id: 0,
    title: "",
    content: "",
    image: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedEditFile, setSelectedEditFile] = useState<File | null>(null);

  useEffect(() => {
    const storedBlogs = localStorage.getItem("blogs");
    if (storedBlogs) {
      setBlogs(JSON.parse(storedBlogs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAddBlog = () => {
    const newBlogObject = {
      id: blogs.length + 1,
      title: newBlog.title,
      content: newBlog.content,
      image: selectedFile ? URL.createObjectURL(selectedFile) : "",
    };
    setBlogs([...blogs, newBlogObject]);
    setNewBlog({ title: "", content: "", image: "" });
    setSelectedFile(null);
  };

  const handleEditBlog = (blog: Blog) => {
    setEditMode(true);
    setEditableBlog(blog);
    scrollToTop(); // Scroll to the top of the page
  };

  const handleUpdateBlog = () => {
    const updatedBlogs = blogs.map((blog) => {
      if (blog.id === editableBlog.id) {
        return {
          ...blog,
          title: editableBlog.title,
          content: editableBlog.content,
          image: selectedEditFile ? URL.createObjectURL(selectedEditFile) : editableBlog.image,
        };
      }
      return blog;
    });
    setBlogs(updatedBlogs);
    setEditMode(false);
    setSelectedEditFile(null);
  };

  const handleDeleteBlog = (id: number) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleEditFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedEditFile(e.target.files[0]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4" id="blog">
      <h1 className="text-3xl font-bold mb-4">Create Your Own Blog</h1>
      {editMode ? (
        <div>
          <input
            type="text"
            value={editableBlog.title}
            onChange={(e) => setEditableBlog({ ...editableBlog, title: e.target.value })}
            className="block w-full p-2 mb-2 border border-gray-300 rounded-lg"
            placeholder="Title"
          />
          <textarea
            value={editableBlog.content}
            onChange={(e) => setEditableBlog({ ...editableBlog, content: e.target.value })}
            className="block w-full p-2 mb-2 border border-gray-300 rounded-lg"
            placeholder="Content"
          />
          <input
            type="file"
            onChange={handleEditFileChange}
            className="block w-full p-2 mb-2 border border-gray-300 rounded-lg"
          />
          {selectedEditFile && (
            <Image
              src={URL.createObjectURL(selectedEditFile)}
              alt="Selected Edit Image"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
          )}
          <button onClick={handleUpdateBlog} className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg">
            Update Blog
          </button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={newBlog.title}
            onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
            className="block w-full p-2 mb-2 border border-gray-300 rounded-lg"
            placeholder="Title"
          />
          <textarea
            value={newBlog.content}
            onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
            className="block w-full p-2 mb-2 border border-gray-300 rounded-lg"
            placeholder="Content"
          />
          <input type="file" onChange={handleFileChange} className="block w-full p-2 mb-2 border border-gray-300 rounded-lg" />
          {selectedFile && (
            <Image
              src={URL.createObjectURL(selectedFile)}
              alt="Selected Image"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
          )}
          <button onClick={handleAddBlog} className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg">
            Add Blog
          </button>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-md p-4">
            {blog.image ? (
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={250}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            ) : (
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4"></div>
            )}
            <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
            <p className="mb-4">{blog.content}</p>
            <button
              onClick={() => handleEditBlog(blog)}
              className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-lg mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteBlog(blog.id)}
              className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomizeBlogs;
