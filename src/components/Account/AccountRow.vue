<template>
    <tr>
        <td>
            <img v-if="!isEditMode" :src="avatarUrl" alt="Avatar.png" :title="avatarUrl" />
            <input v-else v-model="avatarUrl" :disabled="!isEditMode" :title="avatarUrl" />
        </td>
        <td>
            <div :title="viewIndex">{{ viewIndex }}</div>
        </td>
        <td>
            <input v-model="name" :disabled="!isEditMode" :title="name" />
        </td>
        <td>
            <time :title="createdAt">{{ createdAt }}</time>
        </td>
        <td>
            <button v-if="!isEditMode" @click="handleToggleEditMode" title="Update">
                Update
            </button>
            <button v-else @click="handleUpdateAccount" title="Confirm">
                Confirm
            </button>
        </td>
        <td>
            <button v-if="!isEditMode" @click="() => onAccountDelete(id, index)" title="Delete">
                Delete
            </button>
            <button v-else @click="handleCancelAccountUpdate" title="Cancel">
                Cancel
            </button>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'AccountRow',
    props: {
        account: Object,
        index: Number,
        onAccountUpdate: Function,
        onAccountDelete: Function,
    },

    data() {
        return {
            isEditMode: false,
            id: this.account.id,
            avatarUrl: this.account.avatarUrl,
            name: this.account.name,
            createdAt: this.account.createdAt,
        }
    },

    methods: {
        handleToggleEditMode() {
            this.isEditMode = !this.isEditMode;
        },

        handleUpdateAccount() {
            this.handleToggleEditMode();
            this.onAccountUpdate(this.id, this.name, this.avatarUrl, this.index);
        },

        handleCancelAccountUpdate() {
            this.handleToggleEditMode();
            this.avatarUrl = this.account.avatarUrl;
            this.name = this.account.name;
        }
    },

    computed: {
        viewIndex() {
            return this.index + 1;
        }
    }
}
</script>

<style scoped></style>
