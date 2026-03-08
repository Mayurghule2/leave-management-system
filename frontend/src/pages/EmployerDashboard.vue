<template>

<div class="p-8 bg-gray-100 min-h-screen">

<h1 class="text-2xl mb-6">Employer Dashboard</h1>

<LeaveTable :isEmployer="true"/>

</div>

</template>

<script setup>

import LeaveTable from "../components/LeaveTable.vue"

</script> 