<template>
    <section>
        <h1>Home Page</h1>

        <div class="grid">
            <div class="card">
                <h2>Item</h2>
            </div>
            <div class="card">
                <h2>Item</h2>
            </div>
            <div class="card">
                <h2>Item</h2>
            </div>
            <div class="card">
                <h2>Item</h2>
            </div>
            <div class="card">
                <h2>Item</h2>
            </div>
            <div class="card">
                <h2>Item</h2>
            </div>
        </div>
    </section>
</template>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    margin: 2rem auto;
}
</style>