<template>
  <section id="Hero" class="relative bg-white dark:bg-gray-900 overflow-hidden">
    <!-- Gelombang biru -->
    <div class="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
      <svg class="w-full h-[320px] pointer-events-none" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#1e3a8a" fill-opacity="1"
          d="M0,160L60,144C120,128,240,96,360,101.3C480,107,600,149,720,160C840,171,960,149,1080,154.7C1200,160,1320,192,1380,208L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
      </svg>
        <div class="absolute bottom-0 left-0 right-0 z-0 pointer-events-none">
      <svg viewBox="0 0 1440 320" class="w-full h-[320px] dark:bg=teal-400 pointer-events-none" preserveAspectRatio="none">
        <path fill="#1e3a8a" fill-opacity="1"
          d="M0,224L60,213.3C120,203,240,181,360,165.3C480,149,600,139,720,149.3C840,160,960,192,1080,213.3C1200,235,1320,245,1380,250.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
        </path>
      </svg>
    </div>
    </div>

    <!-- Konten Hero -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center gap-10">
      <!-- Text -->
      <div class="md:w-1/2 text-left">
        <p class="text-gray-600">Hello, I'm</p>
        <h2 class="text-4xl md:text-5xl font-bold text-blue-900">ZAKI ALHAFIZH EFENDI</h2>
        <p class="text-lg mt-3 text-blue-700">UI/UX Designer And Front-End</p>
        <p class="text-gray-500 mt-4 max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, cumque. Lorem ipsum dolor sit amet consectetur.
        </p>
          
          
        <!-- instagram -->
         <div class="mb-4 flex items-center space-x-4">
           <a href="#" class=" bg-orange-600 rounded-lg text-gray-300 hover:text-teal-400 transition duration-300 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
              <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
          </a >

            <!-- twitter -->
          <a href="" class="  bg-orange-600 rounded-lg text-gray-300 hover:text-teal-400 transition duration-300 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16"><path fill="currentColor" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"/></svg>
          </a>
          <!-- tiktok -->
           <a href="" class="  bg-orange-600 rounded-lg text-gray-300 hover:text-teal-400 transition duration-300 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.2 10.1c0 .22-.18.401-.4.39a8 8 0 0 1-3.362-.93c-.281-.15-.638.045-.638.364V15.5a6 6 0 1 1-6.4-5.987a.38.38 0 0 1 .4.387v2.8c0 .22-.18.397-.398.433A2.4 2.4 0 1 0 12.2 15.5V2.9a.4.4 0 0 1 .4-.4h2.8a.43.43 0 0 1 .418.4a4.4 4.4 0 0 0 3.983 3.982c.22.02.4.197.4.418z"/></svg>
           </a>
           <!-- facebook -->
            <a href="" class="  bg-orange-600 rounded-lg text-gray-300 hover:text-teal-400 transition duration-300 mt-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg>
            </a>
           <!-- linkedin -->
            <a href="" class=" bg-orange-600 rounded-lg text-gray-300 hover:text-teal-400 transition duration-300 mt-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M7.5 9h-4a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5M7 21H4V10h3zM18 9c-1.085 0-2.14.358-3 1.019V9.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V16a1.5 1.5 0 1 1 3 0v5.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V14a5.006 5.006 0 0 0-5-5m4 12h-3v-5a2.5 2.5 0 1 0-5 0v5h-3V10h3v1.203a.5.5 0 0 0 .89.313A3.983 3.983 0 0 1 22 14zM5.868 2.002A3 3 0 0 0 5.515 2a2.74 2.74 0 0 0-2.926 2.729a2.71 2.71 0 0 0 2.869 2.728h.028a2.734 2.734 0 1 0 .382-5.455M5.833 6.46q-.173.016-.347-.003h-.028A1.736 1.736 0 1 1 5.515 3a1.737 1.737 0 0 1 .318 3.46"/></svg>
            </a>
            </div>
    

        <!-- Button -->
        <div class="mt-6">
          <a href="#" class="inline-block bg-blue-600 dark:bg-teal-400 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">
            Hire Me
          </a>
        </div>
      </div>

      <!-- Image -->
      <div class="md:w-1/2 flex justify-center">
        <img src="@/assets/img/1.png" alt="Profile"
             class="w-72 md:w-[350px] rounded-xl shadow-lg object-cover  relative z-10" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>
