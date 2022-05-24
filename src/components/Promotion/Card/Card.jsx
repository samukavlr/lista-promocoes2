import React from 'react';
import card from './card.module.css';
import {Link} from 'react-router-dom';
import UIButton from 'components/UI/Button/Button'
import {Trash} from 'phosphor-react'



function PromotionCard({promotion, onclickDelete}) {

    return (
      <div className={card.promotion_card}>
        <img className={card.promotion_card_image} src={promotion.imageUrl} alt={promotion.title}  />
        <div>
            <h1 className={card.promotion_card_title}>{promotion.title}</h1>
            <span className={card.promotion_card_price}>R$ {promotion.price}</span>
            <footer className={card.promotion_card_footer}>
               <div className={card.promotion_card_comments}>
                   {promotion.comments.length > 0 &&(
                       <div>
                           "{promotion.comments[0].comment}"
                       </div>
                   )}
               </div> 
               <div className={card.promotion_card_comments_cont}>
                   {promotion.comments.length}{' '}
                   {promotion.comments.length > 1 ? 'Comentários':'Comentário'}
               </div>
                <UIButton
                 component="a"
                 href={promotion.url} target="_blank" 
                >Ir para o site
                </UIButton> 
               
                <UIButton
                 className={card.promotionCardButton} 
                 component={Link}
                 to={`/edit/${promotion.id}`}
                 >Editar
                </UIButton>


            </footer>
                <button type='button'
                    onClick={onclickDelete}
                    className={card.PromotionCardButtonDelete}>
                    <Trash size={20} color="#f91201" weight="light" />
                </button>
                
        </div>
      </div>
    );
  }
  
  export default PromotionCard;
  