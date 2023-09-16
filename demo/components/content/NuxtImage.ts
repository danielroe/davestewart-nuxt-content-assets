import { h } from 'vue'
import { NuxtImg } from '#components'

export default async function render (attrs: Record<string, any>) {
  return h(NuxtImg, attrs)
}
