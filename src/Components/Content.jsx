import { useAppContext } from '../Context'
const Content = ({ type }) => {
  const [{}, dispatch] = useAppContext()

  return (
    <div className='content'>
      <div className='title'>
        <h1>{type.title} </h1>
      </div>

      <div className='info'>
        <div
          className='close'
          onClick={() => {
            dispatch({ type: 'close', data: null, open: false })
          }}
        >
          X close
        </div>
        <div className='text'>
          <div className='subtitle'>
            <h4>{type.subtitle} </h4>
            <div>{type.description}</div>
          </div>
        </div>
        <div className='image_container'>
          <div className='content_image'>
            <img src={type.img} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
