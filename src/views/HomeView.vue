<script setup>
import { ref } from 'vue'
import { useProductStore } from '@/stores/product'
import { useRouter } from 'vue-router'

const productStore = useProductStore()
const router = useRouter()

const productName = ref('')
const productPrice = ref('')
const productQuantity = ref('')

function addNewProduct() {
  productStore.addProduct(productName.value, productPrice.value, productQuantity.value)
  productName.value = ''
  productPrice.value = ''
  productQuantity.value = ''
}

function viewProductDetails(productId) {
  router.push(`/produto/${productId}`)
}
</script>

<template>
  <main class="main">
    <h1>Listagem de Produtos</h1>

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in productStore.products" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.qty }}</td>
          <td>
            <button @click="viewProductDetails(item.id)">Ver</button>
            <button @click="productStore.deleteProductById(item.id)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
    <h2>Adicionar Produto</h2>
    <form @submit.prevent="addNewProduct">
      <input v-model="productName" placeholder="Nome do Produto" required />
      <input v-model.number="productPrice" placeholder="Preço" required />
      <input v-model.number="productQuantity" placeholder="Quantidade" required />
      <button type="submit">Adicionar</button>
    </form>
  </main>
</template>

<style scoped>
main {
  max-width: 800px;
  margin: 40px auto;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 12px;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.1);
}

h1, h2 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;
}

th, td {
  padding: 14px;
  text-align: left;
  border-bottom: 1px solid #dcdcdc;
}

th {
  background-color: #34495e;
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
}

tr:nth-child(even) {
  background-color: #ecf0f1;
}

tr:hover {
  background-color: #bdc3c7;
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #3498db;
  color: white;
  font-size: 14px;
  transition: background-color 0.3s, transform 0.2s;
}

button:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
}

input {
  padding: 12px;
  border: 1px solid #bdc3c7;
  border-radius: 5px;
  font-size: 14px;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #3498db;
  outline: none;
}

button[type="submit"] {
  background-color: #2ecc71;
}

button[type="submit"]:hover {
  background-color: #27ae60;
}
</style>
