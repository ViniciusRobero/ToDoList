# ToDoList
Essa aplicação tem como objetivo criar uma lista de tarefas, e seus itens. Que podem ser marcados, significando sua conclusão, ou podem ser excluídos.

## Tecnologias
Para esse o desenvolvimento desse sistema, foram utilizados as tecnologias Angular 5 no Front-End, ASP.NET WebApi utilizando o .NET Framework 4.6 com Visual Studio 2017 Community, NHibernate 5.0, banco de dados Microsoft SQL Server 2016.

# Configurando WebAPI
A api se encontra na pasta ToDoList.WebAPI. Para o perfeito funcionamento da mesma, as configurações abaixo devem ser efetuadas.

## Configurando a conexão do banco de dados e a API, utilizando NHibernate
Dentro do arquivo ./ToDoList.WebAPI/Models/hibernate.cfg.xml Você pode alterar a query string de acordo com o banco de dados escolhido.

```xml
<hibernate-configuration xmlns="urn:nhibernate-configuration-2.2">
  <session-factory>
    <property name="connection.provider">
      NHibernate.Connection.DriverConnectionProvider
    </property>
    <property name="connection.driver_class">
      NHibernate.Driver.SqlClientDriver
    </property>
    <property name="connection.connection_string">
      Server=localhost\SQLEXPRESS;Database=todolist; Integrated Security=True;
    </property>
    <property name="dialect">
    NHibernate.Dialect.MsSql2005Dialect
    </property>
  </session-factory>
</hibernate-configuration>
```
# Configurando o banco de dados
O banco utilizado na aplicação foi o Microsoft SQL Server 2016, porém pode ser utilizado qualquer outro banco, com as devidas alterações na query string na API e a criação dos objetos descritos abaixo.

## Criação de objetos para o projeto
```sql
CREATE TABLE Assignment (
	Discription Varchar(50),
	Id int IDENTITY(1,1),
    PRIMARY KEY (Id)
)
```
```sql
CREATE TABLE Item (
	Discription Varchar(50),
	Id int  IDENTITY(1,1),
	Status bit,
	IdAssignment int,
    PRIMARY KEY (Id),
	FOREIGN KEY (IdAssignment) REFERENCES Assignment(Id)
)
```


# Configurando o projeto Angular
A projeto em Angular 5 encontra-se na pasta ToDoList.Angular, e para o perfeito funcionamento do mesmo, as configurações abaixos devem ser efetuadas.

## Instalando os pacotes
Para que o front-end Angular funcione corretamente, é necessário que os pacotes locais do Node, utilizando o script abaixo no propmt de comando, no diretório onde está o projeto:
```script
	npm install 
```
E após isso, executar este outro comando para installar o Angular Material, que é de onde vem o design da aplicação Angular:

```script
	npm install --save @angular/material @angular/cdk
```


## Configurando rota para API
Dentro do arquivo ./ToDoListGenial.Angular/src/environments/environment.ts é necessário que seja feita a alteração abaixo, para indicar para a aplicação Client qual o endereço da API.
```javascript
export const environment = {
  production: false,
  api: 'http://localhost:{SuaPorta}/api'
};
```
