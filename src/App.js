import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import PreferredPayment from './pages/PreferredPayment';
import CreditDebitCard from './pages/CreditDebitCard';
import Wallet from './pages/Wallet';
import Upi  from './pages/Upi';
import Other from './pages/Other';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={< PreferredPayment/>} />
                    <Route path='/creditdebitcard' element={<CreditDebitCard />} />
                    <Route path='/wallet' element={<Wallet />} />
                    <Route path='/upi' element={<Upi />} />
                    <Route path='/other' element={<Other />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
