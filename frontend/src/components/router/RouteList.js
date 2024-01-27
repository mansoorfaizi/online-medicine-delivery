import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from '../App';
import Home from '../layout/Home';
import AdList from '../Ad/AdList';
import Profile from '../user/Profile';
import Location from '../location/Location';
import ShoppingCart from '../order/add to cart/ShoppingCart';
import FeedbackForm from '../feedback/FeedbackForm';
import FeedBack from '../feedback/FeedBack';
import ComplaintForm from '../feedback/ComplaintForm';
import Faqs from '../FAQS/Faqs';
import Prescription from '../order/Prescription';
import Contact from '../contact us/Contact';
import WorkDetail from '../Ad/ad detail/WorkDetail';
import Generic from '../Ad/ad detail/Generic';
import DescriptionDetail from '../Ad/ad detail/DescriptionDetail';
import UsedForDetail from '../Ad/ad detail/UsedForDetail';
import Dosage from '../Ad/ad detail/Dosage';
import Dashboard from '../admin/components/dashboard/Dashboard';
import OrderList from '../admin/components/order/OrderList';
import PrescriptionList from '../admin/components/order/PrescriptionList';
import OrderReport from '../admin/components/report/OrderReport';
import Registration from '../user/Registration';
import Login from '../user/Login';
import SendPasswordResetEmail from '../user/SendPasswordResetEmail';
import ChangePassword from '../user/ChangePassword';
import AdDetail from '../Ad/ad detail/AdDetail';
import MainLayout from '../admin/components/MainLayout';
import ResetPassword from '../user/ResetPassword';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import MobileCategory from '../category/MobileCategory';
import OrderLists from '../order/OrderLists';
import AllOrder from '../order/AllOrder';
import CancelledOrder from '../order/CancelledOrder';
import CompleteOrder from '../order/CompleteOrder';
import PendingOrder from '../order/PendingOrder';
import YearReport from '../admin/components/report/YearReport';
import PrescriptionDetails from '../admin/components/order/PrescriptionDetails';
import FilterOrder from '../admin/components/filter order/FilterOrder';

const RouteList = () => {
    const myData = useSelector((state) => state.user);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="ad/list/:name/:id/" element={<AdList />} />
                    <Route path="/location/" element={<Location />} />
                    <Route
                        path="/mobile/category/"
                        element={<MobileCategory />}
                    />
                    <Route
                        path="/profile/"
                        element={
                            myData.id ? <Profile /> : <Navigate to="/login/" />
                        }
                    />
                    <Route
                        path="/shopping/cart/"
                        element={
                            myData.id ? (
                                <ShoppingCart />
                            ) : (
                                <Navigate to="/login/" />
                            )
                        }
                    />
                    <Route
                        path="feedback"
                        element={
                            myData.id ? (
                                <FeedBack />
                            ) : (
                                <Navigate to={'/login/'} />
                            )
                        }
                    >
                        <Route
                            path=""
                            element={
                                myData.id ? (
                                    <FeedbackForm />
                                ) : (
                                    <Navigate to={'/login/'} />
                                )
                            }
                        />
                        <Route
                            path="complaint/"
                            element={
                                myData.id ? (
                                    <ComplaintForm />
                                ) : (
                                    <Navigate to={'/login/'} />
                                )
                            }
                        />
                    </Route>
                    <Route path="/faq/" element={<Faqs />} />
                    <Route
                        path="/prescription/"
                        element={
                            myData.id ? (
                                <Prescription />
                            ) : (
                                <Navigate to="/login/" />
                            )
                        }
                    />
                    <Route path="/contact/" element={<Contact />} />
                    <Route path="ad/detail/:id/" element={<AdDetail />}>
                        <Route path="" element={<WorkDetail />} />
                        <Route
                            path="description/:id/"
                            element={<DescriptionDetail />}
                        />
                        <Route path="generic/:id/" element={<Generic />} />
                        <Route
                            path="used/for/:id/"
                            element={<UsedForDetail />}
                        />
                        <Route path="dosage/:id/" element={<Dosage />} />
                    </Route>
                    <Route
                        path="orders"
                        element={
                            myData.id ? (
                                <OrderLists />
                            ) : (
                                <Navigate to={'/login/'} />
                            )
                        }
                    >
                        <Route
                            path=""
                            element={
                                myData.id ? (
                                    <AllOrder />
                                ) : (
                                    <Navigate to={'/login/'} />
                                )
                            }
                        />
                        <Route
                            path="canceled/"
                            element={
                                myData.id ? (
                                    <CancelledOrder />
                                ) : (
                                    <Navigate to={'/login/'} />
                                )
                            }
                        />
                        <Route
                            path="complete/"
                            element={
                                myData.id ? (
                                    <CompleteOrder />
                                ) : (
                                    <Navigate to={'/login/'} />
                                )
                            }
                        />
                        <Route
                            path="pending/"
                            element={
                                myData.id ? (
                                    <PendingOrder />
                                ) : (
                                    <Navigate to={'/login/'} />
                                )
                            }
                        />
                    </Route>
                </Route>
                <Route
                    path="dashboard"
                    element={
                        myData.admin ? <MainLayout /> : <Navigate to={'/'} />
                    }
                >
                    <Route
                        path=""
                        element={
                            myData.admin ? <Dashboard /> : <Navigate to={'/'} />
                        }
                    />
                    <Route
                        path="order/list/"
                        element={
                            myData.admin ? <OrderList /> : <Navigate to={'/'} />
                        }
                    />
                    <Route
                        path="prescription/list/"
                        element={
                            myData.admin ? (
                                <PrescriptionList />
                            ) : (
                                <Navigate to={'/'} />
                            )
                        }
                    />
                    <Route
                        path="prescription/details/:id/"
                        element={
                            myData.admin ? (
                                <PrescriptionDetails />
                            ) : (
                                <Navigate to={'/'} />
                            )
                        }
                    />
                    <Route
                        path="filter/order/:id/"
                        element={
                            myData.admin ? (
                                <FilterOrder />
                            ) : (
                                <Navigate to={'/'} />
                            )
                        }
                    />
                    <Route
                        path="day/report/"
                        element={
                            myData.admin ? (
                                <OrderReport />
                            ) : (
                                <Navigate to={'/'} />
                            )
                        }
                    />
                    <Route
                        path="year/report/"
                        element={
                            myData.admin ? (
                                <YearReport />
                            ) : (
                                <Navigate to={'/'} />
                            )
                        }
                    />
                </Route>
                <Route path="/signup/" element={<Registration />} />
                <Route path="/login/" element={<Login />} />
                <Route
                    path="/send/password/reset/email/"
                    element={<SendPasswordResetEmail />}
                />
                <Route
                    path="/api/user/reset/:id/:token/"
                    element={<ResetPassword />}
                />
                <Route
                    path="/change/password/"
                    element={
                        myData.id ? (
                            <ChangePassword />
                        ) : (
                            <Navigate to="/login/" />
                        )
                    }
                />
                <Route
                    path="*"
                    element={
                        <Typography variant="h4" fontWeight="bold">
                            Error 404 Page not found !!
                        </Typography>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteList;
