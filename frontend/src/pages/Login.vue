<template>

<div class="flex justify-center items-center h-screen bg-gray-100">

<div class="bg-white p-6 w-96 shadow">

<h2 class="text-xl mb-4">Login</h2>

<input v-model="email" placeholder="Email" class="border p-2 w-full mb-2">

<input v-model="password" type="password" placeholder="Password" class="border p-2 w-full mb-2">
<a href="/signup" class="text-blue-500 text-sm mb-4 block">Don't have an account? Register</a>
<button @click="login" class="bg-green-500 text-white w-full p-2">
Login
</button>

</div>

</div>

</template>

<script setup>

import {ref} from "vue"
import API from "../services/api"
import {useRouter} from "vue-router"

const router = useRouter()

const email = ref("")
const password = ref("")

const login = async ()=>{

 const res = await API.post("/auth/login",{
  email:email.value,
  password:password.value
 })

 localStorage.setItem("token",res.data.token)

 const role = res.data.user.role

 if(role==="employee"){
  router.push("/employee")
 }
 else{
  router.push("/employer")
 }

}

</script>