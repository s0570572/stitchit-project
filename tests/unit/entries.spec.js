import { mount } from '@vue/test-utils'
import Gallery from '@/views/Gallery.vue'
import TopicTab from '@/components/TopicTab.vue'
import Accordeon from '@/components/Accordeon.vue'

describe('Testing Gallery.vue', () => {
  it('should have topic tab component', () => {
    // when
    const wrapper = mount(Gallery)

    // then
    const topicTab = wrapper.findComponent(TopicTab)
    expect(topicTab.exists()).toBeTruthy()
  })

  it('should have accordeon component', () => {
    // when
    const wrapper = mount(Gallery)

    // then
    const accordeon = wrapper.findComponent(Accordeon)
    expect(accordeon.exists()).toBeTruthy()
  })
})
