import { describe, it, expect, vitest } from 'vitest'

import { mount } from '@vue/test-utils'

import NavLink from '@/components/atoms/layout/NavLink.vue'
import { RouterLink } from 'vue-router'

// Criar um mock do Vue Router
const mockRouter = {
  provide: {
    router: {
      resolve: vitest.fn(),
      push: vitest.fn(),
      replace: vitest.fn(),
      go: vitest.fn(),
      back: vitest.fn()
    },
    route: {
      fullPath: '/',
      hash: '',
      params: {},
      path: '/',
      query: {}
    }
  }
}

describe('NavLink', () => {
  it('renders properly', () => {
    const wrapper = mount(NavLink, {
      global: {
        // Passa o mock do Vue Router como global do teste
        provide: mockRouter,
        // Registra o componente RouterLink globalmente
        stubs: {
          RouterLink: RouterLink
        }
      },
      props: {
        label: 'Home',
        route: '/home-test-route'
      }
    })

    expect(wrapper.findComponent({ name: 'RouterLink' }).text()).toContain('Home')
  })
})
