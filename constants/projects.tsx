import wimg from "@/public/wasef.png";
import rimg from "@/public/r3d.png";
import fimg from "@/public/face.png";

const projectsData: {
  id: number;
  name: string;
  image: string;
  desc: string;
  ghLink: string;
  live: string;
}[] = [
  {
    id: 1,
    name: "Wasef",
    image: wimg.src,
    desc: " An Arabic image caption generator built from scratch based on the Flickr8k Arabic dataset. full-stack web application with a React front end and a Flask back end. Built a custom AI model from scratch using TensorFlow.",
    ghLink: "https://github.com/Mo-Adeeb-Alkahat/Wasef",
    live: "https://github.com/Mo-Adeeb-Alkahat/Wasef",
  },
  {
    id: 2,
    name: "React-3d-Icons",
    image: rimg.src,
    desc: "A simple and easy-to-use library for adding 3d icons into any React project.",
    ghLink: "https://github.com/Mo-Adeeb-Alkahat/latest-react-3d-icons",
    live: "https://www.npmjs.com/package/latest-react-3d-icons",
  },
  {
    id: 3,
    name: "Faceoor",
    image: fimg.src,
    desc: "built with React.js, BootStrap, Node.js, and PostgreSQL. Utilizing the Clarifai API to provide image recognition. Users can securely sign in, with authentication and hash encryption methods.",
    ghLink: "https://github.com/Mo-Adeeb-Alkahat/face-detector",
    live: "https://github.com/Mo-Adeeb-Alkahat/face-detector",
  },
];

export default projectsData;
