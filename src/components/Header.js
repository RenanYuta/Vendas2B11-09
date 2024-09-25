import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <AppBar position="static">
            <toolbar>
                <Typography variant="h6"
sx={{flexGrow: ''}}>
                    Loja Virtual
                </Typography>
                <Button color="inherit" component={Link} to="/">
                    Home
                </Button>
                <Button color="inherit" component={Link} to="/produtos">
                    Produtos
                </Button>
                <Button color="inherit" component={Link} to="/cadastrar-produto">
                    Cadastrar Produto
                </Button>
                <Button color="inherit" component={Link} to="/carrinho">
                    Carrinho
                </Button>
            </toolbar>
        </AppBar>
    );
}

export default Header;