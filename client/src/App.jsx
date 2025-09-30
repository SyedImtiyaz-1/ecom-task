import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import AuthScreen from './screens/AuthScreen';
import OrderSuccessScreen from './screens/OrderSuccessScreen';
import MyOrdersScreen from './screens/MyOrdersScreen';
import OrderFailedScreen from './screens/OrderFailedScreen'

function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 w-full">
        <div className="px-4 py-6 sm:px-0">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/auth" element={<AuthScreen />} />

            <Route path="/order-success" element={<OrderSuccessScreen />} />
            <Route path="/order-failed" element={<OrderFailedScreen />} />
            <Route path='/myorders' element={
              <PrivateRoute><MyOrdersScreen /></PrivateRoute>
            } />
            <Route path='/cart' element={
              <PrivateRoute><CartScreen /></PrivateRoute>
            } />
            <Route path='/checkout' element={
              <PrivateRoute><CheckoutScreen /></PrivateRoute>
            } />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
