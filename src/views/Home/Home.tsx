import React from 'react'
import { Button } from 'antd'
import { copyToClipboard } from 'ts-tool-library'

const Index: React.FC = () => {
  return (
    <div>
      123
      <Button onClick={() => copyToClipboard('123')}>copy</Button>
    </div>
  )
}

export default React.memo(Index)
