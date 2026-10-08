import AttributeSelector from './components/AttributeSelector'
import KeyboardKey from './components/KeyboardKey'
import { keys } from './lib/keys'

function App() {

  return (
    <div className='h-screen bg-[#3f3e34]'>
      <div className='w-screen h-3/5'>
        {keys.map((key, index) => (
          <KeyboardKey physical={key} index={index} />
          ))}
      </div>
      <div className='w-screen h-2/5 p-2'>
        <div className='w-full h-full border-2 border-amber-50 rounded-md'>
          <AttributeSelector />
        </div>
      </div>
    </div>
  )
}


export default App
