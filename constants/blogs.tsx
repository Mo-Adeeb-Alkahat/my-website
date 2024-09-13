import hoist from "@/public/1.png";
import sVSw from "@/public/2.png";
import eVSi from "@/public/3.png";

const desc = "Check the link to know more!";
const blogsData: {
  id: number;
  title: string;
  image: string;
  desc: string;
  link: string;
}[] = [
  {
    id: 1,
    title: "Enumerable vs. Iterable",
    image: eVSi.src,
    desc: desc,
    link: "https://www.linkedin.com/posts/mo-adeeb-alkahat_enumerable-vs-iterable-in-javascript-enumerable-activity-7174035673732071425-7z6j?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 2,
    title: "Strong vs. Weak",
    image: sVSw.src,
    desc: desc,
    link: "https://www.linkedin.com/posts/mo-adeeb-alkahat_staticdynamic-strongweak-activity-7175591483687772160-53rd?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 3,
    title: "Hoisting",
    image: hoist.src,
    desc: desc,
    link: "https://www.linkedin.com/posts/mo-adeeb-alkahat_webdevelopment-learntocode-jshoisting-activity-7178113614585741312-UdO8?utm_source=share&utm_medium=member_desktop",
  },
];

export default blogsData;
