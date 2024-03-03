<script setup>
import projects from "/project.json"
const threeel = ref(false);

function threeElements() {
  threeel.value = !threeel.value;
  console.log('Toggle menu');
}
</script>
<template>
  <div class="bg-[#0C3A2F] h-full w-full">
    <div class="">
        <div class="relative">

        
      <div class="lg:bg-[#f0fff1] lg:h-screen lg:w-1/2 p-2 xs:p-4 md:p-8 rounded-tr-[50%]">
        <div class="absolute flex justify-between w-full ">
          <h1
            class="py-4 px-6 text-3xl font-bold text-[#f0fff1] lg:text-[#0C3A2F]"
            id="portfolio">
            <span>Portfolio</span>
          </h1>
          <div class="flex justify-between hidden pt-4 pr-12 md:block">
            <ul class="flex lg:ml-[76px] px-5 text-lg text-white font-semibold">
              <NuxtLink to="/"><h1 class="px-6 text-xl">Home</h1></NuxtLink>
              <NuxtLink to="#aboutpg"
                ><h1 class="px-6 text-xl">About</h1></NuxtLink
              >
              <NuxtLink to="#projectpg"
                ><h1 class="px-6 text-xl">Project</h1></NuxtLink
              >
              <NuxtLink to="#connectpg"
                ><h1 class="px-6 text-xl">Connect</h1></NuxtLink
              >
            </ul>
          </div>
          <button @click="threeElements" class="absolute right-12 -top-1 md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 " width="100" height="80" viewBox="0 0 100 80">
              <rect width="100" height="10" rx="5" fill="white"/>
              <rect y="35" width="100" height="10" rx="5" fill="white"/>
              <rect y="70" width="100" height="10" rx="5" fill="white"/>
          </svg>
          <div class="relative">

            <div v-if="threeel" class="absolute -top-24 -right-8 z-50 flex h-screen w-screen flex-col items-center justify-center p-2 text-[#0C3A2F] backdrop-blur-lg font-bold py-4 rounded-b-xl bg-[#6d9773b3] lg:bg-none lg:items-end">            
              <NuxtLink to="/"><h1 class="p-6 text-xl text-white">Home</h1></NuxtLink>
            <NuxtLink to="#aboutpg"><h1 class="p-6 text-xl text-white hover:bg-green-100">About</h1></NuxtLink>
            <NuxtLink to="#projectpg"><h1 class="p-6 text-xl text-white hover:bg-green-100">Project</h1></NuxtLink>
            <NuxtLink to="#connectpg"><h1 class="p-6 text-xl text-white hover:bg-green-100">Connect</h1></NuxtLink>
            

            </div>
            </div>
            </button>
        </div>

        <div
          class="lg:border-r-2 lg:border-t-2 lg:h-screen lg:border-[#BB8A52] lg:rounded-tr-[50%]">
          <div class="flex flex-col items-center justify-between w-full xs-p-0 md:flex-row ">
            <div class="flex-col justify-center py-12">
              <img
                src="../assets/images/triangles.png"
                class="w-20 mt-12 ml-2 lg:ml-0 md:w-32" />
              <h1
                class="  xs:w-1/3 lg:w-1/2 px-6 py-4 text-[#f0fff1] lg:text-[#0C3A2F] text-[44px] xs:text-[56px] lg:text-[90px] font-bold leading-none">
                Tanmayie Patil
              </h1>
              <p
                class="xs:w-[350px] text-xl px-4 mt-8 ml-8 tracking-wider font-bold flex flex-col text-[#6D9773] border-l-2 border-[#BB8A52]">
                Hii there!
                <span>
                  I am a young Front-End Designer and Developer and helps to
                  design the websites
                </span>
              </p>
              <h1 class="absolute text-4xl -bottom-0 xs:-bottom-12 left-8 xs:left-16 md:text-6xl lg:text-7xl lg:bottom-full  md:hidden lg:block lg:top-[50%] lg:left-[39%] text-white md:rotate-90 font-ribeye block" >&lt;Web Kalakar/&gt;</h1>

              <img
          src="../assets/images/Tanmayie.png"
          class="w-10/12 mx-6 mt-6 md:hidden" />
            </div>
            <img
          src="../assets/images/Tanmayie.png"
          class="absolute hidden w-1/3 mt-6 md:block right-12 lg:mt-16" />
          </div>
        </div>
      </div>
    </div>
    <div class="relative flex flex-col-reverse items-center md:items-start md:flex-row md:w-full" id="aboutpg">
        <div class="lg:bg-[#f0fff1]  lg:h-screen  lg:w-1/2 lg:px-8">
          <div class="lg:border-r-2  lg:h-screen border-[#BB8A52]">
            <div class="relative w-full pt-[18%] md:pt-[25%]">

            
            <img src="https://res.cloudinary.com/dy7zpv1ij/image/upload/v1708279941/codeSnippet_gwbomh.png" class="w-11/12 ml-4 xs:ml-8 xs:w-10/12 lg:w-10/12 md:w-10/12 lg:ml-8 " />
            <div
            class="md:text-md lg:text-xl text-[12px] pt-[12%] md:pt-[22%] lg:pt-[25%] z-50 text-[#6E9575] text-left lg:text-justify xs:w-9/12 w-10/12 left-8 xs:left-12 md:left-14 top-16  absolute  ">
            <span class="font-semibold ">
                Who I am?
            </span>
            <p class="xs:pt-4">                                                                 
            Hi!
            <span class="px-2  font-semibold text-[#BB8A52]"
              >Tanmayie Patil</span>
            here, aspiring web designer and developer with a
            creative and technical background. I am the
            student of Artificial Intelligence and Data
            Science studing in 3rd Year. Im passionate with
            designing user-friendly and visually appealing
            websites. Seeking chances for collaboration in
            order to build unique digital experiences.
            Dedicated to lifelong learning and remaining
            current on industry developments in order to
            contribute successfully to modern online
            projects.
        </p> 
          </div>
          </div>
        </div>
    </div>
    <div class="flex md:pt-[10%] md:px-6 lg:pt-[12%] flex-col  items-center md:items-center justify-center lg:pl-[10%] lg:block ">
  <img
    src="../assets/images/abtimg.png"
    class="lg:ml-32 w-52" />
  <h1
    class="p-6 text-white text-5xl md:text-5xl md:text-center lg:text-[80px] font-bold leading-none">
    About me
  </h1>
  <div class="flex gap-4 lg:gap-12 md:ml- lg:ml-16 lg:mt-8">
    <NuxtLink
      to="https://rb.gy/7agjd"
      class="h-10 p-2 text-center bg-[#6E9575] text-white transform hover:scale-105 rounded-lg w-36"
      >Resume</NuxtLink
    >
    <NuxtLink
      to="#connectpg"
      class="h-10 p-2 text-center font-bold text-[#6E9575] border-2 transform hover:scale-105 border-[#6E9575] rounded-lg w-36"
      >Contact me</NuxtLink
    >
  </div>
  <h1
        class="font-ribeye hidden lg:block absolute  text-7xl  rotate-90 text-[#BB8A52] -right-24 top-96"
        id="code">
        &lt;code /&gt;
      </h1>
</div>

    </div>
    <div class="relative w-full ">
      <div class="lg:bg-[#f0fff1] h-screen lg:h-screen lg:w-1/2 px-8">
        <div class="lg:border-r-2 lg:h-screen border-[#BB8A52]">
            
          <h1 class=" pt-[20%] md:pt-[25%] lg:pt-24 px-6 text-[#ffffff] font-bold md:ml- lg:ml-[26%] text-5xl md:text-6xl lg:text-[80px] pb-6 lg:text-[#0C3A2F] block">Skills</h1>
          <div class="absolute grid w-full grid-cols-2 md:grid-cols-4 lg:mx-16 gap-x-12 gap-y-12">
            <div class="relative w-24 h-24 top-2 left-3">
          <div
            class="absolute border-2 border-[#BB8A52] rounded-full  top-0 w-24 h-24 p-2 rotate-12"></div>
          <img
            src="../assets/images/tailwind-css.png"
            class="p-3 " />
        </div>
        <div class="relative w-24 h-24 top-2">
          <div
            class="absolute border-2 border-[#BB8A52] rounded-full top-0 w-24 h-24 p-2 rotate-12"></div>
          <img
            src="../assets/images/figma.png"
            class="p-5 " />
        </div>
        <div class="relative w-24 h-24 top-2 left-3">
          <div
            class="w-24 h-24 border-2 border-[#BB8A52] rounded-full p-2 top-0  absolute rotate-12"></div>
          <img
            src="../assets/images/nuxt.png "
            class="p-6 " />
        </div>
        <div class="relative w-24 h-24 top-2">
          <div
            class="w-24 h-24 border-2 border-[#BB8A52] rounded-full p-2 top-0  absolute rotate-12"></div>
          <img
            src="../assets/images/javascript.png"
            class="p-4 " />
        </div>
        <div class="relative w-24 h-24 -top-2 left-3">
          <div
            class="w-24 h-24 border-2 border-[#BB8A52] rounded-full p-2 top-0  absolute rotate-12"></div>
          <img
            src="../assets/images/css.png"
            class="p-4" />
        </div>
        <div class="relative w-24 h-24 -top-2">
          <div
            class="w-24 h-24 border-2 border-[#BB8A52] rounded-full p-2 top-0  absolute rotate-12"></div>
          <img
            src="../assets/images/bootstrap.png"
            class="p-4 " />
        </div>
        <div class="relative w-24 h-24 -top-2 left-3">
          <div
            class="w-24 h-24 border-2 border-[#BB8A52] rounded-full p-2 top-0  absolute rotate-12"></div>
          <img
            src="../assets/images/python.png"
            class="p-6 " />
        </div>
        <div class="relative w-24 h-24 -top-2">
          <div
            class="w-24 h-24 border-2 border-[#BB8A52] rounded-full p-2 top-0  absolute rotate-12"></div>
          <img
            src="../assets/images/react.png"
            class="p-4 " />
        </div>
      </div>
      
        
        
        </div>
      </div>
    </div>
      <div
        class="lg:bg-[#f0fff1]   lg:w-1/2 px-8 " id="projectpg">
        
        <div
          class="lg:border-r-2   pb-12 border-[#BB8A52] "></div>
      </div>
      <div class="relative">
        <div class="absolute flex justify-start block md:justify-center left-12 right-12 lg:hidden top-2 ">
      <div class=" swiper-button-prev" style="color:#BB8A52; width: 20px;"></div>
  
      <div class=" swiper-button-next" style="color:#BB8A52; width: 20px;"></div>
    </div>
        <h1
            class="absolute font-bold text-white -top-20 md:right-12 md:-top-20 ml-12 md:ml-0  lg:right-40 text-5xl md:text-[60px] lg:text-7xl">
            Projects
          </h1>
          <div class="absolute w-full left-2 md:left-0 top-12">
        <div class="hidden lg:block">

          <div class="ml-20 swiper-button-prev" style="color:#BB8A52;"></div>
          <div class="mr-20 swiper-button-next" style="color:#BB8A52;"></div>
        </div>


  <Swiper
          :modules="[SwiperAutoplay,SwiperNavigation]"
          :slides-per-view="1"
          :loop="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
          }"
         
          :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }"
          :creative-effect="{
            prev: {
              shadow: false,
              translate: ['100%', 0, -1],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }">
            <SwiperSlide v-for="(p, id) in projects" :key="id" class="">
              <div class="flex justify-center md:w-full">
                  <ProjectCard :project="p" class="" />
                  
                </div>
            </SwiperSlide>
          </Swiper>
        
          </div>
          
          <div class="flex w-full">


<h1
  class="font-ribeye text-7xl text-[#BB8A52] rotate-90 hidden lg:block absolute -right-[170px] top-44"
  >
  KALAKARI
</h1>

</div>
      
</div>
<div
class="lg:bg-[#f0fff1] h-screen lg:h-screen lg:w-1/2 px-8 ">
<div
class="lg:border-r-2  lg:h-screen py-12  border-[#BB8A52] ">
</div>
</div>

      
      <div class="flex flex-col md:flex-row">
       
     
      <div
        class="lg:bg-[#f0fff1] lg:h-36 lg:w-1/2 px-8  ">
        
       
      <div
          class="lg:border-r-2 lg:border-b-2 lg:h-screen   border-[#BB8A52] " id="connectpg">
          <h1
          class="px-4 md:px-6 -mt-44 md:mt-0 text-[52px]  lg:text-7xl  text-[#f0fff1] lg:text-[#0C3A2F] font-bold">
          Connect
        </h1>
        </div>
      </div>
      <div class="flex flex-col -mt-20 md:mt-0 mx-12 md:mx-0 lg:ml-[30%]">
<h1 class="text-2xl   text-[#f0fff1]">Mail at:</h1>
<h1
class="pb-4 text-lg   font-light text-[#f0fff1] border-b-2 border-[#f0fff1]">
tanmayiepatil@gmail.com
</h1>
<div class="flex justify-center gap-8 py-4 -ml-6 lg:ml-0 lg:justify-start">
<NuxtLink
to="https://www.instagram.com/descry_art_" target="_blank"
><img
  src="../assets/images/instagram.png"
  class="w-8"
/></NuxtLink>
<NuxtLink to="https://github.com/Tanmayie03" target="_blank"
><img
  src="../assets/images/github.png"
  class="w-8"
/></NuxtLink>
<NuxtLink
to="https://www.linkedin.com/in/tanmayie-patil-6543a7258/" target="_blank"
><img
  src="../assets/images/linkedin.png"
  class="w-8"
  /></NuxtLink>
<NuxtLink
to="https://twitter.com/tanmayie87" target="_blank"
><svg xmlns="http://www.w3.org/2000/svg" width="34" height="36" viewBox="0 0 44 40" fill="none" class="p-[2px] bg-white rounded-md  w-8 h-8">
  <g clip-path="url(#clip0_1138_347)">
    <path d="M26.0958 16.9375L42.1235 0H38.325L24.4087 14.7063L13.2932 0H0.472656L17.2813 22.2388L0.472656 40H4.27109L18.9678 24.4697L30.7062 40H43.5267L26.0948 16.9375H26.0958ZM20.8935 22.4344L19.1902 20.22L5.63956 2.59937H11.4737L22.4087 16.82L24.1117 19.0344L38.3268 37.5187H32.4933L20.8935 22.4353V22.4344Z" fill="black"/>
  </g>
  <defs>
    <clipPath id="clip0_1138_347">
      <rect width="44" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>
  </NuxtLink>
</div>
</div>
    </div>
    </div>
  </div>
</template>
