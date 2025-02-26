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
  </v-app>
</template>
