import { createRouter, createWebHistory } from 'vue-router'

import { useAuthStore } from '@/stores/auth.store'

import AuthLayout from '@/layouts/AuthLayout.vue'
import OnboardingLayout from '@/layouts/OnboardingLayout.vue'

import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        { name: 'sign-in', path: 'signIn', component: () => import('@/views/auth/SignIn.vue') },
        { name: 'sign-up', path: 'signUp', component: () => import('@/views/auth/SignUp.vue') },
        {
          name: 'reset',
          path: 'resetPassword',
          component: () => import('@/views/auth/ResetPassword.vue')
        }
      ]
    },
    {
      path: '/onboarding',
      redirect: '/onboarding/step1',
      component: OnboardingLayout,
      children: [
        {
          path: 'step1',
          component: () => import('@/views/onboarding/FirstStep.vue')
        },
        {
          path: 'step2',
          component: () => import('@/views/onboarding/SecondStep.vue')
        },
        {
          path: 'step3',
          component: () => import('@/views/onboarding/ThirdStep.vue')
        }
      ]
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true // Definindo a propriedade requiresAuth como true para exigir autenticação
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = useAuthStore().isAuthenticated

  if (!to.path.includes('/auth') && !isAuthenticated) {
    next({ name: 'sign-in' }) // Redireciona para a página de login se o usuário não estiver autenticado
  } else if (to.path.includes('/auth') && isAuthenticated) {
    // Se o usuário estiver autenticado e tentar acessar uma rota de autenticação,
    // redirecione-o para a rota inicial ou qualquer outra rota que você preferir
    next('/') // Por exemplo, redirecionar para a página inicial
  } else {
    next() // Permite a passagem para a próxima rota se o usuário estiver autenticado ou acessando a página de login
  }
})

export default router
