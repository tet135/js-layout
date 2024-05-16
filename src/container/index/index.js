import {
  createElement,
  createHeader,
} from '../../script/layout.js'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Мій блог')

page.append(title)

const POST_LIST = [
  {
    category: [
      { text: 'Важливо', id: 'orange' },
      { text: 'Нове', id: 'pink' },
    ],
    date: '25.01',
    text: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
    viewed: false,
  },
  {
    category: [{ text: 'Нове', id: 'pink' }],
    date: '15.01',
    text: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.',
    viewed: true,
  },
  {
    category: [
      { text: 'Важливо', id: 'orange' },
      { text: 'Нове', id: 'pink' },
    ],
    date: '25.01',
    text: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
    viewed: false,
  },
]

const createPost = () => {
  const postList = createElement('main', 'post__list')

  POST_LIST.forEach((postData) => {
    const post = createElement(
      'div',
      postData.viewed ? 'post post--viewed' : 'post',
    )
    const postInfo = createElement('div', 'post__info')
    const paragraph = createElement(
      'p',
      'post__message',
      postData.text,
    )

    const postCategories = createElement(
      'div',
      'post__categories',
    )

    postData.category.forEach((category) => {
      const postCategory = createElement(
        'span',
        `post__category post__category--${category.id}`,
        category.text,
      )
      postCategories.append(postCategory)
    })

    const postDate = createElement(
      'span',
      'post__date',
      postData.date,
    )

    postInfo.append(postCategories, postDate)

    post.append(postInfo, paragraph)

    postList.append(post)
  })

  return postList
}

const postList = createPost()

page.append(postList)
