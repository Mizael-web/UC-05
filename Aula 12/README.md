# 🎓 Sistema Acadêmico - Regras de Negócio

Este sistema acadêmico tem como objetivo gerenciar **alunos, professores, turmas e endereços**. Todas as ações são controladas por um usuário com papel de **secretário**, que possui permissões administrativas completas.

---

## 📘 Visão Geral

O sistema é composto pelas seguintes entidades principais:

- **Secretário**: Responsável por todas as operações administrativas.
- **Professor**: Responsável por turmas.
- **Aluno**: Vinculado a uma turma, com acesso restrito.
- **Turma**: Agrupa alunos e possui um professor responsável.
- **Endereço**: Todos os usuários têm um endereço.

---

## 🧱 Entidades do Sistema

| Entidade     | Atributos principais                                                  |
|--------------|------------------------------------------------------------------------|
| `Secretario` | `id`, `nome`, `email`, `senha`                                        |
| `Aluno`      | `matricula`, `nome`, `email`, `senha`, `turma_id`, `endereco_id`      |
| `Professor`  | `matricula`, `nome`, `email`, `senha`, `endereco_id`                  |
| `Turma`      | `id`, `nome`, `descricao`, `turno`, `professor_id`                    |
| `Endereco`   | `id`, `cep`, `logradouro`, `numero`, `bairro`, `localidade`, `uf`, `ponto_referencia`, `usuario_id`, `tipo_usuario` |

---

## 🔐 Perfis e Permissões

| Ação                                       | Secretário | Professor | Aluno |
|-------------------------------------------|------------|-----------|-------|
| Criar aluno                               | ✅         | ❌        | ❌    |
| Criar professor                           | ✅         | ❌        | ❌    |
| Criar turma                               | ✅         | ❌        | ❌    |
| Editar aluno/professor                    | ✅         | ❌        | ❌    |
| Editar seu próprio endereço               | ✅         | ✅        | ✅    |
| Atribuir professor a uma turma            | ✅         | ❌        | ❌    |
| Ver todos os alunos                       | ✅         | ✅        | ❌    |
| Ver seus dados                            | ✅         | ✅        | ✅    |
| Ver todos os professores                  | ✅         | ❌        | ❌    |
| Ver todas as turmas                       | ✅         | ✅        | ❌    |
| Aluno vê a turma que está                 | ✅         | ✅        | ✅    |

---

## 🧠 Regras de Negócio

### 📌 Secretário
- Pode cadastrar, editar e excluir **alunos**, **professores** e **turmas**.
- Responsável por **atribuir professores às turmas**.
- Pode visualizar **todas as informações** do sistema.
- Pode gerenciar **endereços de qualquer usuário**.

### 📌 Aluno
- Pode visualizar **seus próprios dados** e o endereço.
- Pode visualizar a **turma em que está matriculado**.
- Pode **editar apenas seu endereço**.

### 📌 Professor
- Pode visualizar suas **turmas atribuídas**.
- Pode ver os **alunos das turmas que ministra**.
- Pode **editar seu próprio endereço**.
- **Não pode criar ou editar registros** no sistema.

### 📌 Turma
- Criada e atribuída **exclusivamente pelo secretário**.
- Contém vários alunos.
- Está vinculada a **um único professor**.

### 📌 Endereço
- Cada usuário (aluno, professor, secretário) tem um único endereço.
- Pode ser criado/atualizado **pelo próprio usuário ou pelo secretário**.
- Identificado por `usuario_id` + `tipo_usuario`.

---

## 📐 Relacionamentos

- `Aluno` → pertence a uma `Turma`
- `Turma` → pertence a um `Professor`
- `Aluno`, `Professor`, `Secretário` → têm `1 Endereço`
- `Endereço` → pertence a 1 usuário (com tipo dinâmico)

---

## 🚦 Fluxos de Operação

### 🧾 Fluxo: Cadastro de Aluno
1. Secretário autentica no sistema.
2. Preenche os dados do novo aluno.
3. Atribui o aluno a uma turma existente.
4. Adiciona o endereço (ou permite que o aluno adicione).
5. Aluno recebe acesso para consultar seus dados.

### 🧾 Fluxo: Criação de Turma
1. Secretário define: nome, descrição e turno.
2. Seleciona o professor responsável.
3. (Opcional) atribui alunos à turma depois.

---

## 🔐 Segurança e Acesso

- O sistema usa **JWT** para autenticação.
- O controle de acesso é feito por **RBAC (Role-Based Access Control)**.
- Todas as rotas sensíveis são protegidas por middleware de autorização.
- Ações administrativas só são permitidas para usuários com papel de `secretario`.

---

## ✅ Próximos Passos

- [ ] Criar models Sequelize com validações e relacionamentos.
- [ ] Implementar middleware de autenticação e autorização.
- [ ] Criar migrations com base nas regras acima.
- [ ] Implementar os services e controllers.
- [ ] Criar seed inicial com um secretário padrão.

---
