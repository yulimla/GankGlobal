<script setup>
//import "@/assets/styles/components/theHeader.scss";
// import "@/assets/styles/components/theHeader
const menuList = [{
    'title': "Discover",
    'target': "#"
}, {
    'title': "Boost",
    'target': "#"
}, {
    'title': "Blog",
    'target': "#"
},
]

</script>

<template>
    <header class="">
        <div class="
         header-wrapper">
            <NuxtLink to="/" class="gank-logo">
                <img src="/Logo_Gank_WebBeta.png" alt="Gank" class="h-full object-contain">
            </NuxtLink> 
            <!---->
            <!-- menu link mobile -->
            <div class="menu-link-mobile ">
                <div class="language-switcher">
                    <img src="/country-lang.svg" alt="preference" class="mr-2">
                    <span class="uppercase">ID-en</span>
                </div>
                <!-- burger menu -->
                <div class="w-10 h-10 flex-none flex justify-end items-center xl:hidden">
                    <i aria-label="icon: menu" tabindex="-1" class="text-2xl !text-white anticon anticon-menu">
                        <svg viewBox="64 64 896 896" data-icon="menu" width="1em" height="1em" fill="currentColor"
                            aria-hidden="true" focusable="false" class="">
                            <path
                                d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z">
                            </path>
                        </svg>
                    </i>
                    <!---->
                </div>
            </div>
            <!-- menu link large -->
            <div class="menu-link ">
                <!-- menu list -->
                <ul class="menu-link-list mt-0">
                    <li v-for="itm in menuList" :key="itm">
                        <NuxtLink to="/" class="menu-item-link">
                            {{ itm.title }}
                        </NuxtLink>
                    </li>
                </ul>
                <!-- menu right action -->


                <div class="menu-link-action">

                    <div class="menu-link-action__items">
                        <NuxtLink to="/yulimla" class="gank-avatar-profile">
                            <img src="profile.jfif"
                                alt="yulimla">
                            <div class="profile-name">
                                Yulimla
                            </div>
                        </NuxtLink>

                        <!-- notification -->
                        <button class="notification">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>

                        </button>
                        <!-- burger menu -->
                        <div class="h-10 flex-none xl:flex justify-end items-center hidden">
                            <i aria-label="icon: menu" tabindex="-1"
                                class="text-2xl !text-white anticon anticon-menu"><svg viewBox="64 64 896 896"
                                    data-icon="menu" width="1em" height="1em" fill="currentColor" aria-hidden="true"
                                    focusable="false" class="">
                                    <path
                                        d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z">
                                    </path>
                                </svg>
                            </i>
                        </div>
                        <!-- // language-switcher -->
                        <div class="language-switcher">
                            <img src="/country-lang.svg" alt="preference" class="mr-2">
                            <span class="uppercase">ID-en</span>
                        </div>

                    </div>
                </div>
            </div>
            <!---->
        </div>
        <!---->
        <div class="w-full h-auto">
            <!---->
        </div>
    </header>
</template>

<style scoped lang="scss">
@import url('@/assets/styles/components/theHeader.scss');
</style>