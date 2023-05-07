
import dynamic from 'next/dynamic'

const EditorNoSSR = dynamic(() => import('./Editor'), {
    ssr: false
  })
  
export default () => <EditorNoSSR />