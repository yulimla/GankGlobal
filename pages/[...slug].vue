
<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import theGallery from "../components/gallery/GalleryList.vue"
definePageMeta({
    layout: "profile",
});
</script>

<template>
    <div>
        <div class="container mx-auto">
            <div class="banner 5xl:max-w-[1500px]">
                <div class="banner-cover relative" style="background-image: url('/banner.webp');">
                    <div
                        class="banner-cover__wrapper aspect-w-16 aspect-h-9 md:aspect-w-75 md:aspect-h-14 mx-auto  md:block">
                    </div>
                </div>
                <div class="user-profile-info xl:w-[1100px] mx-auto md:h-[90px] h-[120px] ">
                    <div class="user-profile-info__wrapper">
                        <div class="flex-1 text-white">
                            <div class="flex space-x-4 flex-wrap md:flex-nowrap">
                                <div class="relative w-full h-full md:w-[120px] md:h-[90px] md:mb-4 top-10" style="top: -30px;">
                                    <div class="relative flex md:justify-center md:aspect-w-1 md:aspect-h-1" >
                                      <img src="profile.jfif" alt="Yulimla"
                                            class="object-cover rounded-full w-24 border-solid border-white"
                                            style="border-width: 4px; ">
                                    </div>
                                  
                                </div>
                                <div class="md:min-w-[300px] md:pl-4 space-y-1">
                                    <div class="flex flex-row flex-wrap items-center justify-start space-x-2">
                                        <a href="/Yulimla" class="nuxt-link-active">
                                            <h1 class="font-extrabold mb-0 text-lg md:text-[1.563rem] text-white">
                                                Yulimla
                                            </h1>
                                        </a>
                                        <!---->
                                        <div class="cursor-pointer"><svg width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="12" cy="12" r="12" fill="white" fill-opacity="0.2"></circle>
                                                <path
                                                    d="M16.5739 9.46835C16.5739 9.46835 16.6666 9.46835 16.5739 9.46835L17.2232 8.82945C17.5942 8.46436 17.5942 7.82545 17.2232 7.46036L16.0173 6.27382C15.6463 5.90873 14.9969 5.90873 14.6259 6.27382L13.9766 6.91272C13.9766 6.91272 13.9766 6.91272 13.9766 7.004L16.5739 9.46835Z"
                                                    fill="white"></path>
                                                <path
                                                    d="M7.66969 15.7656L8.87557 17.0435L7.39141 17.226L6 17.4998L6.18552 16.0395L6.37104 14.5791L7.66969 15.7656Z"
                                                    fill="white"></path>
                                                <path
                                                    d="M14.4413 8.00801L7.76255 14.5796L7.39151 14.2145L14.0703 7.64292L13.6992 7.27783L6.74219 14.2145L9.24672 16.6789L16.2965 9.83346L14.4413 8.00801Z"
                                                    fill="white"></path>
                                            </svg>
                                            <!---->
                                        </div>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <div class="followers-section">
                                            <i aria-label="icon: heart" class="text-xl mr-2">
                                                <svg viewBox="64 64 896 896" data-icon="heart" width="1em" height="1em"
                                                    fill="currentColor" aria-hidden="true" focusable="false" class="">
                                                    <path
                                                        d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z">
                                                    </path>
                                                </svg>
                                            </i>
                                            <span class="text-xs md:text-sm text-white mr-2">No followers yet</span>
                                        </div>
                                        <div class="followers-section">
                                            <span class="text-xs md:text-sm text-white mr-2"><b>1</b> Following</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex space-x-0">
                            <div id="donate-follow-button" class="space-x-2 flex">
                                <button class="btn btn-outline border-red-500 rounded-lg border-solid border-2 p-2">
                                    <img src="/share.svg"></button>
                            </div>
                        </div>
                    </div>
                    <!---->
                </div>
            </div>

        </div>


        <!-- // profile tabs -->

        <div class="profile-tabs xl:w-[1100px] mx-auto mt-10 md:mt-6">
            <TabGroup defaultIndex="2">
                <TabList class="tablist">
                    <Tab>
                        Profile
                    </Tab>
                    <Tab>
                        Feed
                    </Tab>
                    <Tab >
                        Gallery
                    </Tab>
                    <Tab>
                        Shop
                    </Tab>

                </TabList>
                <TabPanels>
                    <TabPanel class="p-2">Content Profile</TabPanel>
                    <TabPanel class="p-2">Content Feed</TabPanel>
                    <TabPanel class="p-2" >
                        <theGallery></theGallery>
                    </TabPanel>
                    <TabPanel class="p-2">Content Shop</TabPanel>
                </TabPanels>
            </TabGroup>
        </div>

    </div>
</template>


<style scoped lang="scss" >
@import url('~/assets/styles/pages/profile.scss');
</style>