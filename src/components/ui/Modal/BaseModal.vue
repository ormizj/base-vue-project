<template>
    <Teleport to="body">
        <div>
            <slot />
        </div>
    </Teleport>
</template>

<script>
export default {
    name: 'BaseModal'
}
</script>

<style scoped></style>
