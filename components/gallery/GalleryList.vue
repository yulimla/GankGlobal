<template>
    <div class="page-gallery">
        <div class="btn-gallery-action">
            <div class="btn page-gallery-btn">Add Image</div>
            <div class="btn page-gallery-btn">New Album</div>
        </div>
        <div class="gallery-album flex">
            <div class="album-card">
                <div class="album-title-text">+ New</div>
            </div>
            <div class="album-card bg-cover-fit"
                style="background-image:linear-gradient(180deg, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.3)),url('https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp');">
                <div class="album-title-text">album-card</div>
            </div>
            <div class="album-card bg-cover-fit"
                style="background-image:linear-gradient(180deg, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.3)),url('https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp');">
                <div class="album-title-text">album-card</div>
            </div>
        </div>
        <div class="overflow-hidden ">
            <div class="container px-5 py-2 mx-auto lg:pt-10 lg:px-10">
                <div class="title-gallery">
                    Latest
                </div>
                <div class="flex flex-wrap -m-1 md:-m-2">
                    <div class="flex flex-wrap w-1/2">
                        <div class="w-1/2 p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp">
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp">
                        </div>
                        <div class="w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp">
                        </div>
                    </div>
                    <div class="flex flex-wrap w-1/2">
                        <div class="w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp">
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp">
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url("~/assets/styles/pages/gallery.scss");
</style>