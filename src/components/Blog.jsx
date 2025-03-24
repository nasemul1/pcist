import React from 'react'

const Blog = () => {

    const contents = [
        {
          img: "https://www.material-tailwind.com/image/blog-11.jpeg",
          title: "Search and Discovery",
          desc: "Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards we tend to offer.",
        },
        {
          img: "https://www.material-tailwind.com/image/blog-10.jpeg",
          title: "Last visits in US",
          desc: "Wealth creation is an evolutionarily recent positive-sum game. Status is an old zero-sum game. Those attacking wealth creation are often just seeking status.",
        },
        {
          img: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-blog2.jpg",
          title: "Grow in a beautiful area",
          desc: "Free people make free choices. Free choices mean you get unequal outcomes. You can have freedom, or you can have equal outcomes. You can't have both.",
        },
      ];

  return (
    <div className='w-full flex justify-center py-15'>
        <div className='w-full lg:w-[85%]'>
            <h2 className='text-center text-2xl text-slate-950 font-semibold px-5 mb-8'>Blogs</h2>
            <div className='w-full flex flex-wrap justify-center gap-5'>
                {
                    contents.map((content, index) => (
                        <div key={index} className="w-full lg:w-[280px] h-96 rounded-lg p-2 bg-red-500">
                            <img className='h-[160px] w-full rounded-sm' src={content.img} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Blog