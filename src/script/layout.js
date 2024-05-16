// import e from 'express'

export const createElement = (tag, className, text) => {
  const elem = document.createElement(tag)

  if (className) {
    elem.className = className
  }

  if (text) {
    elem.innerHTML = text
  }
  return elem
}

//конфігураційна константа(містить наші дані; так їх зручно оновлювати)
const HEADER_BUTTON_LIST = [
  {
    width: 24,
    height: 24,
    src: '../../svg/arrow-back.svg',
  },
  {
    width: 24,
    height: 24,
    src: '../../img/avatar.png',
  },
]

export const createHeader = () => {
  const header = createElement('header', 'header')

  //params = atributes = { width, height, src }
  HEADER_BUTTON_LIST.forEach((params) => {
    const button = createElement('button', 'button')

    const img = createElement('img')

    // console.log(Object.entries(params))

    Object.entries(params).forEach(
      //for exsample, [key, value = width, 24]
      ([key, value]) => {
        img[key] = value
      },
    )

    button.append(img)

    header.append(button)
  })

  return header
}
