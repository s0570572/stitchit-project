/*
import { mount } from '@vue/test-utils'
import Accordeon from '../../src/components/Accordeon'

describe('Testing Accordeon.vue', () => {
  it('should render entry title', () => {
    // when
    const wrapper = mount(Accordeon, {
      propsData: {
        entry: {
          id: 1,
          title: 'Red beans soup',
          description: '',
          topic: 'STILLLIFE',
          difficulty: 'BEGINNER',
          link: 'www.google.com'
        }
      }
    })

    // then
    const cardTitle = wrapper.find('.flush-heading')
    expect(cardTitle.text()).toBe('Red beans soup')
  })

  it.each`
    topic | expected
    ${'STILLLIFE'}    | ${'STILLLIFE'}
    ${'MISCELLANEOUS'}   | ${'MISCELLANEOUS'}
  `('should render correct topic (topic is $topic)', ({ topic, expected }) => {
    // when
    const testEntry = {
      id: 1,
      title: 'Red beans soup',
      description: '',
      topic: 'STILLLIFE',
      difficulty: 'BEGINNER',
      link: 'www.google.com'
    }
    const wrapper = mount(Accordeon, {
      propsData: {
        person: testEntry
      }
    })

    // then
    const cardTitle = wrapper.find('.flush-collapse')
    expect(cardTitle.text()).toContain(`Title: ${testEntry.title}`)
  })

})
*/
