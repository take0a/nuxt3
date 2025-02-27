<script setup lang="ts">
const { show, message, color, clear } = useSnackbar()
</script>

<template>
  <v-app>
    <v-app-bar>
      <template #prepend>
        <v-app-bar-nav-icon />
      </template>
      <v-app-bar-title>Title</v-app-bar-title>
      <template #append>
        <v-btn icon="mdi-dots-vertical" />
      </template>
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>
    <v-snackbar
      v-model="show"
      :color="color"
      location="top center"
      timeout="4000"
    >
      {{ message }}
      <template #actions>
        <v-btn
          icon="mdi-close-circle"
          @click="clear"
        />
      </template>
    </v-snackbar>
  </v-app>
</template>
