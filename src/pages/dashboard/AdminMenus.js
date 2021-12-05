import React from 'react';
import AdminLayout from "../../Components/AdminLayout";
import {updateState,saveMenu} from "../../redux/action/menusAction";
import {connect} from "react-redux";
import {Modal, ModalBody, ModalHeader, ModalFooter} from "reactstrap";
import {AvForm,AvField} from "availity-reactstrap-validation";
import './dash.scss'
import Nav from "../../Components/Nav";


const AdminMenus = (props) => {

    const generateUrl = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

    return (

        <div className={'cont'}>
            <div className={'navb'}>
                <span className="item">
              <i className="fas fa-home"></i>&nbsp; Главное
            </span>
                <span className="item">
              <i className="fas fa-home"></i>&nbsp; Избранные
            </span>
                <span className="item">
              <i className="fas fa-home"></i>&nbsp; Покупки
            </span>
                <span className="item">
              <i className="fas fa-home"></i>&nbsp; Обрашение
            </span>
                <span className="item">
              <i className="fas fa-home"></i>&nbsp; Отзывы и вопросы
            </span>
                <span className="item">
              <i className="fas fa-home"></i>&nbsp; Финансы
            </span>
                <span className="item">
              <i className="fas fa-home"></i>&nbsp; Профиль
            </span>
            </div>
        <div className="navb">




            <div className="section">
                <div className="line line-1">
                    <div className="card1 hover">
                        <div className="card-user">
                            <div className="img"></div>
                            <h1 className="name">Ползователь</h1>
                        </div>
                        <div className="card-content">
                            <p className="phone">Телефон:</p>
                            <p className="email">Email:</p>
                        </div>
                    </div>
                    <div className="card1 hover">
                        <div className="card-user">
                            <div className="img"></div>
                            <h1 className="name">Доставки</h1>
                        </div>
                        <div className="card-content">
                            <p className="phone">Телефон:</p>
                        </div>
                    </div>
                    <div className="card1 hover">
                        <div className="card-user">
                            <div className="img"></div>
                            <h1 className="name">Скидка покупателя</h1>
                        </div>
                        <div className="card-content">
                            <p className="phone">Сумма:</p>
                        </div>
                    </div>
                </div>
                <div className="line line-2">
                    <div className="mini-card hover">
                        <h2>Мои карты</h2>
                        <p>Добавить карту</p>
                    </div>
                    <div className="mini-card hover">
                        <h2>Покупки</h2>
                        <p>0 Товаров</p>
                    </div>
                    <div className="mini-card hover">
                        <h2>Любимые Бренды</h2>
                        <p>0 Брендов</p>
                    </div>
                    <div className="mini-card hover">
                        <h2>Уведомление</h2>
                        <p>0 </p>
                    </div>
                </div>
                <div className="line line-3">
                    <div className="medium-card hover">
                        <h2>Финансы и электронные чеки</h2>
                        <div className="info">
                            <div className="image"></div>
                            <div className="box">
                                <button className="btn1">История покупок</button>
                                <button className="btn1">История операций</button>
                                <button className="btn1">Электронные чеки</button>
                            </div>
                        </div>
                    </div>
                    <div className="medium-card hover">
                        <h2>Финансы и электронные чеки</h2>
                        <div className="info">
                            <div className="image"></div>
                            <div className="box">
                                <p>доступно заказу 0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        </div>
            //
            // <AdminLayout history={props.history}>
            //     <button type="button" className="btn btn-success d-block ms-lg-auto" onClick={() => props.updateState({open: !props.open})}> Add</button>
            //
            //     <Modal isOpen={props.open} toggle={() => props.updateState({open: false})}>
            //        <AvForm onSubmit={props.saveMenu}>
            //         <ModalBody>
            //             <AvField name="nameUz" type="text" onChange={(e) => props.updateState({url: generateUrl(e.target.value)})} label="Name (uz)"/>
            //             <AvField name="nameUz" type="text" label="Name (ru)"/>
            //             <AvField name="nameUz" type="text" label="Name (en)"/>
            //
            //             <AvField name="url" type="text" label="Url" value={props.url}/>
            //
            //             <AvField name="submenu" onChange={() => props.updateState ({submenu: !props.submenu})} type="checkbox" label="Is Submenu: "/>
            //
            //             {props.submenu ?
            //                 <AvField name="parentmenu" type="select" label="Parent Menu">
            //                 <option value="1">1</option>
            //                 <option value="2">2</option>
            //                 </AvField> : ""
            //             }
            //
            //         </ModalBody>
            //
            //         <ModalFooter>
            //             <button type="submit" className="btn btn-success">Save</button>
            //             <button type="button" className="btn btn-secondary" onClick={() => props.updateState({open:false})}>Cancel</button>
            //
            //         </ModalFooter>
            //        </AvForm>
            //     </Modal>
            //
            // </AdminLayout>

    );
};

const mapStateToProps = (state) => {
    return{
        open:state.menus.open,
        url:state.menus.url,
        submenu: state.menus.submenu
    }
};

export default connect(mapStateToProps ,{updateState,saveMenu}) (AdminMenus);