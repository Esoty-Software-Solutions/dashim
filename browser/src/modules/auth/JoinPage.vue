<script setup lang="ts">
import { useLocalStorage } from "@vueuse/core";
import { ref, computed, reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";

import {
  mdiAccount,
  mdiAt,
  mdiEye,
  mdiEyeOff,
  mdiHospitalBox,
  mdiLockOutline,
  mdiSwapHorizontalBold,
} from "@mdi/js";
import { useDisplay } from "vuetify";
import type { VForm } from "vuetify/components/VForm";

import useSession from "./stores/session";

const display = useDisplay();

const sessionStore = useSession();

const form = reactive({
  isEmail: useLocalStorage("signIn.isEmail", true),
  emailOrUsername: "",
  password: "",
  showPassword: false,
});

const submitting = ref(false);

const internalErrors = ref([] as string[]);
const signInForm = ref<InstanceType<typeof VForm> | null>(null);

const errorMessages = computed(() => {
  return internalErrors.value.map((error) => {
    switch (error) {
      case "Access denied":
        return "Access denied.<br> You don't have permissions To use Dalil Dashboard";
      case "Unprocessable Entity":
      case "Unauthorized":
        return "Incorrect email/username and password";
      default:
        return "An unknown error occurred";
    }
  });
});

async function onSignIn() {
  const { emailOrUsername: emailOrUserName, password } = toRefs(form);

  if (emailOrUserName.value && password) {
    internalErrors.value = [];
    // do api request and update app state
    submitting.value = true;

    const reqPayload = form.isEmail
      ? { password: password.value, email: emailOrUserName.value }
      : { password: password.value, username: emailOrUserName.value };

    await sessionStore.signIn();
    submitting.value = false;

    onSuccess();
    // if (error.value == null) {
    //   const userRoles = data.value?.user?.roles ?? [];
    //   if (userRoles.find((role) => role.doctorId != null) == null) {
    //     internalErrors.value = ["Access denied"];
    //   } else {
    //     await onSuccess(data.value!.token);
    //   }
    // } else {
    //   console.error("something went wrong while signing in ", error.value);
    //   internalErrors.value = [response.value?.statusText ?? ""] as string[];
    // }
  }
}

const router = useRouter();
const route = useRoute();

async function onSuccess() {
  let redirect = route.query.redirect;

  await router.push({
    name: "Welcome",
    query: {
      redirect,
    },
  });
}

/**
 * Background selection
 */
const backgroundUrlModules = import.meta.glob("@/assets/sign-in-bg*.jpeg", {
  eager: true,
});

const backgroundUrls = Object.entries(backgroundUrlModules).map(
  ([url, module], index) => {
    return {
      title: `Background ${index + 1}`,
      value: url,
      module,
    };
  },
);

const selectedBackgroundUrl = useLocalStorage(
  "signIn.background",
  backgroundUrls[0].value,
);

const backgroundUrl = computed(() => {
  // refer to https://vitejs.dev/guide/features.html#glob-import
  const url = backgroundUrlModules[selectedBackgroundUrl.value];
  // @ts-ignore
  return url.default;
});
</script>
<template>
  <VContainer class="h-100 pa-0" fluid>
    <VDefaultsProvider :defaults="{ global: { density: 'default' } }">
      <VRow no-gutters class="h-100">
        <!--    welcoming      -->
        <VCol
          cols="12"
          md="7"
          class="background-column position-relative d-none d-md-block"
          :style="{ background: `url(${backgroundUrl}), black` }"
          style="
            background-repeat: no-repeat;
            background-attachment: scroll;
            background-size: cover;
          "
        >
          <VOverlay
            scrim="primary"
            contained
            activator="parent"
            open-on-hover
          />
        </VCol>

        <!--    sign in form    -->
        <VCol cols="12" md="5" style="z-index: 2">
          <VSheet
            elevation="24"
            class="h-100 d-flex flex-column justify-center"
          >
            <section class="d-flex flex-column justify-center align-center">
              <VAvatar size="x-large" color="primary">
                <VIcon size="large" :icon="mdiHospitalBox" />
              </VAvatar>
              <h2>Welcome to Dalil Dashboard</h2>
              <p>To continue, please sign-in into your account.</p>

              <h2
                class="pb-0 text-h6 font-weight-regular justify-space-between"
              >
                Sign In
              </h2>
            </section>
            <VCard
              flat
              color="transparent"
              class="px-md-10"
              :loading="submitting"
              :disabled="submitting"
            >
              <VAlert v-if="errorMessages.length > 0" type="error">
                <ul>
                  <li v-for="(message, index) of errorMessages" :key="index">
                    <span v-html="message" />
                  </li>
                </ul>
              </VAlert>

              <VForm ref="signInForm" @submit.prevent="onSignIn">
                <VCardText>
                  <VTextField
                    v-model="form.emailOrUsername"
                    :label="form.isEmail ? 'Email' : 'Username'"
                    :prepend-inner-icon="form.isEmail ? mdiAt : mdiAccount"
                  >
                    <template #append-inner>
                      <VIcon
                        title="Switch between username/email"
                        :icon="mdiSwapHorizontalBold"
                        style="cursor: pointer"
                        @click="form.isEmail = !form.isEmail"
                      />
                    </template>
                  </VTextField>

                  <VTextField
                    v-model="form.password"
                    label="Password"
                    :prepend-inner-icon="mdiLockOutline"
                    :type="form.showPassword ? 'text' : 'password'"
                    :append-inner-icon="form.showPassword ? mdiEye : mdiEyeOff"
                    @click:append-inner="form.showPassword = !form.showPassword"
                  />

                  <VBtn color="primary" block variant="flat" type="submit">
                    Sign-In
                  </VBtn>
                </VCardText>

                <VCardItem class="text-center">
                  <span class="mr-5"
                    >Copyright {{ new Date().getFullYear() }} &copy;</span
                  >
                </VCardItem>

                <VCardItem v-if="display.smAndUp" class="mt-2">
                  <VSelect
                    v-model="selectedBackgroundUrl"
                    label="Background"
                    :items="backgroundUrls"
                  />
                </VCardItem>
              </VForm>
            </VCard>
          </VSheet>
        </VCol>
      </VRow>
    </VDefaultsProvider>
  </VContainer>
</template>

<style scoped></style>
