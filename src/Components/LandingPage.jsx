import React from 'react'

const LandingPage = () => {
    return (
        <>
            <div className='LandingPage w-full h-[80vh] flex'>
                <div className="image flex-1 justify-center items-center w-[100%] pl-[4rem]">
                    <img className='w-[80%]' src="./src/Assets/home-vector.jpg" alt="logo" />
                </div>
                <div className="content flex flex-col flex-1 justify-center w-[100%] gap-[2rem]">
                    <h1 className='text-5xl max-w-[85%] font-bold'>A Task Manager/Optimizer which boosts your productivity!</h1>
                    <p className='text-lg max-w-[90%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magnam ipsum minima iste, impedit ipsa alias consectetur deserunt eveniet aliquam quidem neque reprehenderit, ab eligendi. Facilis vero et eligendi recusandae dignissimos provident unde animi distinctio itaque. Eligendi est earum cupiditate voluptatum tenetur sint ad corporis modi, natus recusandae rerum quo!</p>
                    <a href="/signup">
                        <button className='border-2 border-gray-500 transition-all ease-in-out duration-200 w-[200px] h-[40px] rounded-md hover:bg-gray-600 hover:text-white'>Get Started</button>
                    </a>
                </div>
            </div>

            <div className="credits w-full flex justify-center gap-5 h-[40px] items-center">
                <h1 className='text-xl'>Created by Aakarsh!</h1>
                <a href="https://www.github.com/aakarsh-2004" target='_blank' className='underline'>Github Repo</a>
            </div>
        </>
    )
}

export default LandingPage