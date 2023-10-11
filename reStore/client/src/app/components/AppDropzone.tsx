import { UploadFile } from '@mui/icons-material';
import { FormControl, FormHelperText, Typography } from '@mui/material';
import {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { UseControllerProps, useController } from 'react-hook-form'

interface Props extends UseControllerProps {}
export default function AppDropzone(props: Props) {

    const {fieldState, field} = useController({...props, defaultValue: null});

    const dzStyles = {
        display: 'flex',
        border: 'dashed 3px #eee',
        borderColor: '#eee',
        borderRadius: '5px',
        paddingTop: '30px',
        alignItems: 'center',
        height: 200,
        width: 500
    }
    const dzActive = {
        borderColor: 'green'
    }
    const [pictures, setPictures] = useState([])

    const onDrop = useCallback((acceptedFiles: any) => {
        // Do something with the files
        console.log(acceptedFiles);
        acceptedFiles[0] = Object.assign(acceptedFiles[0],
            {preview: URL.createObjectURL(acceptedFiles[0])});
        field.onChange(acceptedFiles[0]);
        console.log(acceptedFiles[0]);
        
        setPictures( pictures.concat(acceptedFiles[0]))
        console.log(pictures)
    }, [field])
    console.log(pictures)

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, maxFiles:3})
    // console.log(getRootProps)
    // console.log(getInputProps)
    // console.log(isDragActive)

    return (
        <div {...getRootProps()}>
            <FormControl style={isDragActive ? {...dzStyles, ...dzActive}: dzStyles} error={!!fieldState.error}>
                <input {...getInputProps()}/>
                <UploadFile sx={{fontSize: '100px'}}/>
                <Typography variant='h4'> Drop Image Here</Typography>
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
            </FormControl>
        </div>
    )
}
