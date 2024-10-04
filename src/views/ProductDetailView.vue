<script setup>
import { ref, onMounted } from 'vue';
import { useProductStore } from '@/stores/product'
const props = defineProps(['id'])
const productStore = useProductStore()
const productDetails = ref({})

onMounted(() => {
    productDetails.value = productStore.getProductById(props.id)
})
</script>

<template>
    <h1>Detalhes do Produto - {{ id }}</h1>
    <h2>{{ productDetails.name }}</h2>
    <h2>{{ productDetails.price }}</h2>
    <h2>{{ productDetails.qty }}</h2>
</template>
