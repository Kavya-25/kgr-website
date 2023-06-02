import './Services.scss'
import {services} from './servicedata'
import {Card } from '../../components/Card/Card'

export const Services = () => {
  return (
    <div className='services' id='services'>
    <div className="header-container">
        <p>Services</p>
    </div>
    <div className="card-container">
    {services.map((item)=>{
        return(

        <Card title={item.title} key={item.id} url={item.url}/>
        )
    })}
    </div>
    </div>
  )
}
