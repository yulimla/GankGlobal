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
                <img src="@/public/Logo_Gank_WebBeta.png" alt="Gank" class="h-full object-contain">
            </NuxtLink>
            <!---->
            <div class="menu-link">
                <!-- <div class="language-switcher">
                    <img src="https://ganknow.com/img/country-lang.010232c.svg" alt="preference">
                    <span class="uppercase">ID-id</span>
                </div> -->
                <div class="w-10 h-10 flex-none flex justify-end items-center lg:hidden">
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
            <div class="hidden w-full items-center justify-between lg:flex lg:flex-row lg:ml-8">
                <ul data-v-c3197312="" class="
        flex flex-col
        items-center
        space-y-5
        mt-6
        lg:flex-row lg:space-x-5 lg:space-y-0 lg:mt-4
        2xl:space-x-10
      ">
                    <li data-v-c3197312=""><a data-v-c3197312="" href="/discover" class="menu-item-link text-white">
                            Discover
                        </a></li>
                    <li data-v-c3197312=""><a data-v-c3197312="" href="/boost" class="menu-item-link text-white">
                            Boost
                        </a></li>
                    <li data-v-c3197312="">
                        <div data-v-c3197312="" class="menu-item-link cursor-pointer text-white">
                            Blog
                        </div>
                    </li>
                </ul>
                <div class="flex items-center">
                    <div class="flex justify-start items-center space-x-4"><a href="/yulimla"
                            class="flex items-center justify-center space-x-4"><span
                                class="ant-avatar ant-avatar-lg ant-avatar-circle ant-avatar-image"><img
                                    src="https://lh3.googleusercontent.com/a/ALm5wu0fDM8J3u_nWVxYCAnWO_rpeagjTbQ4uOh-2K6ltA=s96-c"
                                    alt="yulimla"></span> <a class="navbar-dropdown-title flex items-center text-white">
                                yulimla
                            </a></a> <button class="w-9 h-9 relative"><img
                                src="https://ganknow.com/img/notifications.1c8ee54.svg" alt="notification"
                                class="w-full h-full">
                            <!---->
                        </button>
                        <div class="h-10 flex-none lg:flex justify-end items-center hidden"><i aria-label="icon: menu"
                                tabindex="-1" class="text-2xl !text-white anticon anticon-menu"><svg
                                    viewBox="64 64 896 896" data-icon="menu" width="1em" height="1em"
                                    fill="currentColor" aria-hidden="true" focusable="false" class="">
                                    <path
                                        d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z">
                                    </path>
                                </svg></i>
                            <!---->
                        </div>
                        <div class="language-switcher"><img src="https://ganknow.com/img/country-lang.010232c.svg"
                                alt="preference">
                            <span class="uppercase">ID-id</span>
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