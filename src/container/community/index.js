import {
  createElement,
  createHeader,
} from '../../script/layout.js'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')

page.append(title)

//+++++

const community = createElement('main', 'community')

const tabMenu = createElement('div', 'tab_menu')

const TAB_DATA = [
  {
    text: 'База знань',
    isActive: false,
  },
  {
    text: 'Інформація',
    isActive: true,
  },
]

TAB_DATA.forEach((tab) => {
  const tabButton = createElement(
    'button',
    tab.isActive ? 'tab tab--active' : 'tab',
    tab.text,
  )

  tabMenu.append(tabButton)
})

const img = createElement('img', 'commun_img')
img.src = '../../img/hero_comm.png'

const commumInfo = createElement('div', 'commun_info')
const commumTitle = createElement(
  'h1',
  'commun_title',
  'Що таке база знань?',
)
const commumText = createElement(
  'p',
  'commun_text',
  'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач',
)
commumInfo.append(commumText)
commumInfo.insertAdjacentElement('afterbegin', commumTitle)

const communButton = createElement(
  'a',
  'commun_button',
  `Перейти до ком'юніті у Телеграм`,
)

communButton.type = 'button'
communButton.href = 'https://web.telegram.org/k/'

community.append(tabMenu, img, commumInfo, communButton)
page.append(community)
