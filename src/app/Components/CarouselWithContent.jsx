"use client";
import { Carousel, Typography, Button } from "@material-tailwind/react";
 
export default function CarouselWithContent(props) {
  return (
    <Carousel className="rounded-xl">
      <div className="relative w-full h-svh">
        <img
          src="https://img.freepik.com/premium-photo/cute-child-boy-doing-homework-clever-kid-drawing-desk-schoolboy-elementary-school-student-drawing-workplace_130265-4387.jpg?w=826"
          alt="image 2"
          className="h-svh w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 
              text-3xl
              md:text-4xl 
              lg:text-5xl 
              font-Lobster"
            >
              
              The Best Kindergarden School for your child
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80
              text-base md:text-xl lg:text-2xl"
            >
              
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
            <Button size="lg" color="white" className="rounded-xl bg-[#FE5D37] text-white
            text-xs md:text-sm lg:text-base">
                Learn More
              </Button>
              <Button size="lg" color="white" variant="text" className="rounded-xl bg-[#343a40] text-white text-xs md:text-sm lg:text-base"> 
                Our Classes
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-svh">
        <img
          src="https://img.freepik.com/premium-photo/portrait-happy-joyful-little-boy-pointing-into-copy-space_8595-13688.jpg?w=740"
          alt="image 2"
          className="h-svh w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl font-Lobster"
            >
              The Best Kindergarden School for your child
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
            <Button size="lg" color="white" className="rounded-xl bg-[#FE5D37] text-white">
                Learn More
              </Button>
              <Button size="lg" color="white" variant="text" className="rounded-xl bg-[#343a40] text-white"> 
                Our Classes
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-svh">
        <img
          src="https://img.freepik.com/free-photo/concentrated-student-class_1098-987.jpg?w=826&t=st=1712063869~exp=1712064469~hmac=503fb58796ca4ff943a1ebd2f3a3dde72b4a162511574b453dcf6cd559b2ddc4"
          alt="image 2"
          className="h-svh w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl font-Lobster"
            >
              The Best Kindergarden School for your child
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
            <Button size="lg" color="white" className="rounded-xl bg-[#FE5D37] text-white">
                Learn More
              </Button>
              <Button size="lg" color="white" variant="text" className="rounded-xl bg-[#343a40] text-white"> 
                Our Classes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}