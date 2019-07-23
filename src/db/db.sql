-- SQL statements

CREATE DATABASE `db_dev` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
CREATE DATABASE `db_test` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
CREATE DATABASE `db_prod` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;


/* Sequelize commands

-- Initialize without config (the config file alredy exist, it was copied from another project)
sequelize init:models
sequelize init:seeders
sequelize init:migrations

-- First model
sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string

-- First migration
sequelize db:migrate --env development
*/
