
<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

definePageMeta({
    layout: "profile",
});
</script>

<template>
    <div>
        <p>{{ $route.params.slug }}</p>

        <div class="container">
            <div class="banner">
                <div data-v-694b6a4d="" id="user" class="hidden md:flex justify-center mt-4 pb-0 px-4 xl:px-0 relative">
                    <div data-v-694b6a4d="" class="
                          flex
                          pb-4
                          flex-col
                          md:flex-row
                          w-full
                          rounded
                          md:items-between
                          xl:w-[1100px]
                          border-b
                         border-white border-opacity-20">
                        <div data-v-694b6a4d="" class="flex-1 text-white">
                            <div data-v-694b6a4d="" class="flex space-x-4">
                                <div data-v-694b6a4d=""
                                    class="relative w-full h-full md:w-[120px] md:h-[120px] mb-4 -top-10">
                                    <div data-v-694b6a4d=""
                                        class="relative flex justify-center md:aspect-w-1 md:aspect-h-1">
                                        <!----> <img data-v-694b6a4d=""
                                            src="https://lh3.googleusercontent.com/a/ALm5wu0DY5B_h07YhZZkjkdYG69rc7__VJK72U2_8II=s96-c"
                                            alt="sandromega"
                                            class="object-cover rounded-full w-24 border-solid border-white"
                                            style="border-width: 4px;">
                                    </div>
                                    <!---->
                                </div>
                                <div data-v-694b6a4d="" class="md:min-w-[300px] md:pl-4 space-y-1">
                                    <div data-v-694b6a4d=""
                                        class="flex flex-row flex-wrap items-center justify-start space-x-2"><a
                                            data-v-694b6a4d="" href="/sandromega" class="nuxt-link-active">
                                            <h1 data-v-694b6a4d=""
                                                class="font-extrabold mb-0 text-lg md:text-[1.563rem] text-white">
                                                sandromega
                                            </h1>
                                        </a>
                                        <!---->
                                        <div data-v-694b6a4d="" class="cursor-pointer"><svg width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    <div data-v-694b6a4d="" class="flex items-center space-x-2">
                                        <div data-v-694b6a4d="" class="followers-section"><i data-v-694b6a4d=""
                                                aria-label="icon: heart"
                                                class="!text-gank-red-3 text-xl anticon anticon-heart"><svg
                                                    viewBox="64 64 896 896" data-icon="heart" width="1em" height="1em"
                                                    fill="currentColor" aria-hidden="true" focusable="false" class="">
                                                    <path
                                                        d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z">
                                                    </path>
                                                </svg></i> <span data-v-694b6a4d=""
                                                class="text-xs md:text-sm text-white">No followers
                                                yet</span></div>
                                        <div data-v-694b6a4d="" class="followers-section"><span data-v-694b6a4d=""
                                                class="text-xs md:text-sm text-white"><b>1</b> Following</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-v-694b6a4d="" class="flex space-x-0">
                            <div data-v-694b6a4d="" id="donate-follow-button" class="space-x-2 flex">
                                <!---->
                                <!---->
                                <!----> <button data-v-694b6a4d=""
                                    class="gank-btn !h-[35px] font-medium gank-btn-ghost"><img data-v-694b6a4d=""
                                        src="/_nuxt/img/ic-share.10f9223.svg"></button>
                            </div>
                        </div>
                    </div>
                    <!---->
                </div>
            </div>

        </div>


        <!-- // profile tabs -->

        <div class="profile-tabs">
            <TabGroup>
                <TabList class="tablist">
                    <Tab>Tab 1</Tab>
                    <Tab>Tab 2</Tab>
                    <Tab>Tab 3</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>Content 1</TabPanel>
                    <TabPanel>Content 2</TabPanel>
                    <TabPanel>Content 3</TabPanel>
                </TabPanels>
            </TabGroup>
        </div>

    </div>
</template>


<style scoped lang="scss" >
.profile-tab {
    display: flex;
    flex-direction: row;
    transition: margin-left .3s cubic-bezier(.645, .045, .355, 1);
    will-change: margin-left;

    font-size: 1.25rem !important;
    margin-left: 0 !important;
    font-weight: 500 !important;
}

.tablist {

    button {
            position: relative;
            display: inline-block;
            box-sizing: border-box;
            height: 100%;
            margin: 0 32px 0 0;
            padding: 12px 16px;
            text-decoration: none;
            cursor: pointer;
            transition: color .3s cubic-bezier(.645, .045, .355, 1);
            &:before {
                    position: absolute;
                    top: -1px;
                    left: 0;
                    width: 100%;
                    border-top: 2px solid transparent;
                    border-radius: 4px 4px 0 0;
                    transition: all .3s;
                    content: "";
                    pointer-events: none;
                }
    }
}
</style>