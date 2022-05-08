<script setup>
  import axios from "axios"
  import moment from "moment"
  import {ref, onBeforeMount, watch} from 'vue'
  import {size} from 'loadsh'
  import Loading from '../components/Loading.vue'
  import Navbar from '../components/Navbar.vue'
  import SideBar from '../components/SideBar.vue'

  const postAPI = 'https://secret-basin-09481.herokuapp.com/posts/'


  const posts = ref([])
  const isLoading = ref(false)

  async function onLoading(callback) {
    isLoading.value = true
    const data = await callback
    isLoading.value = false
    return data
  }

  async function fetchPostAPI(url) {
    const {data: {data: postsData}} = await onLoading(axios.get(url))
    posts.value = postsData
  }

  onBeforeMount(async () => {
    await fetchPostAPI(postAPI)
  })

  const postType = ref('newest')
  const searchText = ref('')


  async function onSearch() {
    let url = postAPI
    switch (postType.value) {
      case 'earliest':
        url += '/earliest'
        break
      case 'keyword':
        if (searchText.value) url += `/keyword/${searchText.value}`
        break
      default:
        break
    }
    await fetchPostAPI(url)
  }

  watch(postType, (newVal) => {
    if (newVal !== 'keyword') {
      searchText.value = ''
      onSearch()
    }
  })


</script>

<template>
    <navbar></navbar>
    <div class="container mx-auto my-5 md:my-0">
        <div class="flex flex-row space-x-7">
            <div class="basis-3/5">
                <!--            最新貼文-->
                <div class="flex flex-row space-x-3 mb-4">
                    <div class="basis-6/12">
                        <select v-model="postType"
                                class="block appearance-none w-full bg-white border-2 border-dark px-4 py-3 shadow">
                            <option value="newest">最新貼文</option>
                            <option value="earliest">最早貼文</option>
                            <option value="keyword">關鍵字搜尋</option>
                        </select>
                    </div>
                    <div class="basis-6/12">
                        <div class="flex">
                            <input v-model="searchText" :disabled="postType !=='keyword'" type="text"
                                   class="bg-white border-2 border-dark px-4 py-3 w-80 disabled:bg-grey-1"
                                   placeholder="搜尋貼文">
                            <button @click="onSearch"
                                    class="flex items-center justify-center px-4 py-3 border-2 border-l-0 border-dark bg-primary">
                                <svg class="w-6 h-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 24 24">
                                    <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- axios -->
                <section v-if="isLoading">
                    <loading></loading>
                </section>
                <template v-else-if="size(posts) === 0 && searchText">
                    <section class="bg-white border-2 border-dark rounded-lg shadow-x2 mb-4">
                        <div class="mb-4">
                            <div class="p-3 border-b-2 border-dark mb-4">
                                <ul class="space-x-1 flex">
                                    <li class="h-2 w-2 rounded-full bg-negative"></li>
                                    <li class="h-2 w-2 rounded-full bg-positive"></li>
                                    <li class="h-2 w-2 rounded-full bg-success"></li>
                                </ul>
                            </div>
                            <div class="flex justify-center items-center">
                                <span class="text-grey-3">
                                    找不到任何關於 {{ searchText }} 的貼文
                                </span>
                            </div>
                        </div>
                    </section>
                </template>
                <template v-else-if="size(posts) === 0">
                    <section class="bg-white border-2 border-dark rounded-lg shadow-x2 mb-4">
                        <div class="mb-4">
                            <div class="p-3 border-b-2 border-dark mb-4">
                                <ul class="space-x-1 flex">
                                    <li class="h-2 w-2 rounded-full bg-negative"></li>
                                    <li class="h-2 w-2 rounded-full bg-positive"></li>
                                    <li class="h-2 w-2 rounded-full bg-success"></li>
                                </ul>
                            </div>
                            <div class="flex justify-center items-center">
                                <span class="text-grey-3">
                                    目前尚無動態，新增一則貼文吧！
                                </span>
                            </div>
                        </div>
                    </section>
                </template>
                <template v-else>
                    <section
                            v-for="post in posts" :key="post._id"
                            class="bg-white border-2 border-dark p-6 rounded-lg shadow-x2 mb-4">
                        <div class="flex mb-4">
                            <div class="mr-4">
                                <img src="../assets/images/user_default.png" width="45" height="45">
                            </div>
                            <div class="flex flex-col justify-around mb-4">
                                <p class="font-noto-sans-tc font-bold leading-normal m-0 p-0">{{ post.ownerName }}</p>
                                <p class="font-baloo-da-2 text-xs text-accent">
                                    {{ moment(post.createdAt).format("YYYY-MM-DD HH:mm") }}</p>
                            </div>
                        </div>
                        <div class="mb-4">{{ post.content }}</div>
                        <div v-if="post.image">
                            <img :src="post.image" class="object-cover rounded h-36 w-full">
                        </div>
                    </section>
                </template>
            </div>
            <div class="basis-2/5 ">
                <!--            張貼動態-->
                <side-bar></side-bar>
            </div>
        </div>
    </div>
</template>
