import { FormControl, InputLabel, Select, MenuItem, FormHelperText, InputBase, styled } from "@mui/material";
import { UseControllerProps, useController } from "react-hook-form";

interface Props extends UseControllerProps {
    label: string;
    items: string[];
}
// const BootstrapInput = styled(InputBase)(({ theme }) => ({
//     'label + &': {
//       marginTop: theme.spacing(3),
//     },
//     '& .MuiInputBase-input': {
//       borderRadius: 4,
//       position: 'relative',
//       backgroundColor: theme.palette.background.paper,
//       border: '1px solid #ced4da',
//       fontSize: 16,
//       padding: '10px 26px 10px 12px',
//       transition: theme.transitions.create(['border-color', 'box-shadow']),
//       // Use the system font instead of the default Roboto font.
//       fontFamily: [
//         '-apple-system',
//         'BlinkMacSystemFont',
//         '"Segoe UI"',
//         'Roboto',
//         '"Helvetica Neue"',
//         'Arial',
//         'sans-serif',
//         '"Apple Color Emoji"',
//         '"Segoe UI Emoji"',
//         '"Segoe UI Symbol"',
//       ].join(','),
//       '&:focus': {
//         borderRadius: 4,
//         borderColor: '#80bdff',
//         boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
//       },
//     },
//   }));
export default function AppSelectList(props: Props) {
    const {fieldState, field} = useController({...props, defaultValue: ''})
    return (
        <>
        {/* <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="demo-customized-textbox">
                    cumtomize
            </InputLabel>
            <BootstrapInput id="demo-customized-textbox" />
        </FormControl> */}

        <FormControl fullWidth error={!!fieldState.error}>
            <InputLabel >{props.label}</InputLabel>
            <Select
                value={field.value}
                label={props.label}
                onChange={field.onChange}
            >
                {props.items.map((item, index) => (
                    <MenuItem key = {index}value={item}>{item}</MenuItem>
                ))}
            </Select>
            <FormHelperText>{fieldState.error?.message}</FormHelperText>
        </FormControl>
        </>
    )
}