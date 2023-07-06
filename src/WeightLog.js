import Background from './Background.js'
import { ButtonGroup, Button} from '@mui/material';
import DataGridDemo from './DateGrid.js'
import { motion } from "framer-motion";

const WeightLog =() => {
    return(
        <div className="wl_page">
            <Background allowTouch="false"></Background>
            <div className="top_bar">
                <motion.div
                    whileHover={{ opacity: 0.5 }}>
                    My Weight Log
                </motion.div>
            </div>
            <div className="body_bar">
                <div className="date_log">
                    <DataGridDemo></DataGridDemo>
                </div>
                <div className="graph">

                </div>
                <div className="analytics">

                </div>
            </div>
        </div>
    )
}

export default WeightLog;