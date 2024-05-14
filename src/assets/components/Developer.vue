<template>
    <TransitionRoot as="template" :show="show">
        <Dialog class="relative z-10" @close="emit('close')">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel
                            class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                            <div class="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                                <button type="button"
                                    class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    @click="emit('close')">
                                    <span class="sr-only">Close</span>
                                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div class="sm:flex sm:flex-col sm:items-center">
                                <div class="flex flex-col items-center gap-4">
                                    <img class="inline-block h-[100px] w-[100px] rounded-full shadow-xl" :src="Me" alt="profile-img" />
                                    <h4 class="text-lg font-poppins font-500">Nicole Amoguis <span class="text-sm font-poppins font-300">(23Yr)</span></h4>
                                    <h3 class="font-poppins font-300">Software Developer</h3>
                                    <div class="grid grid-cols-2 gap-6 sm:grid-cols-4">
                                        <div class="col-span-1 bg-[#EEF7FF] rounded-lg shadow-lg p-4">
                                            <a href="https://github.com/ViltLaravel/anime-finder">
                                                <img :src="Github" alt="profile-img">
                                            </a>
                                        </div>
                                        <div class="col-span-1 bg-[#EEF7FF] rounded-lg shadow-lg p-4">
                                            <a href="https://www.linkedin.com/in/nicole-amoguis-282427284/">
                                                <img :src="Linkedin" alt="profile-img">
                                            </a>
                                        </div>
                                        <div class="col-span-1 bg-[#EEF7FF] rounded-lg shadow-lg p-4">
                                            <a href="#">
                                                <img :src="Instagram" alt="profile-img">
                                            </a>
                                        </div>
                                        <div class="col-span-1 bg-[#EEF7FF] rounded-lg shadow-lg p-4">
                                            <a href="https://portfolio-henna-ten-99.vercel.app/">
                                                <img :src="Avatar" alt="profile-img">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue';
import Github from '@/assets/img/github.png'
import Facebook from '@/assets/img/facebook.png'
import Avatar from '@/assets/img/avatar.png'
import Instagram from '@/assets/img/instagram.png'
import Linkedin from '@/assets/img/linkedin.png'
import Me from '@/assets/img/me.png'

const show = ref(false)

const emit = defineEmits(['close'])
</script>