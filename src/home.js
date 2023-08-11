import { useEffect, useState } from 'react';
import * as Styled from './home.styled';
import { Grid, Button, Input, TextField } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

function Home() {
    const [qtdRoupa, setQtdRoupa] = useState(1);
    const [valor, setValor] = useState(120);

    function mudaRoupa(adicao) {
        if (adicao) {
            setQtdRoupa(qtdRoupa + 1);
        } else {
            if (qtdRoupa > 0)
                setQtdRoupa(qtdRoupa - 1);
        }
    }

    useEffect(() => {
        setValor(qtdRoupa * 120);
    }, [qtdRoupa])

    return (
        <Styled.Container>
            <Styled.ContainerProducts>
                <Grid>
                    <Grid marginLeft={'1rem'} marginTop={'1rem'} marginBottom={'1rem'} fontSize={'1rem'} fontWeight={'500'}>
                        Carrinho
                    </Grid>
                    <hr />
                    <Grid marginLeft={'1rem'} marginTop={'1rem'} marginRight={'1rem'}>
                        <Grid justifyContent={'space-between'} display={'flex'} alignItems={'center'}>
                            <Grid display={'flex'} alignItems={'center'}>
                                <Styled.ProductImage>
                                    <Styled.Image />
                                </Styled.ProductImage>
                                <Styled.DescriptionProduct marginLeft={'2rem'}>
                                    <p>Camisa Redfly Stylus</p>
                                    <p>Cor: Vermelho</p>
                                    <p>Tamanho: GG</p>
                                </Styled.DescriptionProduct>
                            </Grid>
                            <Grid display={'flex'} textAlign={'center'} alignContent={'center'} flexDirection={'column'}>
                                <Styled.QtdContainer alignItems={'center'} display={'flex'} marginBottom={'1rem'}>
                                    <Button onClick={() => mudaRoupa(false)} variant='contained'> - </Button>
                                    <span>{qtdRoupa}</span>
                                    <Button onClick={() => mudaRoupa(true)} variant='contained'> + </Button>
                                </Styled.QtdContainer>

                                <Grid>R$ {`${valor},00`}</Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Styled.ContainerProducts>
            <Styled.ContainerSumarry>
                <Grid marginLeft={'1rem'} marginTop={'1rem'} marginBottom={'1rem'} fontSize={'1rem'} fontWeight={'500'}>
                    Resumo
                </Grid>
                <hr />

                {qtdRoupa == 0 &&
                    <Grid  display={'flex'} textAlign={'center'} justifyContent={'center'} flexDirection={'column'} >
                        <Grid marginTop={'5rem'} display={'flex'} color={"#969797"} fontSize={'1.5rem'} alignItems={'center'} flexDirection={'column'}>
                            <SentimentVeryDissatisfiedIcon style={{fill: '#969797', fontSize: '3rem'}}/>

                            Carrinho Vazio
                        </Grid>


                    </Grid>
                }

                {qtdRoupa > 0 &&
                    <Grid display={'flex'} flexDirection={'column'}>
                        <Grid marginTop={'1.5rem'} display={'flex'} width={'100%'} justifyContent={'space-around'}>
                            Produtos <span>R$ {`${valor},00`}</span>
                        </Grid>
                        <Grid marginTop={'1.5rem'} marginBottom={'1.5rem'} display={'flex'} width={'100%'} justifyContent={'space-around'}>
                            Entrega <span>R$ 15,00</span>
                        </Grid>
                        <Grid marginTop={'1.5rem'} marginBottom={'1.5rem'} display={'flex'} width={'100%'} justifyContent={'space-around'}>
                            <Styled.CupomInput variant="outlined" size='small' label="Cupom" />
                        </Grid>
                        <Grid>
                            <hr />
                        </Grid>
                        <Grid fontWeight={'500'} marginTop={'1.5rem'} display={'flex'} width={'100%'} justifyContent={'space-around'}>
                            Total <span>R$ {`${valor + 15},00`}</span>
                        </Grid>
                        <Grid marginTop={'1.5rem'}>
                            <Styled.CheckoutButton size='large' variant='contained'>Concluir Pedido</Styled.CheckoutButton>
                        </Grid>
                    </Grid>
                }

            </Styled.ContainerSumarry>
        </Styled.Container>
    )
}

export default Home;