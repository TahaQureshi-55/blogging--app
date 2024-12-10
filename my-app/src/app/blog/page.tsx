// // "use client";

// // import { useState, useEffect, useRef } from "react";

// // interface Blog {
// //   id: number;
// //   title: string;
// //   content: string;
// //   image: string;
// // }

// // const defaultBlogs: Blog[] = [
// //   {
// //     id: 1,
// //     title: "Ocean",
// //     content:
// //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facilis perferendis a maiores perspiciatis quo exercitationem officiis numquam temporibus.",
// //     image: "/fish.jpg",
// //   },
// //   {
// //     id: 2,
// //     title: "Sunset",
// //     content:
// //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facilis perferendis a maiores perspiciatis quo exercitationem officiis numquam temporibus.",
// //     image: "/sunset.jpg",
// //   },
// //   {
// //     id: 3,
// //     title: "Forest",
// //     content:
// //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facilis perferendis a maiores perspiciatis quo exercitationem officiis numquam temporibus.",
// //     image: "/forest.jpg",
// //   },
// //   {
// //     id: 4,
// //     title: "Travel",
// //     content:
// //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facilis perferendis a maiores perspiciatis quo exercitationem officiis numquam temporibus.",
// //     image: "/travel.jpg",
// //   },
// // ];

// // const CustomizeBlogs = () => {
// //   const [blogs, setBlogs] = useState<Blog[]>(defaultBlogs);
// //   const [newBlog, setNewBlog] = useState({ title: "", content: "", image: "" });
// //   const [editMode, setEditMode] = useState(false);
// //   const [editableBlog, setEditableBlog] = useState<Blog | null>(null);
// //   const [selectedFile, setSelectedFile] = useState<File | null>(null);
// //   const [viewDetail, setViewDetail] = useState(false);
// //   const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
// //   const detailRef = useRef<HTMLDivElement | null>(null); // Ref for scrolling to detail view

// //   // Load blogs from localStorage
// //   useEffect(() => {
// //     const storedBlogs = localStorage.getItem("blogs");
// //     if (storedBlogs) {
// //       setBlogs(JSON.parse(storedBlogs));
// //     }
// //   }, []);

// //   // Save blogs to localStorage
// //   useEffect(() => {
// //     localStorage.setItem("blogs", JSON.stringify(blogs));
// //   }, [blogs]);

// //   // Scroll to detail view when `viewDetail` is set
// //   useEffect(() => {
// //     if (viewDetail && detailRef.current) {
// //       detailRef.current.scrollIntoView({ behavior: "smooth" });
// //     }
// //   }, [viewDetail]);

// //   const handleAddBlog = () => {
// //     const newBlogObject: Blog = {
// //       id: blogs.length + 1,
// //       title: newBlog.title,
// //       content: newBlog.content,
// //       image: selectedFile ? URL.createObjectURL(selectedFile) : "",
// //     };
// //     setBlogs([...blogs, newBlogObject]);
// //     setNewBlog({ title: "", content: "", image: "" });
// //     setSelectedFile(null);
// //   };

// //   const handleEditBlog = (blog: Blog) => {
// //     setEditMode(true);
// //     setEditableBlog(blog);
// //     window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top for editing
// //   };

// //   const handleUpdateBlog = () => {
// //     if (!editableBlog) return;
// //     const updatedBlogs = blogs.map((blog) =>
// //       blog.id === editableBlog.id
// //         ? {
// //             ...blog,
// //             title: editableBlog.title,
// //             content: editableBlog.content,
// //             image: selectedFile ? URL.createObjectURL(selectedFile) : blog.image,
// //           }
// //         : blog
// //     );
// //     setBlogs(updatedBlogs);
// //     setEditMode(false);
// //     setEditableBlog(null);
// //     setSelectedFile(null);
// //   };

// //   const handleDeleteBlog = (id: number) => {
// //     const updatedBlogs = blogs.filter((blog) => blog.id !== id);
// //     setBlogs(updatedBlogs);
// //   };

// //   const handleViewDetail = (blog: Blog) => {
// //     setSelectedBlog(blog);
// //     setViewDetail(true);
// //   };

// //   const handleHideDetail = () => {
// //     setViewDetail(false);
// //     setSelectedBlog(null);
// //   };

// //   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     if (e.target.files) {
// //       setSelectedFile(e.target.files[0]);
// //     }
// //   };

// //   return (
// //     <div className="max-w-7xl mx-auto p-4" id="blog">
// //       <h1 className="text-3xl font-bold mb-4">Create Your Own Blog</h1>

// //       {editMode && editableBlog ? (
// //         <div>
// //           <input
// //             type="text"
// //             value={editableBlog.title}
// //             onChange={(e) =>
// //               setEditableBlog({ ...editableBlog, title: e.target.value })
// //             }
// //             className="block w-full p-2 mb-2 border border-gray-300 rounded-lg"
// //             placeholder="Title"
// //           />
// //           <textarea
// //             value={editableBlog.content}
// //             onChange={(e) =>
// //               setEditableBlog({ ...editableBlog, content: e.target.value })
// //             }
// //             className="block w-full p-2 mb-2 border border-gray-300 rounded-lg"
// //             placeholder="Content"
// //           />
// //           <input
// //             type="file"
// //             onChange={handleFileChange}
// //             className="block w-full p-2 mb-2 border border-gray-300 rounded-lg"
// //           />
// //           <button
// //             onClick={handleUpdateBlog}
// //             className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg"
// //           >
// //             Update Blog
// //           </button>
// //         </div>
// //       ) : (
// //         <div>
// //           <input
// //             type="text"
// //             value={newBlog.title}
// //             onChange={(e) =>
// //               setNewBlog({ ...newBlog, title: e.target.value })
// //             }
// //             className="block w-full p-2 mb-2 border border-gray-300 rounded-lg"
// //             placeholder="Title"
// //           />
// //           <textarea
// //             value={newBlog.content}
// //             onChange={(e) =>
// //               setNewBlog({ ...newBlog, content: e.target.value })
// //             }
// //             className="block w-full p-2 mb-2 border border-gray-300 rounded-lg"
// //             placeholder="Content"
// //           />
// //           <input
// //             type="file"
// //             onChange={handleFileChange}
// //             className="block w-full p-2 mb-2 border border-gray-300 rounded-lg"
// //           />
// //           <button
// //             onClick={handleAddBlog}
// //             className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg"
// //           >
// //             Add Blog
// //           </button>
// //         </div>
// //       )}

// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
// //         {blogs.map((blog) => (
// //           <div key={blog.id} className="bg-white rounded-lg shadow-md p-4">
// //             {blog.image && (
// //               <img
// //                 src={blog.image}
// //                 alt={blog.title}
// //                 className="w-full h-64 object-cover rounded-lg mb-4"
// //               />
// //             )}
// //             <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
// //             <p className="mb-4">{blog.content}</p>
// //             <button
// //               onClick={() => handleEditBlog(blog)}
// //               className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-lg mr-2"
// //             >
// //               Edit
// //             </button>
// //             <button
// //               onClick={() => handleDeleteBlog(blog.id)}
// //               className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg mr-2"
// //             >
// //               Delete
// //             </button>
// //             <button
// //               onClick={() => handleViewDetail(blog)}
// //               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
// //             >
// //               View Detail
// //             </button>
// //           </div>
// //         ))}
// //       </div>

// //       {viewDetail && selectedBlog && (
// //         <div
// //           ref={detailRef}
// //           className="bg-white rounded-lg shadow-md p-4 mt-4 flex flex-col md:flex-row items-start gap-4"
// //         >
// //           <div className="flex-shrink-0">
// //             {selectedBlog.image && (
// //               <img
// //                 src={selectedBlog.image}
// //                 alt={selectedBlog.title}
// //                 className="w-32 h-32 object-cover rounded-lg"
// //               />
// //             )}
// //           </div>
// //           <div className="flex-grow">
// //             <h2 className="text-xl font-bold mb-2">{selectedBlog.title}</h2>
// //             <p className="text-lg">{selectedBlog.content}</p>
// //             <button
// //               onClick={handleHideDetail}
// //               className="mt-4 bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded-lg"
// //             >
// //               Hide Detail
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default CustomizeBlogs;
// "use client"
// import { useState, useEffect, useRef } from "react";

// interface Blog {
//   id: number;
//   title: string;
//   content: string;
//   image: string;
//   isDefault: boolean;
// }

// const defaultBlogs: Blog[] = [
//   {
//     id: 1,
//     title: "Ocean",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facilis perferendis a maiores perspiciatis quo exercitationem officiis numquam temporibus.",
//     image: "/fish.jpg",
//     isDefault: true,
//   },
//   {
//     id: 2,
//     title: "Sunset",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facilis perferendis a maiores perspiciatis quo exercitationem officiis numquam temporibus.",
//     image: "/sunset.jpg",
//     isDefault: true,
//   },
//   {
//     id: 3,
//     title: "Forest",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facilis perferendis a maiores perspiciatis quo exercitationem officiis numquam temporibus.",
//     image: "/forest.jpg",
//     isDefault: true,
//   },
//   {
//     id: 4,
//     title: "Travel",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facilis perferendis a maiores perspiciatis quo exercitationem officiis numquam temporibus.",
//     image: "Travel.jpg",
//     isDefault: true,
//   },
// ];

// const CustomizeBlogs = () => {
//   const [blogs, setBlogs] = useState<Blog[]>(defaultBlogs);
//   const [newBlog, setNewBlog] = useState({ title: "", content: "", image: "" });
//   const [editMode, setEditMode] = useState(false);
//   const [editableBlog, setEditableBlog] = useState<Blog | null>(null);
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [viewDetail, setViewDetail] = useState(false);
//   const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
//   const detailRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const storedBlogs = localStorage.getItem("blogs");
//     if (storedBlogs) {
//       setBlogs(JSON.parse(storedBlogs));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("blogs", JSON.stringify(blogs));
//   }, [blogs]);

//   useEffect(() => {
//     if (viewDetail && detailRef.current) {
//       detailRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [viewDetail]);

//   const handleAddBlog = () => {
//     const newBlogObject: Blog = {
//       id: blogs.length + 1,
//       title: newBlog.title,
//       content: newBlog.content,
//       image: selectedFile ? URL.createObjectURL(selectedFile) : "",
//       isDefault: false,
//     };
//     setBlogs([...blogs, newBlogObject]);
//     setNewBlog({ title: "", content: "", image: "" });
//     setSelectedFile(null);
//   };

//   const handleEditBlog = (blog: Blog) => {
//     setEditMode(true);
//     setEditableBlog(blog);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleUpdateBlog = () => {
//     if (!editableBlog) return;
//     const updatedBlogs = blogs.map((blog) =>
//       blog.id === editableBlog.id
//         ? {
//             ...blog,
//             title: editableBlog.title,
//             content: editableBlog.content,
//             image: selectedFile ? URL.createObjectURL(selectedFile) : blog.image,
//           }
//         : blog
//     );
//     setBlogs(updatedBlogs);
//     setEditMode(false);
//     setEditableBlog(null);
//     setSelectedFile(null);
//   };

//   const handleDeleteBlog = (id: number) => {
//     const blogToDelete = blogs.find((blog) => blog.id === id);
//     if (blogToDelete && blogToDelete.isDefault) {
//       alert("You can't delete this blog");
//       return;
//     }
//     const updatedBlogs = blogs.filter((blog) => blog.id !== id);
//     setBlogs(updatedBlogs);
//   };

//   const handleViewDetail = (blog: Blog) => {
//     setSelectedBlog(blog);
//     setViewDetail(true);
//   };

//   const handleHideDetail = () => {
//     setViewDetail(false);
//     setSelectedBlog(null);
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setSelectedFile(e.target.files[0]);
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Create Your Own Blog</h1>

//       {editMode && editableBlog ? (
//         <div>
//           <input
//             type="text"
//             value={editableBlog.title}
//             onChange={(e) =>
//               setEditableBlog({ ...editableBlog, title: e.target.value })
//             }
//             className="block w-full p-2 mb-2 border border-gray-300 rounded-lg"
//             placeholder="Title"
//           />
//           <textarea
//             value={editableBlog.content}
//             onChange={(e) =>
//               setEditableBlog({ ...editableBlog, content: e.target.value })
//             }
//             className="block w-full p-2 mb-2 border border-gray-300 rounded-lg"
//             placeholder="Content"
//           />
//           <input
//             type="file"
//             onChange={handleFileChange}
//             className="block w-full p-2 mb-2 border border-gray-300 rounded-lg"
//           />
//           <button
//             onClick={handleUpdateBlog}
//             className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg"
//           >
//             Update Blog
//           </button>
//         </div>
//       ) : (
//         <div>
//           <input
//             type="text"
//             value={newBlog.title}
//             onChange={(e) =>
//               setNewBlog({ ...newBlog, title: e.target.value })
//             }
//             className="block w-full p-2 mb-2 border border-gray-300 rounded-lg"
//             placeholder="Title"
//           />
//           <textarea
//             value={newBlog.content}
//             onChange={(e) =>
//               setNewBlog({ ...newBlog, content: e.target.value })
//             }
//             className="block w-full p-2 mb-2 border border-gray-300 rounded-lg"
//             placeholder="Content"
//           />
//           <input
//             type="file"
//             onChange={handleFileChange}
//             className="block w-full p-2 mb-2 border border-gray-300 rounded-lg"
//           />
//           <button
//             onClick={handleAddBlog}
//             className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg"
//           >
//             Add Blog
//           </button>
//         </div>
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
//         {blogs.map((blog) => (
//           <div key={blog.id} className="bg-white rounded-lg shadow-md p-4">
//             {blog.image && (
//               <div
//                 className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 mb-4"
//               />
//             )}
//             <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
//             <p className="mb-4">{blog.content}</p>
//             <button
//               onClick={() => handleEditBlog(blog)}
//               className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-lg mr-2"
//             >
//               Edit
//             </button>
//             <button
//               onClick={() => handleDeleteBlog(blog.id)}
//               className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg mr-2"
//             >
//               Delete
//             </button>
//             <button
//               onClick={() => handleViewDetail(blog)}
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
//             >
//               View Detail
//             </button>
//           </div>
//         ))}
//       </div>

//       {viewDetail && selectedBlog && (
//         <div
//           ref={detailRef}
//           className="bg-white rounded-lg shadow-md p-4 mt-4 flex flex-col md:flex-row items-start gap-4"
//         >
//           <div className="flex-shrink-0">
//             {selectedBlog.image && (
//               <div
//                 className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32"
//               />
//             )}
//           </div>
//           <div className="flex-grow">
//             <h2 className="text-xl font-bold mb-2">{selectedBlog.title}</h2>
//             <p className="text-lg">{selectedBlog.content}</p>
//             <button
//               onClick={handleHideDetail}
//               className="mt-4 bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded-lg"
//             >
//               Hide Detail
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomizeBlogs;




"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineEye } from "react-icons/ai";

interface Blog {
  id: number;
  title: string;
  content: string;
  image: string;
  isDefault: boolean;
}

const defaultBlogs: Blog[] = [
  {
    id: 1,
    title: "Ocean",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facilis perferendis a maiores perspiciatis quo exercitationem officiis numquam temporibus.",
    image: "/fish.jpg",
    isDefault: true,
  },
  {
    id: 2,
    title: "Sunset",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facilis perferendis a maiores perspiciatis quo exercitationem officiis numquam temporibus.",
    image: "/sunset.jpg",
    isDefault: true,
  },
  {
    id: 3,
    title: "Forest",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facilis perferendis a maiores perspiciatis quo exercitationem officiis numquam temporibus.",
    image: "/forest.jpg",
    isDefault: true,
  },
  {
    id: 4,
    title: "Travel",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facilis perferendis a maiores perspiciatis quo exercitationem officiis numquam temporibus.",
    image: "/travel.jpg",
    isDefault: true,
  },
];

const CustomizeBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>(defaultBlogs);
  const [newBlog, setNewBlog] = useState({ title: "", content: "", image: "" });
  const [editMode, setEditMode] = useState(false);
  const [editableBlog, setEditableBlog] = useState<Blog | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [viewDetail, setViewDetail] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const detailRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const storedBlogs = localStorage.getItem("blogs");
    if (storedBlogs) {
      setBlogs(JSON.parse(storedBlogs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  useEffect(() => {
    if (viewDetail && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [viewDetail]);

  const handleAddBlog = () => {
    const newBlogObject: Blog = {
      id: blogs.length + 1,
      title: newBlog.title,
      content: newBlog.content,
      image: selectedFile ? URL.createObjectURL(selectedFile) : "",
      isDefault: false,
    };
    setBlogs([...blogs, newBlogObject]);
    setNewBlog({ title: "", content: "", image: "" });
    setSelectedFile(null);
  };

  const handleEditBlog = (blog: Blog) => {
    setEditMode(true);
    setEditableBlog(blog);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleUpdateBlog = () => {
    if (!editableBlog) return;
    const updatedBlogs = blogs.map((blog) =>
      blog.id === editableBlog.id
        ? {
            ...blog,
            title: editableBlog.title,
            content: editableBlog.content,
            image: selectedFile ? URL.createObjectURL(selectedFile) : blog.image,
          }
        : blog
    );
    setBlogs(updatedBlogs);
    setEditMode(false);
    setEditableBlog(null);
    setSelectedFile(null);
  };

  const handleDeleteBlog = (id: number) => {
    const blogToDelete = blogs.find((blog) => blog.id === id);
    if (blogToDelete && blogToDelete.isDefault) {
      alert("You can't delete this blog");
      return;
    }
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
  };

  const handleViewDetail = (blog: Blog) => {
    setSelectedBlog(blog);
    setViewDetail(true);
  };

  const handleHideDetail = () => {
    setViewDetail(false);
    setSelectedBlog(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <Head>
        <title>Customize Blogs</title>
        <meta name="description" content="Create and manage your own blogs." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <h1 className="text-3xl font-bold mb-4">Create Your Own Blog</h1>

      {editMode && editableBlog ? (
        <div>
          <input
            type="text"
            value={editableBlog.title}
            onChange={(e) =>
              setEditableBlog({ ...editableBlog, title: e.target.value })
            }
            className="block w-full p-2 mb-2 border border-gray-300 rounded-lg"
            placeholder="Title"
          />
          <textarea
            value={editableBlog.content}
            onChange={(e) =>
              setEditableBlog({ ...editableBlog, content: e.target.value })
            }
            className="block w-full p-2 mb-2 border border-gray-300 rounded-lg"
            placeholder="Content"
          />
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full p-2 mb-2 border border-gray-300 rounded-lg"
          />
          <button
            onClick={handleUpdateBlog}
            className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg"
          >
            Update Blog
          </button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={newBlog.title}
            onChange={(e) =>
              setNewBlog({ ...newBlog, title: e.target.value })
            }
            className="block w-full p-2 mb-2 border border-gray-300 rounded-lg"
            placeholder="Title"
          />
          <textarea
            value={newBlog.content}
            onChange={(e) =>
              setNewBlog({ ...newBlog, content: e.target.value })
            }
            className="block w-full p-2 mb-2 border border-gray-300 rounded-lg"
            placeholder="Content"
          />
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full p-2 mb-2 border border-gray-300 rounded-lg"
          />
          <button
            onClick={handleAddBlog}
            className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg"
          >
            Add Blog
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-md p-4">
            {blog.image && (
              <Image
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
                width={400}
                height={256}
              />
            )}
            <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
            <p className="mb-4">{blog.content}</p>
            <div className="flex gap-2">
              <button
                onClick={() => handleEditBlog(blog)}
                className="flex items-center bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                <AiOutlineEdit className="mr-2" /> Edit
              </button>
              <button
                onClick={() => handleDeleteBlog(blog.id)}
                className="flex items-center bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg"
              >
                <AiOutlineDelete className="mr-2" /> Delete
              </button>
              <button
                onClick={() => handleViewDetail(blog)}
                className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                <AiOutlineEye className="mr-2" /> View
              </button>
            </div>
          </div>
        ))}
      </div>

      {viewDetail && selectedBlog && (
        <div
          ref={detailRef}
          className="bg-white rounded-lg shadow-md p-4 mt-4 flex flex-col md:flex-row items-start gap-4"
        >
          <div className="flex-shrink-0">
            {selectedBlog.image && (
              <Image
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-32 h-32 object-cover rounded-lg"
                width={128}
                height={128}
              />
            )}
          </div>
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2">{selectedBlog.title}</h2>
            <p className="text-lg">{selectedBlog.content}</p>
            <button
              onClick={handleHideDetail}
              className="mt-4 bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded-lg"
            >
              Hide Detail
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomizeBlogs;
