import {useState, useEffect} from 'react';
import { Box, TextField, InputAdornment, IconButton } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams, GridApi, GridActionsCellItem } from '@mui/x-data-grid';
import { DateField } from '@mui/x-date-pickers';
import dayjs from 'dayjs'
import { motion } from "framer-motion";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';

export default function DataGridDemo() {

    const columns: GridColDef[] = [
        { field: 'date',
          headerName: 'Date',
          width: 125,
          headerAlign: 'center',
          align: 'center',
          filterable: false,
          hideable: false,
          disableColumnMenu: true,
          sortable: false,
        },
        {
          field: 'weight',
          headerName: 'Weight',
          width: 150,
          headerAlign: 'center',
          align: 'center',
          
          filterable: false,
          hideable: false,
          disableColumnMenu: true,
          sortable: false,
        },
        {
          field: 'actions',
          type: 'actions',
          headerName: '',
          width: 100,
          getActions: ({ id} ) => {
            return [
                <GridActionsCellItem
                  icon={<EditIcon />}
                  label="Edit"
                  className="textPrimary"
                  color="inherit"
                />,
                <GridActionsCellItem
                  icon={<DeleteIcon />}
                  label="Delete"
                  color="inherit"
                />,
              ];
          }

        }
      ];

    const [rows, setRows] = useState([
        { id: 1, date: '6/22', weight: '150'},
        { id: 2, date: '6/23', weight: '151.5'},
        { id: 3, date: '6/24', weight: '151'},
        { id: 4, date: '6/25', weight: '150'},
        { id: 5, date: '6/26', weight: '151.5'},
        { id: 6, date: '6/27', weight: '151'},
        { id: 7, date: '6/28', weight: '151'},
        { id: 8, date: '6/29', weight: '151'},
        { id: 9, date: '6/30', weight: '151.5'},
        { id: 10, date: '7/01', weight: '151'},
        { id: 11, date: '7/02', weight: '151'},
        { id: 12, date: '7/03', weight: '151'},
        { id: 13, date: '7/04', weight: '151'},
        { id: 14, date: '7/05', weight: '151'},
      ]);
      
      useEffect(() => {
          console.log('use effect ran');
          console.log(rows);
      });

      const [activeIds, setActiveIds] = useState([]);

  return (
    <Box sx={{ height: '90%', width: '90%' }}>
        <Box sx={{ height: '60%', width: '100%' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            // initialState={{
            //     pagination: {
            //       paginationModel: {
            //         pageSize: 7,
            //       },
            //     },
            //   }}
            rowHeight = {50}
            columnHeaderHeight = {60}
            hideFooter
            checkboxSelection={false}
            keepNonExistentRowsSelected
            
            onRowSelectionModelChange={(activeIds) => {
                console.log(activeIds);
            }}
        />
        </Box>
        <br></br>
        <Box sx={{ height: '40%', width: '100%' }}>
            
            <motion.div
                align={'center'}
                whileHover={{ opacity: 0.5 }}
            >Add a new log date:</motion.div>
            
            <div display={'flex'} flex-direction={'row'}>
            <DateField
                
                
                defaultValue = {dayjs()}
                
                minDate={dayjs().subtract(1, 'year')}
                maxDate={dayjs()}
            />
            <TextField
                label="Enter weight"
                InputProps={{
                    endAdornment: <InputAdornment position="start">lbs</InputAdornment>,
                  }}
                
            ></TextField>
            </div>
        </Box>

    </Box>
  );
}