import { NuxtAuthHandler } from '@sidebase/nuxt-auth';

const runtimeConfig = useRuntimeConfig();

export default NuxtAuthHandler({
  secret: runtimeConfig.AUTH_SECRET,
  // adapter: PrismaAdapter
});