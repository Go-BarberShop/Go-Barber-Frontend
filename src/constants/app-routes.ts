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
        barbeiros_editar: (id: string) => `/barbeiros/editar/${id}`,
        servicos: {
            name: "/servicos"
        },
        produtos: {
            name: "/produtos"
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