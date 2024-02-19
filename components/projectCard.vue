<template>
  <div>
    <div class="w-[95%]">
      <NuxtLink
        :to="project.link"
        target="_blank"
        class="relative flex flex-col items-center justify-center lg:flex-row"
        ><img :src="project.image" class="w-full lg:w-3/5 lg:h-1/2" />
        <img
          src="https://res.cloudinary.com/dy7zpv1ij/image/upload/v1708279941/codeSnippet_gwbomh.png"
          class="my-4 md:mx-4 lg:my-0 lg:w-2/5 h-1/2 md:w-full " />
        <div class="absolute md:w-3/4 lg:w-1/3 md:left-0 top-64 md:top-[400px] lg:top-20 lg:left-[59%]">
          <div class="flex flex-col items-start justify-start h-full">
            <h1 class="px-6 py-2 text-lg font-bold">{{ project.name }}</h1>
            <h1 class="px-6 py-3 text-justify ">{{ project.text }}</h1>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 ml-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
defineProps({
  project: Object,
});
</script>
