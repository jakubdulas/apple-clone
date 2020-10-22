import React from 'react'
import './Body.css'
import IPhone from './IPhone'
import Product from "./Product";

function Body() {
    return (
        <div className='body'>
            <div style={{display: 'flex', justifyContent: 'center', padding: '12px', fontSize: '14px'}}>
                <p>Kupuj online i korzystaj z darmowej, bezkontaktowej dostawy, pomocy specjalistów i nie tylko.</p>
            </div>
            <IPhone
            color='iphone__dark iphone'
            title='iPhone 12 Pro'
            description='To nie postęp. To przełom.'
            background_image="https://www.apple.com/v/home/o/images/heroes/iphone-12-pro/hero__dvsxv8smkkgi_medium_2x.jpg"
            verion1_title='iPhone 12 Pro' 
            verion2_title='iPhone 12 Pro Max'
            version1_first_text='Zamów w przedsprzedaży'
            version1_second_text='Dostępny od 23 październik' 
            version2_first_text='Przedsprzedaż startuje 6 listopada o 14:00' 
            version2_second_text='Dostępny od 13 listopada' 
            />
            <IPhone
            color='iphone__light iphone'
            title='iPhone 12'
            description='Prześcigacz.'
            background_image="https://www.apple.com/v/home/o/images/heroes/iphone-12/hero_alt__f760z1x2tf2a_small.jpg"
            background_size='background-size: 734px 824px;'
            verion1_title='iPhone 12' 
            verion2_title='iPhone 12 mini'
            version1_first_text='Zamów w przedsprzedaży'
            version1_second_text='Dostępny od 23 październik' 
            version2_first_text='Przedsprzedaż startuje 6 listopada o 14:00' 
            version2_second_text='Dostępny od 13 listopada' 
            />
            <IPhone
            color='iphone__dark iphone'
            title_image='https://www.apple.com/v/home/o/images/logos/watch-series-6/logo_hero__trsrpeu6koqy_small_2x.png'
            description='Zdrowie ma przyszłość. Na nadgarstku.'
            background_image="https://www.apple.com/v/home/o/images/heroes/watch-series-6/hero__dvsxv8smkkgi_small_2x.jpg"
            background_size='282px 454px'
            background_position='center 200px'
            />
            <div className='body__row'>
                <Product
                title='iPad Air'
                description='Ma moc. Ma kolor. Ma to coś.'
                image='https://www.apple.com/v/home/o/images/promos/ipad-air/tile__cauwwcyyn9hy_large.jpg'
                marginTop= '-200px'
                />

                <Product
                    title=''
                    description='Połącz cztery usługi Apple.'
                    image='https://www.apple.com/euro/home/b/screens_alt/images/promos/apple-one/tile__cauwwcyyn9hy_large.jpg'
                    titleImage='https://www.apple.com/v/home/o/images/logos/apple-one/logo__dcojfwkzna2q_large.png'
                    marginTop= '50px'
                />

            </div>
            <div className='body__row'>
                <Product
                    title=''
                    description='Zachwyca możliwościami. Zachęca ceną.'
                    image='https://www.apple.com/v/home/o/images/promos/watch-se/tile__cauwwcyyn9hy_large.jpg'
                    titleImage='https://www.apple.com/v/home/o/images/logos/watch-se/logo__dcojfwkzna2q_large.png'
                    marginTop='30px'
                />
                <Product
                    title='Ostatnia chwila, żeby zaoszczędzić przy zakupach na studia. Tylko od Apple.'
                    description=''
                    image='https://www.apple.com/euro/home/b/screens_alt/images/promos/bts-last-chance/bts_tile__f5qqm0vhrqye_large.jpg'
                    marginTop='30px'
                    kup={true}
                />
            </div>
        </div>
    )
}

export default Body
