import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock, MdAccountCircle } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";


import { Container, Title, Column, Wrapper, TitleRegister, SubtitleRegister, LinkRegister } from './styles';

const Register = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try{
            const {data} = await api.get(`/users?email=${formData.email}`)
            if(!data.length){
                await api.post('/users',formData);
                navigate('/feed')
            }else{
                alert('Usuário ja existente')
            }

        }catch(e){
            alert('Houve um erro, tente novamente')
        }
    };

    return (<>
        <Header />
        <Container>
            <Column flex={2}>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column  flex={1}>
                <TitleRegister>Comece agora grátis</TitleRegister>
                <SubtitleRegister>Crie sua conta e make the change.</SubtitleRegister>
                <Wrapper>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="Nome completo" leftIcon={<MdAccountCircle />}  name="name" control={control} />
                    {errors.usuario && <span>Usuário é obrigatório</span>}
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>
                </Wrapper>
                <SubtitleRegister>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubtitleRegister>
                <LinkRegister>Já tenho conta. <a href="/login">Fazer login</a></LinkRegister>
            </Column>
        </Container>
    </>)
}

export { Register }