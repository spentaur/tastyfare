<template>
  <div class="container bg-indigo-100">
    <div>
      <h1 class="title text-indigo-400">tastyfare</h1>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 100%;
}

.title {
  font-family: 'MuseoModerno', cursive;
  display: block;
  font-style: italic;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
  text-shadow: 4px 4px 0px rgba(245, 127, 156, 0.3);
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
