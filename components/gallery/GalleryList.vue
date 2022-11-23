<script setup>
import { ref } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'

import listGallery from "../../data/gallery.json";

const isOpen = ref(false);

function closeModal() {
    isOpen.value = false;
}
function openModal(item) {
    isOpen.value = true;
    this.currentData = item;
}
let currentData = {
    url: 'test',
    title: 'this is title',
}

</script>

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
        <!-- gallery list -->
        <div class="container mx-auto gank-gallery">
            <ul class="grid">
                <template v-for="item in listGallery" :key="item.url">
                    <li class="grid__item p-2 rounded-lg overflow-hidden" :class="'grid__item--' + item.type"
                        @click="openModal(item)">
                        <img class="grid__image" :src="item.url" alt="" />
                    </li>
                </template>
            </ul>
        </div>
        <!-- this part should be a component -->
        <TransitionRoot appear :show="isOpen" as="template">
            <Dialog as="div" @close="closeModal" class="relative z-10">
                <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                    enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-black bg-opacity-25" />
                </TransitionChild>

                <div class="fixed inset-0 overflow-y-auto">
                    <div class="flex min-h-full items-center justify-center p-4 text-center">
                        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100" leave="duration-200 ease-in"
                            leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
                            <DialogPanel
                                class="w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all" style="background-color: #091c2d">
                                <div >
                                    <img :src="currentData.url" alt="" srcset="" class="image-modal">
                                </div>
                                <DialogTitle as="h3" class="text-lg font-medium leading-6 text-white mt-2">
                                    {{ currentData.title }}
                                </DialogTitle>
                                <div class="mt-4">
                                    <div class="comment-box">
                                        <div class="text-sm text-white">Comment</div>
                                        <textarea class="
                                            form-control
                                            block
                                            w-full
                                            px-3
                                            py-1.5
                                            text-base
                                            font-normal
                                            text-white bg-clip-padding
                                            border border-solid border-gray-300
                                            rounded
                                            transition
                                            ease-in-out
                                            m-0
                                            mt-3
                                            focus:text-white focus:border-red-600 focus:outline-none
                                          " id="exampleFormControlTextarea1" rows="3"
                                            placeholder="Write a comment" style="background-color: #091c2d"></textarea></div>
                                </div>

                                <div class="mt-4">
                                    <button type="button"
                                        class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        @click="closeModal">
                                        Post
                                    </button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </div>
</template>

<style scoped>
@import url("~/assets/styles/pages/gallery.scss");
</style>