<script setup>
  import axios from "axios"
  import moment from "moment"
  import {ref, onBeforeMount} from 'vue'

  const posts = ref([])

  onBeforeMount(async () => {
    const {data: {data: postsData}} = await axios.get('https://secret-basin-09481.herokuapp.com/posts/')
    posts.value = postsData
  })

  const postType = ref('newest')
  const searchText = ref('')


  async function onSearch() {
    let url = 'https://secret-basin-09481.herokuapp.com/posts'
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
    const {data: {data: postsData}} = await axios.get(url)
    posts.value = postsData
  }


</script>

<template>
    <nav class="bg-white border-b-3 border-dark mb-12">
        <div class="container mx-auto px-0 sm: px-5">
            <div class="flex items-center py-3">
                <h1 class="text-2.5xl font-paytone-one">MetaWall</h1>
                <div class="block ml-auto font-azeret-mono">
                    <div class="flex items-center">
                        <img src="../assets/images/user_default.png" class="mr-2.5" width="30" height="30">
                        <a href="#" class="border-b-2 border-dark font-bold">Member</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <div class="container mx-auto my-5 md:my-0">
        <div class="flex flex-row space-x-7">
            <div class="basis-3/5">
                <!--            最新貼文-->
                <div class="flex flex-row space-x-3 mb-4">
                    <div class="basis-6/12">
                        <select v-model="postType" class="block appearance-none w-full bg-white border-2 border-dark px-4 py-3 shadow">
                            <option value="newest">最新貼文</option>
                            <option value="earliest">最早貼文</option>
                            <option value="keyword">關鍵字搜尋</option>
                        </select>
                    </div>
                    <div class="basis-6/12">
                        <div class="flex">
                            <input v-model="searchText" type="text" class="bg-white border-2 border-dark px-4 py-3 w-80" placeholder="搜尋貼文">
                            <button @click="onSearch" class="flex items-center justify-center px-4 py-3 border-2 border-l-0 border-dark bg-primary">
                                <svg class="w-6 h-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 24 24">
                                    <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- axios -->
                <section
                        v-for="post in posts" :key="post._id"
                        class="bg-white border-2 border-dark p-6 rounded-lg shadow-x2 mb-4">
                    <div class="flex mb-4">
                        <div class="mr-4">
                            <img src="../assets/images/user_default.png" width="45" height="45">
                        </div>
                        <div class="flex flex-col justify-around mb-4">
                            <p class="font-noto-sans-tc font-bold leading-normal m-0 p-0">{{ post.ownerName }}</p>
                            <p class="font-baloo-da-2 text-xs text-accent">{{ moment(post.createdAt).format("YYYY-MM-DD HH:mm") }}</p>
                        </div>
                    </div>
                    <div class="mb-4">{{ post.content }}</div>
                    <div v-if="post.image">
                        <img :src="post.image" class="object-cover rounded h-36 w-full">
                    </div>
                </section>
                <!--            邊緣小杰-->
<!--                <section class="bg-white border-2 border-dark p-6 rounded-lg shadow-x2 mb-4">-->
<!--                    <div class="flex mb-4">-->
<!--                        <div class="mr-4">-->
<!--                            <img src="../assets/images/user.png" width="45" height="45">-->
<!--                        </div>-->
<!--                        <div class="flex flex-col justify-around mb-4">-->
<!--                            <p class="font-noto-sans-tc font-bold leading-normal m-0 p-0">邊緣小杰</p>-->
<!--                            <p class="font-baloo-da-2 text-xs text-accent">2022/1/10 12:00</p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="mb-4">外面看起來就超冷....<br/>我決定回被窩繼續睡....>.&lt;</div>-->
<!--                    <div>-->
<!--                        <img src="../assets/images/image@2x.png">-->
<!--                    </div>-->
<!--                </section>-->
                <!--            波吉-->
<!--                <section class="bg-white border-2 border-dark p-6 rounded-lg shadow-x2 mb-4">-->
<!--                    <div class="flex mb-4">-->
<!--                        <div class="mr-4">-->
<!--                            <img src="../assets/images/user6.png" width="45" height="45">-->
<!--                        </div>-->
<!--                        <div class="flex flex-col justify-around mb-4">-->
<!--                            <p class="font-noto-sans-tc font-bold leading-normal m-0 p-0">波吉</p>-->
<!--                            <p class="font-baloo-da-2 text-xs text-accent">2022/1/10 12:00</p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="mb-4">-->
<!--                        我一定要成為很棒棒的國王！-->
<!--                    </div>-->
<!--                </section>-->
                <!--            阿爾敏-->
<!--                <section class="bg-white border-2 border-dark p-6 rounded-lg shadow-x2 mb-4">-->
<!--                    <div class="flex mb-4">-->
<!--                        <div class="mr-4">-->
<!--                            <img src="../assets/images/user_default.png" width="45" height="45">-->
<!--                        </div>-->
<!--                        <div class="flex flex-col justify-around mb-4">-->
<!--                            <p class="font-noto-sans-tc font-bold leading-normal m-0 p-0">阿爾敏</p>-->
<!--                            <p class="font-baloo-da-2 text-xs text-accent">2022/1/10 12:00</p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="mb-4">-->
<!--                        我一定要成為很棒棒的國王！-->
<!--                    </div>-->
<!--                </section>-->
            </div>
            <div class="basis-2/5 ">
                <!--            張貼動態-->
                <div class="bg-white border-2 border-dark">
                    <div class="py-8 px-6">
                        <button class="
                    bg-primary
                    text-white
                    border
                    border-2
                    border-dark
                    py-4
                    rounded-lg
                    shadow-x1
                    mb-4
                    w-full
                    disabled:border-2
                    disabled:border-grey-4
                    disabled:bg-grey-2
                    disabled:shadow-none
                    ">
                            張貼動態
                        </button>
                        <ul class="space-y-6">
                            <li class="flex items-center ">
                                <div class="mr-3">
                                    <img src="../assets/images/user_default.png" width="50px" height="50px">
                                </div>
                                <div class="font-noto-sans-tc font-bold leading-normal">Harold</div>
                            </li>
                            <li class="flex items-center">
                                <div class="mr-3">
                                    <img src="../assets/images/user_default.png" width="50px" height="50px">
                                </div>
                                <div class="font-noto-sans-tc font-bold leading-normal">追蹤名單</div>
                            </li>
                            <li class="flex items-center">
                                <div class="mr-3">
                                    <img src="../assets/images/user_default.png" width="50px" height="50px">
                                </div>
                                <div class="font-noto-sans-tc font-bold leading-normal">我按讚的文章</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
