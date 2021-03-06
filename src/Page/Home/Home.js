import React, {useState} from "react"
import Data from "../../component/Cart_Item/Data"
import "./Home.css"
import Image from "../../assets/image/Image"
import search from '../../assets/image/search.png'
import { useHistory } from "react-router";

import ShopCart from "../../component/Cart_Item/Shop_Cart"
import ShoppingCartOutlined from "@ant-design/icons/lib/icons/ShoppingCartOutlined";


const Home = () => {
    const [projectList, setShop] = useState(Data.Shop);
    const history = useHistory();
    return (
        <div>
            <div className={"header_contact"}>
                <h3 className={"welcome"}>welcome to our store</h3>
                <div className="phome_section">
                    <img className="phone_img" src={Image.phone}/>
                    <h4 className={"number"}> Call Us: 0162 735 2018</h4>

                </div>
                <div className="spece"></div>
                <div
                     className="help_section"
                >
                    <img className="help_img" src={Image.help}/>
                    <h4 className="help_title">Help & More</h4>
                </div>
                <div
                     className={"english"}
                >
                    <img src={Image.BD} className={"country_img"}/>
                    <h4 className="country-title">Dhaka</h4>
                </div>


            </div>


            <div className="container header_sectionTwo">

                <div className="web_logo_section">
                    <img className="web_logo"
                         src={Image.w_logo}
                         onClick={()=>{history.push("/")}}
                    />

                    <p className="short_description">
                        Short Description of<br/>
                        Cibo online store</p>
                </div>
                <div className="search_section">
                    <input className="search" type="search" placeholder="search for.... "/>

                    <button className="search_button"><img className="img" src={search}/></button>

                </div>

                <div className="account_section">



                    <a href={""} className="account"><img className="account_img" src={Image.love}/></a>


                    <a href={""} className="account-one cart_img">
                        <img className="account_img" src={Image.cart2}/>


                        {/*<ShoppingCartOutlined  className="cart_img"/>*/}

                    </a>


                    <a href={""} className="account_two"> <img className="account_img" src={Image.account}/></a>




                </div>

            </div>

            <div className="mobile_divice container">
                <img className="menu" src={Image.menu1}/>

                <div className="search_section_mobile">
                    <input className="search_mobile" type="search" placeholder="search for ... "/>

                    <button className="search_button"><img className="img" src={search}/></button>

                </div>

            </div>





            {/*<div style={{marginTop:100}} className="container">*/}
            {/*    <ShopCart projectList={projectList} />*/}
            {/*</div>*/}


        </div>
    );
};
export default Home;
