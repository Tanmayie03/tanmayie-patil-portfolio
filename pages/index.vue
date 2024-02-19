<template>
  <div class="scroll-smooth bg-[#0C3A2F] overflow-hidden">
    <div
      class="w-full h-full lg:flex lg:justify-between font-montserrat">
      <div
        class="lg:bg-[#f0fff1] w-full lg:h-screen lg:w-[50%]  lg:rounded-tr-[50%] pt-6 px-0 lg:px-6">
        <div
          class="lg:border-t-2 lg:mx-2 lg:border-r-2 lg:h-screen border-[#BB8A52] rounded-tr-[50%]">
          <h1
            class="px-6 py-4 text-3xl font-bold text-[#f0fff1] lg:text-[#0C3A2F]"
            id="portfolio">
            <span>Portfolio</span>
          </h1>
          <div class="flex-col justify-between ">

              <img
              src="../assets/images/triangles.png"
              class="w-20 mt-12 ml-2 lg:ml-0 md:w-32" />
              <h1
              class=" lg:w-1/2 px-6 py-4 text-[#f0fff1] lg:text-[#0C3A2F] text-[56px] lg:text-[90px] font-bold leading-none">
              Tanmayie Patil
          </h1>
          <p
            class="w-[350px] text-xl px-4 mt-8 ml-8 tracking-wider font-bold flex flex-col text-[#6D9773] border-l-2 border-[#BB8A52]">
            Hii there!
            <span>
                I am a young Front-End Designer and Developer
                and helps to design the websites
              </span>
          </p>
          
      </div>
  </div>
</div>

      <h1 class="absolute text-4xl -bottom-44 xs:-bottom-12 left-8 xs:left-16 md:text-6xl lg:text-7xl lg:bottom-full md:left-0 md:-top-40 lg:top-[50%] lg:left-[39%] text-white md:rotate-90 font-ribeye block" >&lt;Web Kalakar/&gt;</h1>
      <div class="flex flex-col items-center lg:items-end">
        <div class="hidden lg:block">
        <div class="flex justify-between pt-10 pr-5">
          <ul
            class="flex ml-[76px]  px-5 text-lg text-white font-semibold">
            <NuxtLink to="#"><h1 class="px-6 text-xl">Home</h1></NuxtLink>
            <NuxtLink to="#aboutpg"><h1 class="px-6 text-xl">About</h1></NuxtLink>
            <NuxtLink to="#projectpg"><h1 class="px-6 text-xl">Project</h1></NuxtLink>
            <NuxtLink to="#connectpg"><h1 class="px-6 text-xl">Connect</h1></NuxtLink>
            
          </ul>
          </div>
        </div>
        <button @click="threeElements" class="absolute right-8 top-4 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 " width="100" height="80" viewBox="0 0 100 80">
              <rect width="100" height="10" rx="5" fill="white"/>
              <rect y="35" width="100" height="10" rx="5" fill="white"/>
              <rect y="70" width="100" height="10" rx="5" fill="white"/>
          </svg>
          <div class="relative">

            <div v-if="threeel" class="absolute -top-24 -right-8 z-50 flex h-screen w-screen flex-col items-center justify-center p-2 text-[#0C3A2F] backdrop-blur-lg font-bold py-4 rounded-b-xl bg-[#6d9773b3] lg:bg-none lg:items-end">            
              <NuxtLink to="#"><h1 class="p-6 text-xl text-white">Home</h1></NuxtLink>
            <NuxtLink to="#aboutpg"><h1 class="p-6 text-xl text-white hover:bg-green-100">About</h1></NuxtLink>
            <NuxtLink to="#projectpg"><h1 class="p-6 text-xl text-white hover:bg-green-100">Project</h1></NuxtLink>
            <NuxtLink to="#connectpg"><h1 class="p-6 text-xl text-white hover:bg-green-100">Connect</h1></NuxtLink>
            

            </div>
            </div>
            </button>
    

        <img
          src="../assets/images/Tanmayie.png"
          class="w-10/12 mt-6 md:w-9/12 lg:mt-16" />
        <img
          src="../assets/images/arrow.png"
          class="absolute hidden lg:block bottom-8 right-24" />
          <NuxtLink
            to="https://rb.gy/7agjd" target="_blank"
            ><img
          src="../assets/images/download.png"
          class="absolute bottom-8 right-12 animate-bounce" /></NuxtLink>
      </div>
    </div>

<!-- about pg -->

    <div
      class="relative w-full h-fit lg:h-screen lg:flex lg:items-center lg:justify-between font-montserrat"
      id="aboutpg">
      <div class="lg:bg-[#f0fff1] lg:w-[50%] lg:h-screen px-8">
        <div class="flex flex-col items-center pt-24 pb-16 lg:pb-0 lg:pt-0 lg:hidden">
        <img
          src="../assets/images/abtimg.png"
          class="w-40" />
        <h1
          class="p-6 text-[#f0fff1] text-center md:text-7xl lg:text-[60px] text-[60px] font-bold leading-none">
          About me
        </h1>
        <div class="flex gap-4 mt-2">
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
      </div>
      <div
      class=" lg:border-r-2 lg:h-full lg:flex lg:items-center  relative  border-[#BB8A52]">
      <img src="https://res.cloudinary.com/dy7zpv1ij/image/upload/v1708279941/codeSnippet_gwbomh.png" class="lg:w-[99%] xs:w-full " />
      <p
            class="md:text-2xl text-[12px] z-50 text-[#6E9575] text-left lg:text-justify h-fit   w-[280px] md:top-16 md:ml-8 md:w-10/12 ml-[14px] xs:ml-4 mr-6 absolute top-2 lg:top-[26%] lg:mx-6 xs:pt-7 pt-5 lg:py-7 ">
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
      <div class="flex flex-col justify-center hidden lg:-mt-12 lg:mr-28 lg:block ">
        <img
          src="../assets/images/abtimg.png"
          class="ml-32 w-52" />
        <h1
          class="p-6 text-white text-[80px] font-bold leading-none">
          About me
        </h1>
        <div class="flex gap-12 mt-8 ml-16">
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
      </div>
      <h1
        class="font-ribeye hidden lg:block absolute  text-8xl  rotate-90 text-[#BB8A52] -right-36 top-[42%] "
        id="code">
        &lt;code /&gt;
      </h1>
    </div>


<!-- skill pg -->
    <div
      id="skillpg"
      class="relative flex justify-between w-full h-screen mt-8 overflow-hidden lg:mt-0 font-montserrat">
      <div class="lg:bg-[#f0fff1]   lg:w-[50%] h-full px-8">
        <h1 class="px-6 ml-8 xs:ml-12 md:ml-[90%]   text-[#f0fff1] text-7xl font-bold lg:hidden">Skills</h1>
        <div
          class=" lg:border-r-2 h-full lg:pb-32 border-[#BB8A52]">
          <h1 class="hidden px-6 font-bold md:ml-[30%] lg:ml-[26%] text-8xl text-[#0C3A2F] lg:block">Skills</h1>
        </div>
      </div>
      <img
        src="../assets/images/skillImgWhite.png"
        class="w-[50%] h-[38%] lg:-mt-6  hidden lg:block " />
      <div
        class="absolute grid items-center justify-between w-full grid-cols-2 overflow-hidden md:grid-cols-3 lg:grid-cols-4 top-28 lg:top-72 left-12 lg:left-24 lg:gap-x-16 gap-y-20">
        <div class="relative w-24 h-24 top-2 left-3">
          <div
            class="absolute border-2 border-[#BB8A52] top-0 w-24 h-24 p-2 rotate-12"></div>
          <img
            src="../assets/images/tailwind-css.png"
            class="p-3 border-2 border-[#BB8A52] " />
        </div>
        <div class="relative w-24 h-24 top-2">
          <div
            class="absolute border-2 border-[#BB8A52] top-0 w-24 h-24 p-2 rotate-12"></div>
          <img
            src="../assets/images/figma.png"
            class="p-5 border-2 border-[#BB8A52] " />
        </div>
        <div class="relative w-24 h-24 top-2 left-3">
          <div
            class="w-24 h-24 border-2 border-[#BB8A52] p-2 top-0  absolute rotate-12"></div>
          <img
            src="../assets/images/nuxt.png "
            class="p-6 border-2 border-[#BB8A52] w-40" />
        </div>
        <div class="relative w-24 h-24 top-2">
          <div
            class="w-24 h-24 border-2 border-[#BB8A52] p-2 top-0  absolute rotate-12"></div>
          <img
            src="../assets/images/javascript.png"
            class="p-4 border-2 border-[#BB8A52] " />
        </div>
        <div class="relative w-24 h-24 -top-2 left-3">
          <div
            class="w-24 h-24 border-2 border-[#BB8A52] p-2 top-0  absolute rotate-12"></div>
          <img
            src="../assets/images/css.png"
            class="p-4 border-2 border-[#BB8A52]" />
        </div>
        <div class="relative w-24 h-24 -top-2">
          <div
            class="w-24 h-24 border-2 border-[#BB8A52] p-2 top-0  absolute rotate-12"></div>
          <img
            src="../assets/images/bootstrap.png"
            class="p-4  border-2 border-[#BB8A52]" />
        </div>
        <div class="relative w-24 h-24 -top-2 left-3">
          <div
            class="w-24 h-24 border-2 border-[#BB8A52] p-2 top-0  absolute rotate-12"></div>
          <img
            src="../assets/images/python.png"
            class="p-6 border-2 border-[#BB8A52]  w-40 " />
        </div>
        <div class="relative w-24 h-24 -top-2">
          <div
            class="w-24 h-24 border-2 border-[#BB8A52] p-2 top-0  absolute rotate-12"></div>
          <img
            src="../assets/images/react.png"
            class="p-4 border-2 border-[#BB8A52]" />
        </div>
      </div>
    </div>

    <!-- project page -->
    <div class="relative">

      <h1
      class="font-ribeye text-5xl text-[#BB8A52]  md:hidden lg:hidden absolute xs:right-16 hidden xs:-top-20"
      >
      &lt;Kalakari/&gt;
    </h1>
  </div>
    <div
      class="relative overflow-hidden lg:h-screen font-montserrat"
      id="projectpg">
      <!-- <div class="absolute flex justify-center block top-24 lg:hidden">

        <div class="swiper-button-prev " style="color:#BB8A52;"></div>
        <div class="swiper-button-next " style="color:#BB8A52;"></div>
        

      </div> -->
      <div class="absolute flex justify-start block md:justify-center left-12 right-12 lg:hidden top-40 ">
        <div class=" swiper-button-prev" style="color:#BB8A52; width: 20px;"></div>

        <div class=" swiper-button-next" style="color:#BB8A52; width: 20px;"></div>
      </div>
      <div class="absolute w-full left-2 md:left-0 top-40">
        <div class="hidden lg:block">

          <div class=" swiper-button-prev" style="color:#BB8A52;"></div>
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
              <div class="flex justify-center pt-12 md:py-12 md:w-full">
                  <ProjectCard :project="p" />
                  
                </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <!-- <div class="hidden mr-40 lg:block swiper-button-next" style="color:#BB8A52;"></div> -->

      <img
        src="../assets/images/downtriangle.png"
        class="w-32 absolute hidden lg:block top-0 right-[30%]" />
      <div class="absolute flex items-center top-[26%] lg:justify-center">
 

        
</div>

      <div
        class="lg:bg-[#f0fff1] lg:w-[50%] overflow-hidden   h-screen  px-6">
        <div
          class="md:mx-2 lg:border-r-2  h-full lg:pt-32 border-[#BB8A52] ">
          <h1
            class="absolute font-bold text-white right-12 xs:right-20 h-fit md:top-0 lg:right-20 md:right-64 lg:top-8 text-[60px] lg:text-7xl">
            Projects
          </h1>


          </div>
          
 <div class="flex w-full">


          <h1
            class="font-ribeye text-7xl text-[#BB8A52] rotate-90 hidden lg:block absolute -right-[170px] top-[340px]"
            >
            KALAKARI
          </h1>
          
        </div>
      </div>
  </div>
      <div class="relative z-50 py-16 text-center xs:py-8 md:py-24 lg:h-56 lg:py-0 lg:text-start" id="connectpg">
          <div class="absolute z-50 flex flex-col justify-between w-full lg:flex-row md:flex-row sm:flex-col md:top-24 lg:top-0 -top-20 ">

          
          <h1
          class=" px-6 py-8 xs:py-2 lg:ml-36 text-[52px]  lg:text-7xl md:h-56 text-[#f0fff1] lg:text-[#0C3A2F] font-bold">
          Connect
        </h1>
        <div class="flex flex-col lg:mr-12">

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
          </div>
      </div>
  </div>
          <div
        class="lg:bg-[#f0fff1] lg:w-[50%] lg:h-56 overflow-hidden   px-10">
        <div
          class="mx-2  lg:border-r-2 h-24  lg:h-56  w-full  border-[#BB8A52] "></div>
        </div>
      </div>
    
  </div>
</template>
<script setup>
import { ref } from 'vue';
import ProjectCard from '../components/projectCard.vue';
import projects from "/project.json"

const threeel = ref(false);

function threeElements() {
  threeel.value = !threeel.value;
  console.log('Toggle menu');
}
</script>
