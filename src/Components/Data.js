
import React, { useEffect, useState } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_PATH } from "../tools/constans";
import { v4 as uuidv4 } from "uuid";
import {toast} from "react-toastify";

const ModalExample = (props) => {
    const { buttonLabel = "Быстрый просмотр", className } = props;

    useEffect(() => {
        axios
            .get(API_PATH + "/api/ProductInfo/" + `${props.id}`)
            .then((res) => {
                setData(res.data.data);
                // console.log(res.data);
            })
            .catch((err) => console.log("Aka aylaning"));
    }, []);

    const [data, setData] = useState([]);
    const [currentColor, setCurrentColor] = useState({});
    const [color, setColor] = useState("");
    const [img, setImg] = useState(data);
    const [size, setSize] = useState();
    const [changing, setChanging] = useState(false);

    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
        setChanging(false);
    };

    const onChange = (e, color) => {
        setColor(color.color);
        setCurrentColor(color);

    };



    const onMouseEnter = (e, imgage) => {
        setImg(imgage);
    };

    const addSize = (e, ordersize, id) => {
        e.preventDefault()
        setSize({ ...size, id, ordersize });
    };

    const addBasket = (e, data1) => {
        e.preventDefault();

        //data
        if (localStorage.getItem("basket")) {
            let obj = JSON.parse(localStorage.getItem("basket"));
            data1.size = size;
            data1.uniqueid = uuidv4();
            data1.currentColor = currentColor;
            data1.currentPrice = currentColor.price
            data1.currentOldprice = currentColor.oldprice

            obj.push(data1);
            localStorage.setItem("basket", JSON.stringify(obj));
        } else {
            data1.size = size;
            data1.uniqueid = uuidv4();
            data1.currentColor = currentColor;
            data1.currentPrice = currentColor.price
            data1.currentOldprice = currentColor.oldprice
            localStorage.setItem("basket", JSON.stringify([data1]));
        }

        setChanging(!changing);
        //size
        // if (localStorage.getItem("size")) {
        //   let size = JSON.parse(localStorage.getItem("size"));
        //   size.push(size);
        //   localStorage.setItem("size", JSON.stringify(size));
        // } else {
        //   localStorage.setItem("size", JSON.stringify([size]));
        // }
    };

    const [modalin, setModalin] = useState(false);
    const togglein = () => setModalin(!modalin);




    //fast-order-form
    const [formdata, setFormdata] = useState({
        data: {},
        name: '',
        phone: ''
    })
    const onSubmit = async e => {
        e.preventDefault()
        setFormdata({
            ...formdata,
            data: currentColor
        })
        try {
           await axios.post(API_PATH + 'api/OrderAndOrderDetailsJson/', formdata, {Headers:{ 'Content-Type': 'applicatio' +
                       'n/json' }})
            toast("Ваш заказ оформлен!")

        } catch (e) {
            console.log(e)
        }


    }

    const onSubmitHandler = e => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <Button color="white" onClick={toggle}>
                {buttonLabel}
                <span style={{opacity: 0}}>{props.id}</span>
            </Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalBody>
                    {data.map((data1) => (
                        <div className="artikul">
                            <div>
                                <div className="btn-close" onClick={toggle}></div>
                                <h1 key={data1.id}>{data1.productname}</h1>
                                <div className="d-flex">
                                    <p>Артикул:</p>
                                    <p className="ms-1">35789469</p>
                                    <p className="ms-3">star</p>
                                    <p>&nbsp;1 отзыв</p>
                                    <p className="ms-3">Купили более {data1.buy_quantity} раз</p>
                                </div>
                            </div>
                            <form className="artikul-body">
                                <div className="column-1">
                                    <div className="column-1-container">
                                        {(currentColor.image
                                                ? currentColor.image
                                                : data1.colors[0].image
                                        ).map((img) => (
                                            <div
                                                className="image-box"
                                                onMouseEnter={(e) => onMouseEnter(e, img)}
                                            >
                                                <img className="box-image" src={API_PATH + img.image} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="column-2">
                                    <div className="main-image">
                                        <img
                                            src={`${API_PATH}/${
                                                img.image ? img.image : data1.colors[0].image[0].image
                                            }`}
                                        />
                                    </div>
                                </div>
                                <div className="column-3">
                                    <div className="column-3-header">
                    <span className="d-flex">
                      <h1>{data1.colors[0].price} сумм</h1>&nbsp;
                        <del>{data1.colors[0].oldprice} сумм</del>
                    </span>
                                        <h5>Цвет: {color ? color : data1.colors[0].color}</h5>
                                        <div className="colors">
                                            {data1.colors.map((color, index) => (
                                                <div className="colors-field">
                                                    <label htmlFor={index} className="label">
                                                        <img
                                                            src={API_PATH + color.image[1].image}
                                                            className="color-image"
                                                        />
                                                    </label>
                                                    <input
                                                        type="radio"
                                                        id={index}
                                                        name="radio"
                                                        value={color.colorname}
                                                        onClick={(e) => onChange(e, color)}
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        <div className="sizes">
                                            {(currentColor.size
                                                    ? currentColor.size
                                                    : data1.colors[0].size
                                            ).map((item) => (
                                                <button
                                                    className="sizes-size"
                                                    onClick={(e) => addSize(e, item.size, data1.id)}
                                                >
                                                    <span className="size-title">{item.size}</span>
                                                    <span className="size-sub">{item.quantity}</span>
                                                </button>
                                            ))}
                                        </div>

                                        <div className="buttons">
                                            {changing ? (
                                                <Link
                                                    to="/korzina"
                                                    className="to-basket"
                                                    style={{
                                                        textDecoration: "none",
                                                        color: "#fff",
                                                    }}
                                                >
                                                    Перейти в корзину
                                                </Link>
                                            ) : (
                                                <button
                                                    className="to-basket"
                                                    onClick={(e) => addBasket(e, data1)}
                                                >
                          Добавить в корзину
                        </button>
                                            )}

                                            {/*<button >Быстрый заказ</button>*/}
                                            <Button className="fast-order" onClick={togglein}>
                                                Быстрый заказ
                                            </Button>
                                            <div>
                                                <img className="w-100" src={API_PATH + data1.brandimage} alt=""/>
                                            </div>
                                            <Modal isOpen={modalin} toggle={togglein} className={'fast-order-back'}>
                                                <div className="btn-close ms-auto me-4 mt-4" onClick={togglein}></div>
                                                <ModalBody className={'fast-order-mod'}>
                                                    <form className={'fast-order-form'} onSubmit={e => onSubmit(e)}>
                                                        <div className="field">
                                                            <label htmlFor="name">Имя клиента</label>
                                                            <input value={formdata.name} onChange={e => onSubmitHandler(e)} type="text" placeholder={'Имя...'} className={'input'} name={'name'} id={'name'}/>
                                                        </div>
                                                        <div className="field">
                                                            <label htmlFor="number">Номер для обратного звонка</label>
                                                            <input value={formdata.phone} name="phone" onChange={e => onSubmitHandler(e)} type="number" placeholder={'Телефон номер...'} className={'input'}/>
                                                        </div>
                                                        <div className="field">
                                                            <button type={'submit'} className={'button'}>Отправить</button>
                                                        </div>
                                                    </form>
                                                </ModalBody>
                                            </Modal>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    ))}

                    <Link
                        to={"/three"}
                        className="text-decoration-none bord d-flex justify-content-center mt-4"
                    >
                        <button className="btn btn-danger">
                            Больше информации о товаре
                        </button>
                    </Link>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default ModalExample;














//
// import React, {useEffect, useState} from 'react';
// import { Button, Modal, ModalBody} from 'reactstrap';
// import {Link} from "react-router-dom";
// import axios from "axios";
// import {API_PATH} from "../tools/constans";
//
//
// const ModalExample = (props) => {
//     const {
//         buttonLabel='Быстрый просмотр',
//         className,
//     } = props;
//
//     const [data, setData] = useState([])
//
//
//     useEffect(() => {
//         axios.get(API_PATH + "/api/ProductInfo/" +`${props.id}`
//         ).then(res => {setData (res.data.data)
//                 console.log(res.data)
//             }
//         ).catch(err => console.log("Aka aylaning"))
//
//     }, []);
//
//     const [modal, setModal] = useState(false);
//     const toggle = () => setModal(!modal);
//     const imagechangepath=(e)=>{
//         let mainimage= `<img width="100%" src=${e._targetInst.pendingProps.src} alt="qwqegweg"/>`
//         document.getElementById("main_picture").innerHTML = mainimage;
//
//     }
//     const changeinfo = (e) => {
//         let colorid=e.currentTarget.id
//         console.log(colorid);
//         let obj = data[0].colors.find(o => o.id === parseInt(colorid));
//         console.log(obj);
//         let mainimage= `<img width="100%" src=${API_PATH +obj.image[0].image} alt="qwqegweg"/>`
//         document.getElementById("main_picture").innerHTML = mainimage;
//         document.getElementById("maincolorname").innerHTML = `<p>Цвет:  ${obj.colorname}</p>`;
//         let allimages = obj.image.map((items) => {
//             return `
//         <div id="items${items.id}" onMouseEnter={imagechangepath} >
//         <img width="100%" style="margin-bottom:16px" src=${API_PATH+items.image} alt="error"/>
//         </div>
//         `
//         }).join('');
//         document.getElementById("colorimages").innerHTML = allimages;
//
//
//
//
//
//
//
//         let allsize=''
//         // border: 1px solid #dee2e6!important;
//         obj.size.map((items) => (allsize+=`<p style="margin-right:16px;background-color:#f8f9fa;padding:5px;border: 1px solid #dee2e6!important" >${items.size}<br/>${items.quantity}</p>`))
//         document.getElementById("all_color_size").innerHTML = allsize;
//     };
//
//     return (
//
//         <div>
//             <Button color="white" onClick={toggle}>{buttonLabel}{props.id}</Button>
//             <Modal isOpen={modal} toggle={toggle} className={className} >
//
//                 <ModalBody>
//                     {
//                         data.map((data1) => (
//                             <div  className='artikul'>
//
//                                 <div>
//                                     <div className="btn-close" onClick={toggle}></div>
//                                     <h1 key={data1.id}>{data1.productname}</h1>
//                                     <div className="d-flex">
//                                         <p>Артикул:</p>
//                                         <p className="ms-1">35789469</p>
//                                         <p className="ms-3">star</p>
//                                         <p>1 отзыв</p>
//                                         <p className="ms-3">Купили более {data1.buy_quantity} раз</p>
//                                     </div>
//                                 </div>
//                                 <div className="row me-0">
//
//
//                                     <div id="colorimages" className="col-1">
//                                         {data1.colors[0].image.map((items) => (
//                                             <div className="leftimg mb-3" onMouseEnter={imagechangepath} >
//                                                 <img className="w-100" src={API_PATH + items.image} alt="error"/>
//                                             </div>
//                                         ))}
//                                     </div>
//
//                                     <div id="main_picture" className="col-5 senter">
//                                         <img className="w-100" src={API_PATH + data1.colors[0].image[0].image} alt=""/>
//                                     </div>
//
//                                     <div className="col-5 ">
//                                         <span>{data1.price}sum <del>{data1.oldprice}sum</del></span>
//                                         <div className="d-flex oplata">
//                                             <p>{data1.price}sum</p>
//                                             <img
//                                                 src="data:image/svg+xml,%3Csvg%20width%3D%2242%22%20height%3D%2212%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M23.693%201.725l-2.543%205.48h-.257V.544h-3.632v11.2h3.012c.817%200%201.543-.47%201.892-1.196l2.557-5.464h.258v6.66h3.632V.545h-3.057c-.787%200-1.529.469-1.862%201.18zM10.193%202.013L8.694%207.204h-.257L6.923%202.013A2.043%202.043%200%20004.956.545H1.369v11.2H5v-6.66h.258l2.088%206.66H9.77l2.088-6.66h.258v6.66h3.632V.545H12.16c-.908%200-1.725.59-1.967%201.468zM30.126%205.54v6.205h3.632V8.112h3.905a3.877%203.877%200%20003.663-2.573h-11.2z%22%20fill%3D%22%23319B42%22%2F%3E%3Cpath%20d%3D%22M37.557.545h-8.082c.5%202.663%202.83%204.54%205.63%204.54h6.281a4.34%204.34%200%2000.076-.787c0-2.164-1.74-3.753-3.905-3.753z%22%20fill%3D%22url(%23paint0_linear)%22%2F%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22paint0_linear%22%20x1%3D%2229.475%22%20y1%3D%222.815%22%20x2%3D%2241.462%22%20y2%3D%222.815%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2300A3E1%22%2F%3E%3Cstop%20offset%3D%22.304%22%20stop-color%3D%22%23009ADD%22%2F%3E%3Cstop%20offset%3D%22.799%22%20stop-color%3D%22%230082D4%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230076CF%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E%0A"
//                                                 alt=""/>
//                                             <img
//                                                 src="data:image/svg+xml,%3Csvg%20width%3D%2247%22%20height%3D%2222%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M35.304%2022H11.12c-2.95%200-5.778-1.159-7.863-3.222A10.94%2010.94%200%20010%2011a10.94%2010.94%200%20013.257-7.778A11.181%2011.181%200%200111.12%200h24.184c2.95%200%205.778%201.159%207.863%203.222A10.94%2010.94%200%200146.424%2011a10.94%2010.94%200%2001-3.257%207.778A11.181%2011.181%200%200135.304%2022zM8.762%2011.118V9.381l2.327%201.443%204.837-3.52c.291.371.537.775.734%201.202l-5.571%204.055-2.327-1.443zm7.024-.251v.125a4.623%204.623%200%2001-.996%202.871%204.71%204.71%200%2001-2.573%201.654%204.753%204.753%200%2001-3.057-.267%204.686%204.686%200%2001-2.24-2.074%204.611%204.611%200%2001-.472-3%204.643%204.643%200%20011.497-2.649%204.744%204.744%200%20015.79-.371l1.193-.866a6.156%206.156%200%2000-3.81-1.345%206.158%206.158%200%2000-3.823%201.302%206.043%206.043%200%2000-2.167%203.378%205.99%205.99%200%2000.438%203.977%206.082%206.082%200%20002.851%202.837%206.176%206.176%200%20004.018.456%206.125%206.125%200%20003.427-2.124%206.008%206.008%200%20001.24-4.86l-1.316.956zm7.487%203.767v-2.466h1.233c2.343%200%203.6-.926%203.6-2.77%200-1.786-1.073-2.68-3.6-2.68h-2.662v7.916h1.429zm0-3.767V8.019l1.366-.001c1.392%200%201.988.373%201.988%201.345%200%201.075-.686%201.504-2.012%201.504h-1.342zm5.59-1.49c.375-.28%201.061-.51%202.046-.51%201.669%200%202.492.567%202.492%202.036v3.732h-1.257v-1.018c-.274.655-.971%201.108-1.887%201.108-1.154%200-1.839-.645-1.839-1.753%200-1.29.949-1.651%202.354-1.651h1.291v-.248c0-.803-.387-1.052-1.154-1.052-1.052%200-1.657.407-2.045%201.006l-.002-1.65zm3.199%203.262v-.458h-1.13c-.79%200-1.167.148-1.167.655%200%20.43.32.701.914.701.903%200%201.326-.509%201.383-.898zm3.493-3.659h-1.492l2.406%205.684c-.217.761-.526%201.033-.936%201.033a1.013%201.013%200%2001-.686-.283v1.233c.168.146.559.248.914.248.755%200%201.268-.305%201.772-1.661l2.285-6.254h-1.417l-1.28%203.878-1.566-3.878z%22%20fill%3D%22%2321A038%22%2F%3E%3C%2Fsvg%3E"
//                                                 alt=""/>
//                                             <img
//                                                 src="data:image/svg+xml,%3Csvg%20width%3D%2270%22%20height%3D%2232%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-path%3D%22url(%23clip0)%22%3E%3Cpath%20d%3D%22M69.688%2010.667V22.4h-4.187v-8.23h-4.032v8.23H57.28V10.667h12.407z%22%20fill%3D%22%23000%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M48.657%2022.933c3.738%200%206.514-2.341%206.514-5.89%200-3.436-2.048-5.667-5.471-5.667-1.58%200-2.884.569-3.866%201.549.235-2.026%201.912-3.505%203.758-3.505l3.635-.007%201.814-3.546s-4.028.093-5.9.093c-4.279.077-7.168%204.049-7.168%208.873%200%205.62%202.818%208.1%206.684%208.1zm.022-8.415c1.388%200%202.35.931%202.35%202.524%200%201.434-.854%202.615-2.35%202.618-1.43%200-2.393-1.094-2.393-2.593%200-1.594.963-2.55%202.393-2.55z%22%20fill%3D%22%23000%22%2F%3E%3Cpath%20d%3D%22M38.605%2018.628s-1.005.58-2.507.69c-1.726.052-3.264-1.04-3.264-2.982%200-1.893%201.357-2.978%203.22-2.978%201.143%200%202.655.793%202.655.793s1.106-2.033%201.679-3.05c-1.05-.797-2.447-1.234-4.072-1.234-4.102%200-7.279%202.68-7.279%206.445%200%203.814%202.986%206.432%207.28%206.353%201.199-.045%202.854-.467%203.863-1.116l-1.575-2.92z%22%20fill%3D%22%23000%22%2F%3E%3Cpath%20d%3D%22M0%206.965l3.836%206.927v4.225L.004%2025.03%200%206.965z%22%20fill%3D%22%235B57A2%22%2F%3E%3Cpath%20d%3D%22M14.729%2011.371l3.594-2.225%207.356-.007-10.95%206.777v-4.545z%22%20fill%3D%22%23D90751%22%2F%3E%3Cpath%20d%3D%22M14.71%206.925l.02%209.17-3.845-2.386V0l3.825%206.925z%22%20fill%3D%22%23FAB718%22%2F%3E%3Cpath%20d%3D%22M25.68%209.139l-7.356.007-3.615-2.221L10.886%200%2025.68%209.139z%22%20fill%3D%22%23ED6F26%22%2F%3E%3Cpath%20d%3D%22M14.73%2025.069v-4.45l-3.845-2.341L10.887%2032l3.843-6.931z%22%20fill%3D%22%2363B22F%22%2F%3E%3Cpath%20d%3D%22M18.314%2022.863L3.836%2013.892%200%206.965l25.664%2015.89-7.35.008z%22%20fill%3D%22%231487C9%22%2F%3E%3Cpath%20d%3D%22M10.887%2032l3.842-6.931%203.586-2.206%207.35-.009L10.886%2032z%22%20fill%3D%22%23017F36%22%2F%3E%3Cpath%20d%3D%22M.004%2025.03l10.91-6.752-3.667-2.274-3.412%202.113L.004%2025.03z%22%20fill%3D%22%23984995%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%22clip0%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M0%200h69.689v32H0z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E"
//                                                 alt=""/>
//                                         </div>
//                                         <h6 className='mt-3'>В кредит от 1 597 ₽</h6>
//
//
//                                         <div id="maincolorname">
//                                             <p>Цвет:  {data1.colors[0].colorname}</p>
//                                         </div>
//
//
//
//                                         <div className="d-flex">
//                                             {data1.colors.map((items) => (
//                                                 <div id={items.id} className="leftimg mt-3" onClick={changeinfo}>
//                                                     <img className="w-25" src={API_PATH +items.image[0].image} alt=""/>
//                                                 </div>
//                                             ))}
//
//                                         </div>
//                                         <div id="all_color_size" className="d-flex mt-3">
//
//                                             {data1.colors[0].size.map((items) => (
//                                                 <div id={items.id}   className="leftimg me-3 p-1 bg-light border">
//                                                     <p>{items.size}<br/>{items.quantity}</p>
//                                                 </div>
//                                             ))}
//
//                                         </div>
//
//
//                                         <div className="d-flex dobavit">
//
//                                             <button className='btn btn-danger'> Добавить в корзину</button>
//                                             <img
//                                                 src="data:image/svg+xml,%3Csvg%20width%3D%2221%22%20height%3D%2219%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10.5%2018C5.56%2013.75%201%209.592%201%206.082%201%203.216%203.28%201%206.225%201c1.615%200%203.23.74%204.275%201.94C11.545%201.74%2013.16%201%2014.775%201%2017.72%201%2020%203.217%2020%206.082c0%203.51-4.56%207.668-9.5%2011.918z%22%20stroke%3D%22%23CB11AB%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E"
//                                                 alt=""/>
//                                         </div>
//
//                                         <div className="d-flex dobavit">
//
//                                             <button className='btn btn-danger'> Быстрый заказ</button>
//
//                                         </div>
//
//                                         <img className="w-25 mt-3 mb-3" src={API_PATH + data1.brandimage} alt=""/>
//
//                                         <div className="d-flex besplatno">
//                                             <img
//                                                 src="data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2216%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1.686%208.53h4.02c.3%200%20.501-.202.501-.505s-.2-.505-.501-.505h-4.02c-.301%200-.502.202-.502.505s.2.505.502.505zM.502%204.694h5.204c.3%200%20.501-.202.501-.505s-.2-.504-.501-.504H.502C.2%203.685%200%203.886%200%204.189s.2.505.502.505zM2.997%2012.316h2.709c.3%200%20.501-.202.501-.505s-.2-.505-.501-.505h-2.71c-.3%200-.501.202-.501.505s.2.505.502.505zM24%203.483c0-.327%200-.327-.301-.455L16.174%200h-.301L8.348%203.028c-.232.078-.401.255-.401.404v9.085c0%20.202.1.404.3.455L15.774%2016h.3l7.526-3.028c.2-.101.3-.253.3-.455L24%203.483zm-8.027-2.474l6.17%202.474-2.307.908-6.17-2.473%202.307-.909zm-.501%2013.83L8.95%2012.214V4.24l6.522%202.624v7.975zm.501-8.883l-6.17-2.473%202.558-1.01%206.17%202.473-2.558%201.01zm7.024%206.258l-6.522%202.625V6.864l6.522-2.624v7.974z%22%20fill%3D%22%23CB11AB%22%2F%3E%3C%2Fsvg%3E"
//                                                 alt=""/>
//                                             <h5>Бесплатная доставка</h5>
//                                         </div>
//
//                                     </div>
//
//                                 </div>
//
//                             </div>
//                         ))
//                     }
//
//
//
//                     <Link to={"/three"}  className='text-decoration-none bord d-flex justify-content-center mt-4'>
//
//                         <button className='btn btn-danger'>Больше информации о товаре</button>
//                     </Link>
//
//                 </ModalBody>
//
//             </Modal>
//         </div>
//     );
// }
//
// export default ModalExample;