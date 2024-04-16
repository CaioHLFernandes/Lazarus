Gerenciamento de Usuários e Perfis
Este é um projeto de uma aplicação web para gerenciamento de usuários e perfis, desenvolvido utilizando Angular para o frontend e Java com Spring Boot para o backend. O banco de dados utilizado é o H2, uma escolha ideal para desenvolvimento local devido à sua simplicidade e não necessidade de configurações complexas como o Docker.

Tecnologias Utilizadas
Angular: Framework JavaScript/TypeScript utilizado para construir a interface de usuário dinâmica e responsiva. Com o Angular, é possível criar componentes reutilizáveis, implementar roteamento para diferentes páginas da web e interagir com o backend por meio de requisições HTTP.

Java com Spring Boot: Plataforma robusta para desenvolvimento de aplicativos Java, facilitando a criação de APIs RESTful e o gerenciamento de dependências. O Spring Boot simplifica a configuração do projeto e oferece uma série de recursos para implementar serviços web escaláveis e seguros.

Banco de Dados H2: Banco de dados relacional em memória, ideal para desenvolvimento e testes devido à sua capacidade de armazenamento local sem a necessidade de instalação de um servidor de banco de dados separado. O H2 é uma excelente escolha para ambientes de desenvolvimento, pois oferece rápida inicialização e facilidade de uso.

Funcionalidades
Gerenciamento de Usuários: Permite adicionar, atualizar, visualizar e excluir usuários do sistema. Cada usuário possui um nome e pode ser associado a um ou mais perfis.

Gerenciamento de Perfis: Possibilita adicionar, atualizar, visualizar e excluir perfis de acesso. Cada perfil tem uma descrição e pode ser associado a um ou mais usuários.

Benefícios do Projeto
Facilidade de Desenvolvimento: Utilizando Angular e Spring Boot, o projeto se beneficia de um ambiente de desenvolvimento moderno e produtivo, com ferramentas e recursos avançados para agilizar o desenvolvimento de aplicações web.

Banco de Dados Integrado: O uso do H2 como banco de dados integrado simplifica o processo de desenvolvimento, eliminando a necessidade de configurações complexas e facilitando a colaboração entre os membros da equipe.

Flexibilidade e Escalabilidade: Graças à arquitetura modular do Angular e à robustez do Spring Boot, o projeto pode ser facilmente expandido e escalado para atender às necessidades futuras de crescimento e evolução.

Como Executar o Projeto
Para executar o projeto localmente, siga as instruções abaixo:
Clone este repositório para sua máquina local.
Certifique-se de ter o Angular CLI e o Maven instalados em sua máquina.
Navegue até a pasta do projeto no terminal.
Execute mvn spring-boot:run para iniciar o servidor backend.
Em outra janela do terminal, navegue até a pasta frontend do projeto.
Execute ng serve para iniciar o servidor frontend.
Abra seu navegador e acesse http://localhost:4200.
Agora você deve ver a aplicação sendo executada localmente em seu navegador. Divirta-se explorando as funcionalidades de gerenciamento de usuários e perfis!
