import star from '../assets/icons/star.png'


const Card = ({ title, price, coverImg, stats, location, openSpots  }) => {
     
     let badageText;
     if(openSpots === 0) {
          badageText = 'SOLD OUT'
     } else if(location === 'Online') {
          badageText = 'ONLINE'
     }

     return ( 
          <div className='card'>
               {badageText && <div className='sold-out'>{badageText}</div>}
               <img src={require(`../assets/images/${coverImg}`)} alt="" />
               <div className='card__details'>
                    <div className='card__notes'>
                         <img src={star} alt='star icon' />
                         <small>{stats.rating.toFixed(1)}<span> ({stats.reviewCount})•{location}</span></small>
                    </div>
                    <p>{title}</p>
                    <p><span>From ${price}</span> / person</p>
               </div>
          </div>
     )
}

export default Card