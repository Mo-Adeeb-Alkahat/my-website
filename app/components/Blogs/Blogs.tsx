import React from 'react'
import Blog from '@/app/Blog/Blog';

const imageLink:string = "https://th.bing.com/th/id/OIP.FjnxkrwL0F20vbqs6HpoWgAAAA?rs=1&pid=ImgDetMain"
const lorem = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, expedita odio quos vero beatae itaque labore maiores atque, minus, deserunt aspernatur ullam aliquam. Quaerat optio consectetur officiis, minus sint maiores!"
const blogsData: {id:number,title:string,image:string,desc:string,link:string}[] = [{id:1,title:'wasef',image:imageLink,desc:lorem,link:'sdsd' },{id:2,title:'wasef2',image:imageLink,desc:lorem,link:'sdsd' },{id:3,title:'wasef3',image:imageLink,desc:lorem,link:'sdsd' }]; 

const Blogs = () => {
  return (
    <div className="flex flex-col items-center min-h-screen " id="Blogs">
    <ul className="list-none flex flex-col items-center gap-4 lg:flex-row lg:mx-10 lg:mb-14 " >{blogsData.map((blog) => {
              return (
                <Blog key={blog.id} id= {blog.id} title= {blog.title} image= {blog.image} desc= {blog.desc} link= {blog.link}  ></Blog>
              )
    })}</ul>
    <a href="#" className="bg-red-950  shadow-lg shadow-red-800/50 border-double border-4 border-red-500  w-36 h-20  text-center rounded-md mt-2 mb-5 flex items-center justify-center" > more blogs </a>
    </div>
  )
}

export default Blogs