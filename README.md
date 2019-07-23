# Test de integración entre Sequelize y GraphQL

El objetivo de este ejercicio es implementar modelos con el ORM
de sequelize sobre la base de datos MariaDB/MySQL y servirlos a
través de GraphQL en lugar de una API REST.

El por qué:

1. Aprovechar la robustez de una base de datos SQL (sequelize
   soporta distintos DBMS) para proyectos que por las carácterísticas
   de sus datos requieran una DB SQL.
2. Implementar un ORM para darle una mayor escalabilidad a la DB.
   Sequelize implementa un sistema de migraciones muy similar al de
   Django y además cuenta con un sistema de seeders para poblar la DB
   rapidamente durante el desarrollo y las pruebas.
3. Aprovechar los veneficios que representan las querys de GraphQL.
