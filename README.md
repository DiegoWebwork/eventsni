![alt text](https://github.com/DiegoWebwork/estrutura-de-dados/blob/main/universidade%20de%20vassouras%20Vertical.png)

# Curso: Engenharia de Software
# Aluno: Diego Rios dos Santos (202010774)
# Disciplina: Laboratório de Programação de Aplicativos Hibridos 8º Periodo
# Professor: Fabricio Dias

## <a name="tech-stack">⚙️ tecnologias usadas</a>

- Node.js
- Next.js
- TypeScript
- TailwindCSS
- Stripe
- Zod
- React Hook Form
- Shadcn
- uploadthing

## Rodando

Primeiro rode os comandos:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) Com o seu navegador, você pode ver o resultado.

Você pode começar a editar a página modificando app/page.tsx. A página é atualizada automaticamente conforme você edita o arquivo.

Este projeto utiliza next/font para otimizar e carregar automaticamente o Inter, uma fonte personalizada do Google Fonts.

## aprenda mais em:

Para aprender mais sobre Next.js, dê uma olhada nos seguintes recursos.

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

baseado em  [Javascriptmastery](https://github.com/adrianhajdin/event_platform).

## Deploy no Vercel

Uma das formas mais facieis de fazer o deploy da sua aplicação next.js é em [Vercel Platform](https://github.com/DiegoWebwork/eventsni) dos criadores do Next.js.

veja [Next.js deployment documentation](https://nextjs.org/docs/deployment) para mais detalhes.

# Relatório de Implementação do Sistema de Login com Next.js e Clerk

## Descrição da Funcionalidade Implementada
Foi implementado um sistema de login utilizando Next.js e a biblioteca Clerk. Este sistema permite que os usuários realizem autenticação segura na aplicação web, incluindo registro, login e gerenciamento de sessões. A integração com Clerk fornece funcionalidades avançadas, como autenticação baseada em tokens, recuperação de senha e suporte a múltiplos métodos de login (e-mail, redes sociais, etc.).

## Como a Engenharia de Software Contínua foi Aplicada
A Engenharia de Software Contínua foi aplicada seguindo as práticas de integração e entrega contínuas (CI/CD):
- **Controle de Versão:** Todo o código foi gerenciado por meio do Git, garantindo rastreamento de mudanças e colaboração.

- **Entrega Contínua:** O sistema foi implantado automaticamente na plataforma Vercel sempre que o código era mesclado no branch principal.

## Resultados da Experimentação
Após a implementação e testes, os seguintes resultados foram observados:
- **Segurança aprimorada:** O Clerk garantiu a criptografia de dados sensíveis e proteção contra ataques comuns, como força bruta.
- **Eficiência no desenvolvimento:** A biblioteca reduziu significativamente o tempo necessário para implementar autenticação segura.
- **Experiência do usuário aprimorada:** O processo de login foi rápido e intuitivo, resultando em maior engajamento dos usuários.

## O que Poderia ser Melhorado
Embora a implementação tenha sido bem-sucedida, algumas áreas para melhorias foram identificadas:
- **Customização da Interface:** A interface fornecida pelo Clerk poderia ser melhor personalizada para alinhar-se ao design da aplicação.
- **Cobertura de Testes:** Aplicar a cobertura de testes automatizados para incluir cenários mais complexos.
- **Suporte Offline:** Adicionar suporte para que os usuários realizem login mesmo em situações de conectividade limitada.

---





