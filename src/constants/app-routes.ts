export const APP_ROUTES = {
    private: {
        home: {
            name: "/home"
        },
        barbeiros: {
            name: "/barbeiros"
        },
        barbeiros_cadastro:{
            name: "/barbeiros/novo"
        },
        servicos: {
            name: "/servicos"
        },
        cadastrar_servico: {
            name: "/servicos/cadastrar-servico"
        },
        produtos: {
            name: "/produtos"
        },
        cadastrar_produtos: {
            name: "/produtos/cadastrar-produto"
        },
        novo_estoque: {
            name: "/produtos/novo-estoque"
        },
        promocoes: {
            name: "/promocoes"
        },
        cadastrar_promocao:{
            name: "/promocoes/cadastrar-promocao"
        },
        unauthorized: {
            name: "/unauthorized"
        }
    },
    public: {
        login: '/',
    }
};