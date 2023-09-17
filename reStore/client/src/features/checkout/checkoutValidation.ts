import * as yup from 'yup';

export const validationSchema = [
    yup.object({
    fullname: yup.string().required('Full name is required'),
    address1: yup.string().required('Address lin 1 is required'),
    address2: yup.string().required('Address lin 2 is required'),
    city: yup.string().required('City is required'),
    state: yup.string().required('state is required'),
    zip: yup.string().required('zip is required'),
    country: yup.string().required('country is required')
    }),
    yup.object(),
    yup.object({
        nameOnCard: yup.string().required()
    })
]