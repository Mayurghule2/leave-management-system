<template>

<div class="flex justify-center items-center h-screen bg-gray-100">

<div class="bg-white p-6 w-96 shadow">

<h2 class="text-xl mb-4">Signup</h2>

<input v-model="name" placeholder="Name" class="border p-2 w-full mb-2">

<input v-model="email" placeholder="Email" class="border p-2 w-full mb-2">

<input v-model="password" type="password" placeholder="Password" class="border p-2 w-full mb-2">

<select v-model="role" class="border p-2 w-full mb-2">
<option value="employee">Employee</option>
<option value="employer">Employer</option>
</select>
<a href="/login" class="text-blue-500 text-sm mb-4 block">Already have an account? Login</a>
<button @click="signup" class="bg-blue-500 text-white w-full p-2">
Signup
</button>

</div>

</div>

</template>

<script setup>

import {ref} from "vue"
import API from "../services/api"
import {useRouter} from "vue-router"

const router = useRouter()

const name = ref("")
const email = ref("")
const password = ref("")
const role = ref("employee")

const signup = async ()=>{

 await API.post("/auth/signup",{
  name:name.value,
  email:email.value,
  password:password.value,
  role:role.value
 })

 router.push("/")
}

</script>