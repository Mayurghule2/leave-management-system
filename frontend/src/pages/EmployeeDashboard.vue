<template>

<div class="p-8 bg-gray-100 min-h-screen">

<h1 class="text-2xl mb-6">Employee Dashboard</h1>

<LeaveForm/>

<LeaveTable :isEmployer="false"/>

</div>

</template>

<script setup>

import LeaveForm from "../components/LeaveForm.vue"
import LeaveTable from "../components/LeaveTable.vue"

</script>