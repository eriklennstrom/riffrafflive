<template>
  <div class="min-h-screen">
    <div class="frame text-gray-900 mt-5 ml-16 mr-5">
      <nav class="text-lg px-6 py-6">
	<div class="container mx-auto mt-28 mb-24 flex items-center justify-between">
					<!-- <div> -->
					<!-- 	<NuxtLink to="/">Logo</NuxtLink> -->
					<!-- </div> -->
	  <div>
	    <ul class="flex space-x-8 text-3xl text-red-400">
	      <li><NuxtLink to="/">Hem</NuxtLink></li>
	      <li><NuxtLink to="/events">Events</NuxtLink></li>
	      <li><NuxtLink to="/contact">Kontakt</NuxtLink></li>
	    </ul>
	  </div>
	</div>
       </nav>
       <main class="container mx-auto">
         <slot />
       </main>
     </div>
     <footer class="container mx-auto ">
       heeej
     </footer>

  </div>
</template>
<style>
.frame {
	background: rgba(246,246,246,1);
}
.router-link-active {
	font-weight: bold;
}
</style>
