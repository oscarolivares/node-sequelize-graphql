-- SQL statements

CREATE DATABASE `db_dev` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
CREATE DATABASE `db_test` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
CREATE DATABASE `db_prod` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;


/* Sequelize commands

-- Initialize without config (the config file alredy exist, it was copied from another project)
sequelize init:models
sequelize init:seeders
sequelize init:migrations

-- Create model
sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string

-- Run migration
sequelize db:migrate --env development

-- Genrate a seed to populate the db
sequelize seed:generate --name demo-user

-- Run all seeds
sequelize db:seed:all

-- Reset all seeds
sequelize db:seed:undo:all

-- Reset de database table
sequelize db:migrate:undo:all
sequelize db:migrate
*/
