<template>

<table class="w-full border">

<thead>

<tr class="bg-gray-200">

<th class="p-2">Employee</th>
<th class="p-2">Type</th>
<th class="p-2">Start</th>
<th class="p-2">End</th>
<th class="p-2">Status</th>
<th v-if="isEmployer" class="p-2">Action</th>

</tr>

</thead>

<tbody>

<tr v-for="leave in leaves" :key="leave._id">

<td class="p-2">{{leave.employee?.name}}</td>
<td class="p-2">{{leave.leaveType}}</td>
<td class="p-2">{{leave.startDate}}</td>
<td class="p-2">{{leave.endDate}}</td>
<td class="p-2">{{leave.status}}</td>

<td v-if="isEmployer" class="p-2">

<button @click="update(leave._id,'Approved')" class="bg-green-500 text-white px-2">
Approve
</button>

<button @click="update(leave._id,'Rejected')" class="bg-red-500 text-white px-2 ml-2">
Reject
</button>

</td>

</tr>

</tbody>

</table>

</template>

<script setup>

import {ref,onMounted} from "vue"
import API from "../services/api"

const props = defineProps(["isEmployer"])

const leaves = ref([])

const loadLeaves = async ()=>{

 const url = props.isEmployer ? "/leave/all" : "/leave/my"

 const res = await API.get(url)

 leaves.value = res.data
}

const update = async(id,status)=>{

 await API.put(`/leave/update/${id}`,{status})

 loadLeaves()
}

onMounted(loadLeaves)

</script>