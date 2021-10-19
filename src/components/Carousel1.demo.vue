<demo>
常规使用
</demo>

<template>
  <Carousel :after-change="onChange">
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </Carousel>
</template>
<script>
import Carousel from '../lib/Carousel.vue';
export default {
  components:{ Carousel },
  methods: {
    onChange(a, b, c) {
      console.log(a, b, c);
    },
  },
};
</script>

<style scoped>
.ant-carousel > .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel > .slick-slide h3 {
  color: #fff;
}
</style>
