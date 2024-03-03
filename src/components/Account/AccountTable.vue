<template>
    <ConfirmModal :isOpen="isConfirmModalOpen" :message="modalMessage" :modalCb="modalCb" />
    <AlertModal :isOpen="isAlertModalOpen" :message="modalMessage" :modalCb="modalCb"
        :isSuccessful="isAlertModalSuccess" />

    <AccountForm :onAccountCreate="handleAccountCreate" />

    <table>
        <tr>
            <th title="Avatar">Avatar</th>
            <th title="Number">#</th>
            <th title="Name">Name</th>
            <th title="Creation Date">Creation Date</th>
            <th title="Update">Update</th>
            <th title="Delete">Delete</th>
        </tr>
        <AccountRow v-for="(account, index) in accounts" :key="account.id" :index="index" :account="account"
            :onAccountUpdate="handleAccountUpdate" :onAccountDelete="handleAccountDelete" />
    </table>
</template>

<script>
import AccountRow from './AccountRow.vue';
import AccountForm from './AccountForm.vue';
import ConfirmModal from '../ui/Modal/ConfirmModal.vue';
import AlertModal from '../ui/Modal/AlertModal.vue';
import * as accountService from '../../api/accountService.js';
import { removeIndex } from '../../utils/arrayUtil.js';

export default {
    name: 'AccountTable',
    components: {
        AccountRow,
        AccountForm,
        ConfirmModal,
        AlertModal,
    },

    data() {
        return {
            accounts: [],
            isConfirmModalOpen: false,
            isAlertModalOpen: false,
            isAlertModalSuccess: false,
            modalMessage: '',
            modalCb: null,
        }
    },

    created() {
        this.initAccounts();
    },

    methods: {
        async initAccounts() {
            try {
                this.accounts = await accountService.getAllAccount();

            } catch (errMsg) {
                this.openAlertUnexpectedError(errMsg);
            }
        },

        async handleAccountCreate(name, avatarUrl) {
            try {
                const account = await accountService.createAccount(name, avatarUrl);
                this.accounts.unshift(account);
                this.openAlertModal('Account Created Successfully');

            } catch (errMsg) {
                this.openAlertUnexpectedError(errMsg);
            }
        },

        async handleAccountUpdate(id, name, avatarUrl, index) {
            try {
                const account = await accountService.updateAccount(id, name, avatarUrl);
                this.accounts[index] = account;
                this.openAlertModal('Account Updated Successfully');

            } catch (errMsg) {
                this.openAlertUnexpectedError(errMsg);
            }
        },

        async handleAccountDelete(id, index) {
            this.openConfirmModal('Are you sure you want to delete this account?', async (isConfirm) => {
                this.closeModals();
                if (!isConfirm) return;

                try {
                    await accountService.deleteAccount(id);
                    removeIndex(this.accounts, index);
                    this.openAlertModal('Account Deleted Successfully');

                } catch (errMsg) {
                    this.openAlertUnexpectedError(errMsg);
                }
            });
        },

        openConfirmModal(message, modalCb) {
            this.isConfirmModalOpen = true;
            this.openModalHelper(message, modalCb);
        },

        openAlertModal(message, isSuccess = true, modalCb) {
            this.isAlertModalSuccess = isSuccess;
            this.isAlertModalOpen = true;
            this.openModalHelper(message, modalCb);
        },

        openModalHelper(message, modalCb = this.closeModals) {
            this.modalMessage = message;
            this.modalCb = modalCb;
        },

        openAlertUnexpectedError(errMsg) {
            this.openAlertModal(`Unexpected error has occurred: ${errMsg}`, false);
        },

        closeModals() {
            this.isConfirmModalOpen = false;
            this.isAlertModalOpen = false;
        }
    }
}
</script>

<style></style>
