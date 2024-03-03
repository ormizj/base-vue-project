<template>
    <Teleport to="#modal">
        <div v-if="isOpen" class="modal-container">
            <div class="backdrop">
            </div>
            <div class="modal">
                <div>{{ message }}</div>
                <slot />
            </div>
        </div>
    </Teleport>
</template>

<script>
export default {
    name: 'BaseModal',
    props: {
        isOpen: Boolean,
        message: String,
    },
}
</script>

<style scoped>
.backdrop,
.modal {
    z-index: 999;
    position: fixed;
    transition: all 0.3s;
}


.backdrop {
    z-index: 2;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);

    animation: modalFadeIn 0.3s ease-in-out forwards;
}

.modal {
    z-index: 999;
    width: min(400px, 25%);
    height: min(200px, 25%);
    background-color: whitesmoke;
    color: black;
    padding: 15px;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    animation: modalSlideIn 0.3s ease-in-out forwards;
}

@keyframes modalFadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 0.5;
    }
}

@keyframes modalSlideIn {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
