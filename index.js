const Box = props => {
  const {className, text} = props
  return <div className={className}>{text}</div>
}

const element = (
  <div className='main-containerm'>
    <h1 className='head'>Boxes</h1>
    <div className='box-con'>
      <Box className='small' text='Small' />
      <Box className='medium' text='Medium' />
      <Box className='large' text='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
