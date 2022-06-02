import { useState } from 'react'
import { ClipboardCopyIcon } from '@heroicons/react/outline'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import { BoxContainer } from './components/boxContainer'
import { FlexItem } from './components/flexItem';
import { PropertiesBoxContainer } from './components/propertiesBoxContainer';
import logo from './assets/images/box-plot-solid.svg'

const MIN_FLEX_ITEMS_COUNT = 1
const MAX_FLEX_ITEMS_COUNT = 20
const INITIAL_FLEX_ITEMS_COUNT = 10

export function App() {

  const generateItems = count => {
    return Array.from(
      { length: count },
      (_, index) => <FlexItem key={index} index={index} />
    )
  }

  const [flexContainerStyle, setFlexContainerStyle] = useState({
    'display': 'flex'
  })
  
  const changeFlexContainerStyle = (property, value) => {
    const newStyle = { ...flexContainerStyle }
    newStyle[property] = value

    setFlexContainerStyle(newStyle)
  }

  const [items, setItems] = useState(generateItems(INITIAL_FLEX_ITEMS_COUNT))

  const onItemsCountChange = count => setItems(generateItems(count))

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sourceCode)
    toast.success(
      'Código copiado!',
      { autoClose: 2000, pauseOnFocusLoss: false, pauseOnHover: false }
    )
  }

  const buildSourceCode = style => {
    const declarations = Object.entries(style)
      .map(([key, value]) => `\t${key}: ${value};\n`)
      .reduce((acc, value) => acc + value)

    return `.flex-container {\n${declarations}}`
  }

  let sourceCode = buildSourceCode(flexContainerStyle)

  return (
    <div>
      <header>
        <div>
          <div className="flex space-x-2 px-10 pt-4">
            <img src={logo} className="invert" />
            <h1 className="text-white text-2xl font-bold">Flexbox Playground</h1>
          </div>
        </div>
      </header>
      <main>
        <div className="w-full mt-8 px-10 py-4 flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8 justify-between">
          <PropertiesBoxContainer 
            minItemsCount={MIN_FLEX_ITEMS_COUNT}
            maxItemsCount={MAX_FLEX_ITEMS_COUNT}
            initialItemsCount={INITIAL_FLEX_ITEMS_COUNT}
            onPropertyChange={changeFlexContainerStyle}
            onItemsCountChange={onItemsCountChange} />

          <BoxContainer title="Resultado" className="flex-2 overflow-y-auto overflow-x-hidden w-full">
            <div
              className="border border-gray-400 rounded-md bg-red-100 p-5 mx-8"
              style={{ ...flexContainerStyle, 'minHeight': '80%' }}>
              { items }
            </div>
          </BoxContainer>

          <BoxContainer title="Código Fonte" className="overflow-y-auto shrink-0">
            <ToastContainer />
            <button
              className="flex space-x-1 rounded-md mb-2 px-4 py-2 border border-blue-400 text-blue-400 hover:bg-blue-50 hover:text-blue-500"
              onClick={copyToClipboard}>
                <ClipboardCopyIcon className="stroke-1" width={25} />
                <span>Copiar Código</span>
            </button>
            <code className="block overflow-auto bg-slate-800" style={{width: "20rem"}}>
              <pre className="p-4 text-white rounded-sm">
                { sourceCode }
                </pre>
            </code>
          </BoxContainer>
        </div>
      </main>
      <footer className="bg-slate-800 px-10 py-2 mt-4 text-center text-white">
        <div>
          Desenvolvido por <a href="https://henriquefelix.dev.br" target="_blank" className="font-bold">HenriqueFelix.dev</a>
        </div>
      </footer>
    </div>
  )
}
