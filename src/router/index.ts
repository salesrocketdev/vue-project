import { createRouter, createWebHistory } from 'vue-router'

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
      component: HomeView
    }
  ]
})

export default router
