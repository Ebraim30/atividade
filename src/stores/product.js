import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const productsList = ref([
    { id: 1, name: 'Gibi da Monica', price: 10.00, qty: 30 },
    { id: 2, name: 'Gibi da Cobra', price: 20.00, qty: 50 },
    { id: 3, name: 'Biblia Sagrada', price: 0, qty: 10 },
    { id: 4, name: 'Gibi Crocodilo', price: 50.00, qty: 10 }

  ])

  function getProductById(productId) {
    for (let item of productsList.value) {
      if (item.id == productId) {
        return item
      }
    }
    return null
  }

  function deleteProductById(productId) {
    const index = productsList.value.findIndex((item) => item.id == productId)
    productsList.value.splice(index, 1)
  }

  function addProduct(name, price, qty) {
    const newProduct = {
      id: productsList.value.length + 1,
      name,
      price,
      qty
    };
    productsList.value.push(newProduct);
  }

  return { products: productsList, getProductById, deleteProductById, addProduct }
})
