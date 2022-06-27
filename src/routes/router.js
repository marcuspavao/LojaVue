import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/pages/PaginaPrincipal'
import CadastroRoupa from '@/pages/CadastroRoupa'
import CadastroCliente from '@/pages/CadastroCliente'
import EstoqueView from '@/pages/EstoqueView'

const history = createWebHistory()

const routes =  [
    {
        path:'/', 
        component: Home,
        props: { msg: "Mensagem utilizando as props dentro do router do vue js funcionou" }
    },
    {
        path:'/cadastroroupa', 
        component: CadastroRoupa,
    },
    {
        path:'/cadastrocliente', 
        component: CadastroCliente
    },
    {
        path:'/estoque', 
        component: EstoqueView
    }
]

const router = createRouter({
    history,
    routes
});

export default router;
