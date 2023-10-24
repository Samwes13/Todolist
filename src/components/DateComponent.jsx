import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DateComponent({ date, setDate}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker value={date}
                onChange={setDate}
                
                />
    </LocalizationProvider>
  );
}
