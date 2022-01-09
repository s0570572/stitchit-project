import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/views/Home.vue'

describe('Home.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

/*
entries.spec.js
import { mount } from '@vue/test-utils'
import Gallery from '../../src/views/Gallery.vue'
import TopicTab from '../../src/components/TopicTab.vue'
import Accordeon from '../../src/components/Accordeon.vue'

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

entry-accordeon.spec.js
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

entries-list.spec
import { mount } from '@vue/test-utils'
import Accordeon from '../../src/components/Accordeon'

describe('Testing Accordeon.vue', () => {
  it('should render an accordeon item for each entry', () => {
    // when
    const wrapper = mount(Accordeon, {
      propsData: {
        entries: [
          {
            id: 1,
            title: 'Red beans soup',
            description: '',
            topic: 'STILLLIFE',
            difficulty: 'BEGINNER',
            link: 'www.google.com'
          },
          {
            id: 2,
            title: 'Crocodile',
            description: 'a very detailed scheme',
            topic: 'ANIMALS',
            difficulty: 'ADVANCED',
            link: 'www.google.com'
          }
        ]
      }
    })

    // then
    const entryCards = wrapper.findAllComponents(Accordeon)
    expect(entryCards.length).toBe(2)
  })
})
 */
