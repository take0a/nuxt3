<script setup lang="ts">
import type { Customer } from '~/shared/types/customer'

const customer = ref<Partial<Customer>>({})
const formRef = useTemplateRef('form')

const create = async () => {
  const validResult = await formRef.value?.validate()
  if (validResult?.valid) {
    console.log('validなのでサーバを呼びます!')
  }
}
</script>

<template>
  <v-form ref="form">
    <v-container>
      <v-row class="pt-6">
        <div class="text-subtitle-1">
          顧客マスタ
        </div>
      </v-row>
      <v-row class="py-2">
        <v-col
          cols="12"
          sm="6"
          md="4"
          ls="3"
        >
          <v-text-field
            v-model.number="customer.customerId"
            name="customerId"
            label="顧客ID"
            hint="顧客の識別子"
            type="number"
            :hide-spin-buttons="true"
            class="my-input-number"
            :rules="[(value) => (value ? true : '必須項目です')]"
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
          ls="3"
        >
          <v-text-field
            v-model="customer.name"
            name="name"
            label="氏名"
            hint="顧客の氏名"
            type="text"
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
          ls="3"
        >
          <v-text-field
            v-model="customer.address"
            name="address"
            label="住所"
            hint="顧客の住所"
            type="text"
          />
        </v-col>
      </v-row>
      <v-row class="py-2">
        <v-spacer />
        <v-col
          cols="12"
          sm="6"
          md="4"
          ls="3"
        >
          <v-btn
            block
            text="作成"
            color="primary"
            @click="create"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<style scoped>
.my-input-number :deep(input) {
  text-align: end
}
</style>
