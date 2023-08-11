import { Button, TextField, styled } from "@mui/material";
import { Grid } from '@mui/material';

export const ProductImage = styled('div')(({ theme }) => ({
    width: '10rem',
    height: '10rem',
    overflow: 'hidden',
    position: 'relative',
    borderRadius: '1rem',
    boxShadow: '0px 0px 5px #0000005e',
}));

export const Image = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%',
    borderRadius: '1rem',
    backgroundImage: `url(https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp)`,
    backgroundSize: 'cover',
    boxShadow: '0px 0px 5px #0000005e',
    transition: 'all 2s ease-in-out',

    ":hover":{
        transform: 'scale(1.6)'
    }
}));


export const Container = styled(Grid)(({ theme }) => ({
    backgroundColor: '#e3ebf7',
    height: '100%',
    textAlign: 'center',
    display:'flex',
    justifyContent: 'center',
    paddingTop: '5rem'
}));

export const ContainerProducts = styled(Grid)(({ theme }) => ({
    backgroundColor: 'white',
    flexBasis: '40%',
    borderRadius: '1rem',
    height:'18rem',
    boxShadow: '0px 0px 5px #0000005e'

}));

export const ContainerSumarry = styled(Grid)(({ theme }) => ({
    backgroundColor: 'white',
    marginLeft: '2rem',
    flexBasis: '20%',
    borderRadius: '1rem',
    height:'25rem',
    boxShadow: '0px 0px 5px #0000005e'
}));

export const QtdContainer = styled(Grid)(({ theme }) => ({
    "span": {
        marginLeft: '1rem',
        marginRight: '1rem',
    },

    "button": {
        fontSize: '1rem'
    }
}));

export const DescriptionProduct = styled(Grid)(({ theme }) => ({
    fontSize: '1rem',

    "p": {
        marginBottom: '1rem'
    }
}));

export const CheckoutButton = styled(Button)(({ theme }) => ({
    width: '80%'
}));

export const CupomInput = styled(TextField)(({ theme }) => ({
    width: '80%'
}));