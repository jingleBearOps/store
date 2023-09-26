import { Typography, Grid, Paper, Box, Button } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import AppTextInput from "../../app/components/AppTextInput";
import { Product } from "../../app/models/product";
import { useEffect } from "react";
import useProducts from "../../app/hooks/useProducts";
import AppSelectList from "../../app/components/AppSelectList";
import AppDropzone from "../../app/components/AppDropzone";

interface Props {
    product?: Product;
    cancelEdit: () => void;
}
export default function ProductForm({product, cancelEdit}: Props) {
    const { control, reset, handleSubmit, watch } = useForm();
    const {brands, types} = useProducts(); 
    const watchFile = watch('file', null);

    useEffect(() => {
        if(product) reset(product);
    },[product, reset])

    function handleSubmitData(data: FieldValues){
        console.log(data);
    }
    return (
        <Box component={Paper} sx={{p: 4}}>
            <Typography variant="h4" gutterBottom sx={{mb: 4}}>
                Product Details
            </Typography>
            <form onSubmit={handleSubmit(handleSubmitData)}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <AppTextInput control={control} name='name' label='Product name' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <AppSelectList control={control} items = {brands} name='brand' label='Brand' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <AppSelectList control={control} items = {types} name='type' label='Type' />
                </Grid>
{/* 
                above: dropdown select
                bottom: customized input */}

                {/* <Grid item xs={12} sm={6}>
                    <AppTextInput control={control} name='brand' label='Brand' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <AppTextInput control={control} name='type' label='Type' />
                </Grid> */}
                <Grid item xs={12} sm={6}>
                    <AppTextInput type='number' control={control} name='price' label='Price' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <AppTextInput type = 'number' control={control} name='quantityInStock' label='Quantity in Stock' />
                </Grid>
                <Grid item xs={12}>
                    <AppTextInput multiline={true} rows={4} control={control} name='description' label='Description' />
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent='space-between' alignItems='center'>
                        <AppDropzone control={control} name='file'  />
                        {watchFile ? (
                            <img src={watchFile.preview} style={{maxHeight: 200}} alt="preview" />
                        ): 
                            <img src={product?.pictureUrl} style={{maxHeight: 200}} alt={product?.name} />
                        }
                    </Box>
                </Grid>
            </Grid>
            <Box display='flex' justifyContent='space-between' sx={{mt: 3}}>
                <Button onClick={cancelEdit}variant='contained' color='inherit'>Cancel</Button>
                <Button type = 'submit' variant='contained' color='success'>Submit</Button>
            </Box>
            </form>
        </Box>
    )
}