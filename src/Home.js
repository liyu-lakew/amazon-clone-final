import React from "react";
import './Home.css'
import Product from './Product'
function Home() {
    return (
      <div className="home">
        <div className="home__container">
        <img
            className="home__image"
            src="https://vertexbazaar.com/wp-content/uploads/2022/04/amazon-prime-video-banner.jpg.webp"
            alt=""
          />
          <div className="home__row">
          <Product
            id="12321341"
            title="Electronic Digital Piano,61 key piano keyboard with Built-In Speaker Microphone, Portable Keyboard Gift Teaching for Beginners，Electronic Piano for kids, Birthday Gift for children(White)"
            price={49}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71xox6lJb6L._AC_UL675_SR675,480_.jpg"
            alt=""
          />
          <Product
            id="1232145"
            title="Bluetooth Speaker with HD Sound, Portable Wireless, IPX5 Waterproof, Up to 24H Playtime, TWS Pairing, BT5.3, for Home/Party/Outdoor/Beach, Electronic Gadgets, Birthday Gift (Black)"
            price={29}
            rating={5}
            image="https://m.media-amazon.com/images/I/81djh1gfUwL._AC_UL480_FMwebp_QL65_.jpg"
          /> 
          <Product
            id="12321351"
            title="Amazon Fire HD 8 tablet, 8” HD Display, 32 GB, 30% faster processor, designed for portable entertainment, (2022 release)"
            price={59}
            rating={5}
            image="https://m.media-amazon.com/images/I/61fgc1OW1ZL._AC_UL480_FMwebp_QL65_.jpg"
            alt=""
          />
          </div>
          <div className="home__row">
          <Product
            id="12321322"
            title="AGLUCKY Ice Makers Countertop with Self-Cleaning, 26.5lbs/24hrs, 9 Cubes Ready in 6~8Mins, Portable Ice Machine with 2 Sizes Bullet Ice/Ice Scoop/Basket for Home/Kitchen/Office/Bar/Party, Black"
            price={79}
            rating={5}
            image="https://m.media-amazon.com/images/I/41FAnyZnX1L._AC_SR480,480_.jpg"
            alt=""
          />
          <Product
            id="12321331"
            title="CHEFFANO Meat Grinder Electric, 350W[2000W Max] Electric Meat Grinder, Molino De Carne, Meat Mincer with Stainless Steel 2 Blades and 3 Plates, Sausage Staff Maker & Kubbe Kit for Home Kitchen Use"
            price={149}
            rating={4}
            image="https://m.media-amazon.com/images/I/71PsfxsDAyL._AC_UL480_FMwebp_QL65_.jpg"
            alt=""
          />
          <Product
            id="12321349"
            title="Hamilton Beach Dual Breakfast Sandwich Maker with Timer, Silver (25490A"
            price={32}
            rating={5}
            image="https://m.media-amazon.com/images/I/81ky0potEEL._AC_UL480_FMwebp_QL65_.jpg"
            alt=""
          />
          </div>
          <div className="home__row">
          <Product
            id="12321330"
            title="Scented Candles Gifts for Women: 12 Pack Aromatherapy Candles for Home Scented 130H Burn Time Natural Soy Wax Essential Oil Stress Relief Candle Mother's Day Gifts Set for Women Christmas Birthday"
            price={17}
            rating={5}
            image="https://m.media-amazon.com/images/I/816pThOBzKL._AC_UL480_FMwebp_QL65_.jpg"
            alt=""
          /> 
        
          <Product
            id="12321390"
            title="Fansbe Tech Karaoke Microphone Machine Kids Adults, Karaoke Machine Bluetooth Sound Effects, Bluetooth Wireless Speakers Karaoke Machine LED Light TF Card/USB Portable Home Party Outdoor/Indoor, 15W"
            price={26.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/814Pw32UiyL._AC_SX679_.jpg"
            alt=""
          /> <Product
          id="12321310"
          title="Eywamage Grey Glass Flameless Candles with Remote Battery Operated Flickering LED Pillar Candles Real Wax Wick Φ 3"
          price={24}
          rating={5}
          image="https://m.media-amazon.com/images/I/61BruPQAEuS._AC_SX569_PIbundle-3,TopRight,0,0_SH20_.jpg"
          alt=""
        />
        </div>
        <div className="home__row">

          <Product
            id="12321324"
            title="YINSIGNIA 50-inch Class F30 Series LED 4K UHD Smart Fire TV with Alexa Voice Remote (NS-50F301NA24, 2023 Model)"
            price={239}
            rating={3}
            image="https://m.media-amazon.com/images/I/81DM+ZzL8rL._AC_SX300_SY300_.jpg"
            alt=""
          />
          
          </div>
          <div className="home__row">
          <Product
            id="12321397"
            title="YUSOKI Luxury Double Sided Faux Fur Throw Blanket(Without Pillows),Soft Fuzzy Fluffy Cozy Plush Furry Comfy Warm Blanket for Couch Bed Chair Sofa Bedroom Women Teen Girls Gift(Ivory,50" 
            price={29}
            rating={3}
            image="https://m.media-amazon.com/images/I/81JWklpfJAL._AC_UL480_FMwebp_QL65_.jpg"
            alt=""
          />
          <Product
            id="12321320"
            title="Homedics Tabletop Water Fountain, Home Décor Soothing Sound Machine - Automatic Pump, Deep Basin & Natural River Rocks. Indoor Zen Relaxation for Office, Living Room, or Bedroom, 8.25” Tall"
            price={74}
            rating={3}
            image="https://m.media-amazon.com/images/I/815vZaQ9FXL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            alt=""
          />
          <Product
            id="12321313"
            title="COLAMO Luxury 10-Sheet Green Peel and Stick Backsplash,Faux Ceramic Matt Tile,Waterproof Self Adhesive Wall Tile,Stick on Accent Wall for Bathroom,Bedroom,Living Room,Doorway(8”×8”,Thicker Version)"
            price={44}
            rating={3}
            image="https://m.media-amazon.com/images/I/6147if7IkpL._AC_SX569_.jpg"
            alt=""
          />
          
          </div>
          </div>
          </div>
        

          )
          }
          export default Home