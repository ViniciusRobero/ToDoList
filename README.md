## ToDoList
Essa aplicação tem como objetivo criar uma lista de tarefas - e seus itens. Que podem ser marcados, significando sua conclusão, ou excluídos.

## Tecnologias
Angular 5, ASP.NET WebApi utilizando o .NET Framework 4.6.1, NHibernate, Banco Microsoft SQL Server 2016.

## Configurando base de dados 
Você pode alterar a query string de acordo com o banco de dados escolhido.

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
## Criação de objetos para o projeto:

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
