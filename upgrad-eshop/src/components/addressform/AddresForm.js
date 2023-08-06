import Box from '@mui/material/Box';
import { useState } from "react";
import AddAddress from "../../components/addaddress/AddAddress";
import SelectAddress from "../../components/selectaddress/SelectAddress";


const AddressForm = ({ address, onAddressChange }) => {
  const [refresh, setRefresh] = useState(false);
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box width="50%">
        <SelectAddress
          value={address}
          onChange={onAddressChange}
          refresh={refresh}
        />
      </Box>
      <Box>
        <h4>-OR-</h4>
      </Box>
      <AddAddress refresh={refresh} setRefresh={setRefresh} />
    </Box>
  );
};

export default AddressForm;