<script>
import CartComponent from './components/CartComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';
import ProductsComponent from './components/ProductsComponent.vue';




export default {
  components: {
    NavbarComponent,
    ProductsComponent,
    CartComponent
  },
};
</script>

<template>
  <div class="container">
    <NavbarComponent></NavbarComponent>
    <ProductsComponent></ProductsComponent>
    <CartComponent></CartComponent>
  </div>
</template>

<style lang="scss">
@import "./assets/all.scss";
.card-img-top {
  object-fit: cover;
  height: 200px;
}

.table-image {
  width: 75px;
  height: 75px;
  object-fit: cover;
}
</style>
