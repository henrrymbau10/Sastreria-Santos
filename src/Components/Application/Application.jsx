import { Routes, Route } from 'react-router-dom';
import { Appointment } from '../../Views/Appointment/Appointment';
import { Home } from '../../Views/Home/Home';




export const Application = () => {

    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cita" element={<Appointment />} />
            </Routes>
        </div>
    )
}
