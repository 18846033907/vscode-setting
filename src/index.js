function createStore(state, stateChanger) {
  const listeners = []
  const subscribe = listener => listeners.push(listener)
  const getState = () => state
  const dispatch = action => {
    state = stateChanger(state, action)
    listeners.forEach(listener => listener())
  }
  return { getState, dispatch, subscribe }
}

function renderApp(newApp, oldApp = {}) {
  if (newApp === oldApp) return
  console.log('App')
  renderTitle(newApp.title, oldApp.title)
  renderContent(newApp.content, oldApp.title)
}

function renderTitle(newTitle, oldTitle = {}) {
  if (newTitle === oldTitle) return
  console.log('Title')
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = newTitle.text
  titleDOM.style.color = newTitle.color
}

function renderContent(newContent, oldContent = {}) {
  if (newContent === oldContent) return
  console.log('Content')
  const contentDOM = document.getElementById('content')
  contentDOM.innerHTML = newContent.text
  contentDOM.style.color = newContent.color
}

let appState = {
  title: {
    text: 'React.js 小书',
    color: 'red'
  },
  content: {
    text: 'React.js 小书内容',
    color: 'blue'
  }
}

function stateChanger(state, action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      return {
        ...state,
        title: {
          ...state.title,
          text: action.text
        }
      }
    case 'UPDATE_TITLE_COLOR':
      return {
        ...state,
        title: {
          ...state.title,
          color: action.color
        }
      }
    default:
      return state
  }
}

const store = createStore(appState, stateChanger)
let oldState = store.getState()
store.subscribe(() => {
  const newState = store.getState()
  renderApp(newState, oldState)
  oldState = newState
}) // 监听数据变化

renderApp(store.getState()) // 首次渲染页面
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'red' }) // 修改标题颜色
