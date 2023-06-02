import './Card.scss'

export const Card = ({title,url}) => {
  return (
    <div className='card'>
    <img src={url} alt="" />
    <div className="text">
        <p>{title}</p>
    </div>
    </div>
  )
}
