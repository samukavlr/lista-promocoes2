import {useEffect,useState} from 'react';
import formCss from './Form.module.css';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import {Link} from 'react-router-dom';
import UIButton from 'components/UI/Button/Button';
import card from 'components/Promotion/Card/card.module.css'

const initialvalue={
    title:'',
    imageUrl:'',
    url:'',
    price:0,
}

const PromotionForm=({id})=>{
    const [values, setValues]=useState(initialvalue);
    const navigate = useNavigate();
    

    // console.log(values);
    function onchnage(ev){
        const {name, value }= ev.target;
        // console.log({name, value});
        setValues({...values,[name]:value})        
    }

    useEffect(()=>{
        if(id){
            axios.get(`https://apifakejsonserver.azurewebsites.net/promotions${id}`)
            .then((response)=>{
                setValues(response.data);
            })
        }

    },[])

    function onSubmit(ev){
        ev.preventDefault();

        const method = id ? 'put' : 'post';
        const url = id 
            ? `https://apifakejsonserver.azurewebsites.net/promotions${id}` 
            : 'https://apifakejsonserver.azurewebsites.net/promotions'

        axios[method](url, values)
            .then( (response) => {
                navigate('/');
            })

        // axios.post('http://localhost:5000/promotions', values)
        // .then((response)=>{

        //     navigate('/');

        // })
    }


    return(
        <div>

            <h1>Promo Show</h1>
            <h2>Nova Promoção</h2>
            <form onSubmit={onSubmit}>
                <div className={formCss.promotionFormGroup}>
                    <label htmlFor="title">Título</label>
                    <input type="text" id="title" name="title" value={values.title} onChange={onchnage}/>
                </div>

                <div className={formCss.promotionFormGroup}> 
                    <label htmlFor="imageUrl">Url image</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={values.imageUrl} onChange={onchnage}/>
                </div>

                <div className={formCss.promotionFormGroup}>
                    <label htmlFor="url">Url</label>
                    <input type="text" id="url" name="url" value={values.url} onChange={onchnage}/>
                </div>

                <div className={formCss.promotionFormGroup}> 
                    <label htmlFor="price">Preço</label>
                    <input type="text" step="any" id="price" name="price" value={values.price} onChange={onchnage}/>
                </div>
                <div className={card.promotionCardButton}>
                    <UIButton 
                    component="button"
                     type="submit">
                        Salvar
                    </UIButton>
                    <UIButton
                    to ="/"
                    component= {Link}
                    theme ="bordered-warning"
                    >
                    Cancelar
                    </UIButton>
                </div>
              

            </form>


        </div>
    )
}


export default PromotionForm